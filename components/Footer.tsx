import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-2xl font-serif text-white">Latidos</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tecnología médica confiable para cuidar lo que más importa: tu
              salud.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-5">
              Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tienda"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Política de devolución
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-5">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@latidos.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>hola@latidos.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491112345678"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+54 9 11 1234-5678</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Buenos Aires, Argentina</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Seguinos */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-5">
              Seguinos
            </h3>
            <a
              href="https://instagram.com/latidos.salud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-sm">@latidos.salud</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Latidos. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                Términos y condiciones
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
