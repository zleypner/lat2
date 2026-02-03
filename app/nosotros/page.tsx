import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Users, Award } from "lucide-react";
import { assets } from "@/lib/assets";

const values = [
  {
    icon: ShieldCheck,
    title: "Confianza",
    description:
      "Seleccionamos solo dispositivos con certificaciones internacionales.",
  },
  {
    icon: Heart,
    title: "Cuidado",
    description:
      "Creemos que la prevención es la mejor medicina para una vida plena.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Construimos relaciones duraderas basadas en el bienestar compartido.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Nos comprometemos con los más altos estándares de calidad.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-soft to-pink-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight">
                Cuidamos lo que más importa:{" "}
                <span className="text-accent">tu bienestar</span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                En Latidos nacimos con una misión clara: acercar tecnología
                médica confiable a cada hogar argentino. Creemos que el acceso a
                dispositivos de calidad no debería ser un privilegio, sino un
                derecho para cuidar la salud de quienes más amamos.
              </p>
              <Link href="/tienda" className="btn-primary inline-flex">
                Conocer nuestros productos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-pink-section rounded-[2.5rem] transform rotate-3" />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-card">
                <Image
                  src={assets.about.stethoscope}
                  alt="Estetoscopio profesional"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl text-text-primary mb-6">
              Nuestra Historia
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Latidos comenzó en 2020, cuando un grupo de profesionales de la
              salud y emprendedores se unieron con un objetivo común: democratizar
              el acceso a dispositivos médicos de calidad en Argentina.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Hoy, somos el puente entre la tecnología médica de vanguardia y
              las familias argentinas que buscan cuidar su salud con
              herramientas confiables. Cada producto que ofrecemos pasa por un
              riguroso proceso de selección, porque entendemos que cuando se
              trata de salud, no hay lugar para compromisos.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-24 bg-pink-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="heading-serif text-3xl sm:text-4xl text-text-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-card card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-pink-section flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-card">
                <Image
                  src={assets.about.medical}
                  alt="Equipamiento médico"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-serif text-3xl sm:text-4xl text-text-primary mb-6">
                ¿Por qué confiar en Latidos?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Certificaciones internacionales
                    </span>
                    <p className="text-text-muted text-sm mt-1">
                      Todos nuestros productos cuentan con certificación CE y FDA.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Asesoramiento experto
                    </span>
                    <p className="text-text-muted text-sm mt-1">
                      Contamos con profesionales de la salud para guiarte.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Garantía extendida
                    </span>
                    <p className="text-text-muted text-sm mt-1">
                      12 meses de garantía en todos nuestros dispositivos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      Envío a todo el país
                    </span>
                    <p className="text-text-muted text-sm mt-1">
                      Llegamos a cada rincón de Argentina con envío seguro.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-pink-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark rounded-4xl lg:rounded-5xl px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl text-white mb-5">
              ¿Listo para cuidar tu salud?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explorá nuestra selección de dispositivos médicos y encontrá el
              que mejor se adapte a tus necesidades.
            </p>
            <Link href="/tienda" className="btn-primary inline-flex">
              Ver productos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
