"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Copy,
  Check,
  ArrowLeft,
  ShoppingBag,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { formatCRC } from "@/lib/currency";
import { SINPE_NUMBER, SINPE_RECIPIENT } from "@/lib/config";

export default function CheckoutPage() {
  const { items, subtotal, totalItems, clearCart } = useCart();
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [reference, setReference] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCopyNumber = async () => {
    try {
      // Clean number for copying (remove dashes)
      const cleanNumber = SINPE_NUMBER.replace(/-/g, "");
      await navigator.clipboard.writeText(cleanNumber);
      setCopied(true);
      showToast("Número copiado al portapapeles");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      showToast("Error al copiar. Copiá manualmente.");
    }
  };

  const handleConfirmPayment = () => {
    if (!reference.trim()) {
      showToast("Por favor ingresá el número de comprobante");
      return;
    }

    // Save order to localStorage for demo purposes
    const order = {
      id: Date.now(),
      items,
      subtotal,
      reference: reference.trim(),
      date: new Date().toISOString(),
      status: "pending",
    };

    try {
      const existingOrders = JSON.parse(
        localStorage.getItem("latidos-orders") || "[]"
      );
      localStorage.setItem(
        "latidos-orders",
        JSON.stringify([...existingOrders, order])
      );
    } catch (error) {
      console.error("Error saving order:", error);
    }

    setIsConfirmed(true);
    clearCart();
  };

  // Empty cart redirect
  if (items.length === 0 && !isConfirmed) {
    return (
      <div className="min-h-screen bg-pink-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-pink-section rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-text-muted" />
            </div>
            <h1 className="heading-serif text-3xl sm:text-4xl text-text-primary mb-4">
              No hay productos para pagar
            </h1>
            <p className="text-text-muted text-lg mb-8">
              Agregá productos a tu carrito para continuar.
            </p>
            <Link
              href="/tienda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Confirmation success
  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-pink-soft">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="bg-white rounded-3xl shadow-card p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="heading-serif text-3xl text-text-primary mb-4">
              ¡Gracias por tu compra!
            </h1>
            <p className="text-text-muted text-lg mb-2">
              Hemos recibido tu confirmación de pago.
            </p>
            <p className="text-text-muted mb-8">
              Comprobante: <strong>{reference}</strong>
            </p>
            <p className="text-sm text-text-muted mb-8">
              Te contactaremos pronto para coordinar la entrega de tus
              productos. Si tenés alguna consulta, escribinos por WhatsApp.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Back Link */}
        <Link
          href="/carrito"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al carrito
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SINPE Payment Section */}
          <div>
            <h1 className="heading-serif text-3xl text-text-primary mb-6">
              Pagar con SINPE Móvil
            </h1>

            {/* SINPE Card */}
            <div className="bg-white rounded-3xl shadow-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-text-primary">
                    SINPE Móvil
                  </h2>
                  <p className="text-sm text-text-muted">
                    Transferencia instantánea
                  </p>
                </div>
              </div>

              {/* Number Display */}
              <div className="bg-pink-soft rounded-2xl p-4 mb-4">
                <p className="text-sm text-text-muted mb-1">
                  Número SINPE Móvil
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-text-primary tracking-wide">
                    {SINPE_NUMBER}
                  </span>
                  <button
                    onClick={handleCopyNumber}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-text-primary text-sm font-medium rounded-full shadow-sm hover:shadow transition-shadow"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Recipient */}
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-1">A nombre de</p>
                <p className="font-semibold text-text-primary">
                  {SINPE_RECIPIENT}
                </p>
              </div>

              {/* Amount */}
              <div className="bg-accent/10 rounded-2xl p-4 mb-6">
                <p className="text-sm text-text-muted mb-1">Monto a pagar</p>
                <p className="text-3xl font-bold text-accent">
                  {formatCRC(subtotal)}
                </p>
              </div>

              {/* Instructions */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-semibold text-text-primary mb-3">
                  Instrucciones
                </h3>
                <ol className="space-y-2 text-sm text-text-muted">
                  <li className="flex gap-2">
                    <span className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      1
                    </span>
                    Abrí la app de tu banco y seleccioná SINPE Móvil
                  </li>
                  <li className="flex gap-2">
                    <span className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      2
                    </span>
                    Ingresá el número y monto indicado arriba
                  </li>
                  <li className="flex gap-2">
                    <span className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      3
                    </span>
                    Confirmá la transferencia y copiá el comprobante
                  </li>
                  <li className="flex gap-2">
                    <span className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                      4
                    </span>
                    Pegá el número de comprobante abajo
                  </li>
                </ol>
              </div>
            </div>

            {/* Reference Input */}
            <div className="bg-white rounded-3xl shadow-card p-6">
              <label
                htmlFor="reference"
                className="block font-semibold text-text-primary mb-2"
              >
                Número de comprobante
              </label>
              <p className="text-sm text-text-muted mb-4">
                Ingresá el número de comprobante que te dio tu banco después del
                SINPE
              </p>
              <input
                type="text"
                id="reference"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Ej: 123456789"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />

              <button
                onClick={handleConfirmPayment}
                className="w-full mt-4 py-4 bg-accent text-white font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
              >
                Confirmar pago
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="heading-serif text-2xl text-text-primary mb-6">
              Resumen del pedido
            </h2>

            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              {/* Items */}
              <ul className="divide-y divide-gray-100">
                {items.map((item) => (
                  <li key={item.id} className="p-4 flex gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-pink-soft flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-text-primary text-sm truncate">
                        {item.name}
                      </h3>
                      <p className="text-text-muted text-sm">
                        {formatCRC(item.price)} x {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-text-primary">
                      {formatCRC(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Totals */}
              <div className="border-t border-gray-100 p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">
                    Subtotal ({totalItems}{" "}
                    {totalItems === 1 ? "producto" : "productos"})
                  </span>
                  <span className="text-text-primary">
                    {formatCRC(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Envío</span>
                  <span className="text-text-primary">A coordinar</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-100">
                  <span className="font-semibold text-text-primary">Total</span>
                  <span className="font-bold text-xl text-accent">
                    {formatCRC(subtotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
