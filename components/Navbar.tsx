"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, showNotification, hideNotification, lastAddedItem } = useCart();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/tienda", label: "Tienda" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-2xl font-serif text-text-primary">
              Latidos
            </span>
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-text-primary hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Cart Icon - Right */}
          <div className="relative">
            <Link
              href="/carrito"
              className="relative p-2 text-text-primary hover:text-accent transition-colors duration-200 block"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Notificación de producto agregado */}
            {showNotification && lastAddedItem && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 p-4 animate-slide-down">
                <button
                  onClick={hideNotification}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-sm text-green-600 font-medium mb-2">
                  ¡Agregado al carrito!
                </p>
                <p className="text-sm text-text-primary truncate mb-3">
                  {lastAddedItem.name}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={hideNotification}
                    className="flex-1 text-sm py-2 px-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Seguir comprando
                  </button>
                  <Link
                    href="/checkout"
                    onClick={hideNotification}
                    className="flex-1 text-sm py-2 px-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-center"
                  >
                    Ir a pagar
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
