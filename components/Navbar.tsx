"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/tienda", label: "Tienda" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
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
          <Link
            href="#"
            className="relative p-2 text-text-primary hover:text-accent transition-colors duration-200"
            aria-label="Carrito de compras"
          >
            <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
