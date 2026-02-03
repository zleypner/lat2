"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { CartItem, CartContextType, Product } from "@/lib/types";

const CART_STORAGE_KEY = "latidos-cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
    setIsHydrated(true);
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [items, isHydrated]);

  const addItem = useCallback((product: Product) => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    };

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Incrementar cantidad si ya existe
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Agregar nuevo item
      return [...currentItems, newItem];
    });

    // Mostrar notificación
    setLastAddedItem(newItem);
    setShowNotification(true);

    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }, []);

  const hideNotification = useCallback(() => {
    setShowNotification(false);
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity < 1) {
      setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // Memoizar totales para evitar re-renders innecesarios
  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      showNotification,
      hideNotification,
      lastAddedItem,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal, showNotification, hideNotification, lastAddedItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
