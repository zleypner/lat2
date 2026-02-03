"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCRC } from "@/lib/currency";

export default function CarritoPage() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-pink-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-pink-section rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-text-muted" />
            </div>
            <h1 className="heading-serif text-3xl sm:text-4xl text-text-primary mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-text-muted text-lg mb-8">
              Explorá nuestra tienda y encontrá los dispositivos médicos que
              necesitás.
            </p>
            <Link
              href="/tienda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              Ir a la tienda
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Tu Carrito
          </h1>
          <p className="text-text-muted">
            {totalItems} {totalItems === 1 ? "producto" : "productos"}
          </p>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-3xl shadow-card overflow-hidden mb-6">
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li key={item.id} className="p-4 sm:p-6">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-pink-soft flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-lg text-text-primary truncate">
                      {item.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-3">
                      {formatCRC(item.price)} c/u
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-50 rounded-l-full transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="w-4 h-4 text-text-muted" />
                        </button>
                        <span className="px-3 text-sm font-medium text-text-primary min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-50 rounded-r-full transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-4 h-4 text-text-muted" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="font-bold text-text-primary">
                      {formatCRC(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-3xl shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-muted">Subtotal</span>
            <span className="font-bold text-xl text-text-primary">
              {formatCRC(subtotal)}
            </span>
          </div>
          <p className="text-sm text-text-muted mb-6">
            Envío calculado en el siguiente paso
          </p>

          <Link
            href="/checkout"
            className="block w-full py-4 bg-accent text-white text-center font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
          >
            Proceder al pago
          </Link>

          <Link
            href="/tienda"
            className="block w-full py-3 mt-3 text-center text-accent font-medium hover:underline"
          >
            Continuar comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
