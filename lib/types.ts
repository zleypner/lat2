/**
 * Tipos compartidos de la aplicación
 */

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Precio en CRC (colones)
  image: string;
  category: string;
  badge?: string | null;
  badgeColor?: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number; // Precio unitario en CRC
  quantity: number;
  image: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  showNotification: boolean;
  hideNotification: () => void;
  lastAddedItem: CartItem | null;
}
