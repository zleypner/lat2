import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 lg:py-20 bg-pink-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Container */}
        <div className="relative bg-dark rounded-4xl lg:rounded-5xl overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-gray-900 opacity-90" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-5 max-w-3xl mx-auto leading-tight">
              ¿Listo para cuidar tu salud con tecnología confiable?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Explorá nuestra selección de dispositivos médicos certificados y
              encontrá el que mejor se adapte a tus necesidades.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tienda" className="btn-primary text-base">
                Explorar tienda
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-text-primary font-medium rounded-full transition-all duration-200 hover:bg-gray-100"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
