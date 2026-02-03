import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, MapPin, Headphones } from "lucide-react";
import { assets } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-soft via-pink-section/30 to-pink-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Certified Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-pink-border mb-8">
              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-accent" />
              </div>
              <span className="text-sm text-text-primary font-medium">
                Dispositivos certificados
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-text-primary mb-6 leading-tight">
              Tecnología médica confiable para cuidar lo que más importa:{" "}
              <span className="text-accent">tu salud</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              En Latidos seleccionamos dispositivos médicos seguros,
              certificados y fáciles de usar, pensados para acompañarte en cada
              etapa de tu bienestar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/tienda" className="btn-primary text-base">
                Ver dispositivos médicos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/nosotros" className="btn-secondary text-base">
                Conocer más
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-pink-border/50">
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Shield className="w-4 h-4 text-accent" />
                <span>Certificación CE</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Envío a todo el país</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Headphones className="w-4 h-4 text-accent" />
                <span>Soporte experto</span>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative lg:pl-8">
            {/* Background decorative shapes */}
            <div className="absolute inset-0 -right-20">
              {/* Large pink rounded background */}
              <div className="absolute top-0 right-0 w-[90%] h-[95%] bg-pink-section rounded-[2.5rem] transform translate-x-4" />
              {/* Smaller overlay card effect */}
              <div className="absolute top-8 right-8 w-[85%] h-[90%] bg-pink-section/60 rounded-[2rem]" />
            </div>

            {/* Main Image Card */}
            <div className="relative z-10 bg-white rounded-3xl shadow-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={assets.hero}
                  alt="Dispositivos médicos - Tensiómetro, oxímetro y termómetro"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
