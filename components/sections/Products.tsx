"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/lib/products";
import { formatCRC } from "@/lib/currency";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { Product } from "@/lib/types";

export default function Products() {
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    showToast(`${product.name} agregado al carrito`);
  };

  return (
    <section className="py-20 lg:py-24 bg-pink-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-text-primary mb-2">
              Productos recomendados
            </h2>
            <p className="text-text-muted text-lg">
              Por su eficacia y seguridad comprobada
            </p>
          </div>
          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-200"
          >
            Ver todos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-card card-hover"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-pink-soft overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-4 left-4 z-10 px-3 py-1.5 ${product.badgeColor} text-white text-sm font-medium rounded-full`}
                  >
                    {product.badge}
                  </div>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-semibold tracking-wider text-text-muted uppercase">
                  {product.category}
                </span>
                <h3 className="text-xl font-serif text-text-primary mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-text-primary">
                    {formatCRC(product.price)}
                  </span>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors duration-200 active:scale-95"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
