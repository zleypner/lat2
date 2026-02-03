import { ShieldCheck, Stethoscope, UserRoundCheck, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Dispositivos certificados",
    description:
      "Todos nuestros productos cuentan con certificaciones internacionales de calidad y seguridad.",
  },
  {
    icon: Stethoscope,
    title: "Uso clínico y doméstico",
    description:
      "Seleccionados para profesionales de la salud y para el cuidado familiar en casa.",
  },
  {
    icon: UserRoundCheck,
    title: "Fácil uso y soporte claro",
    description:
      "Diseñados para que cualquier persona pueda usarlos con confianza y seguridad.",
  },
  {
    icon: BadgeCheck,
    title: "Calidad comprobada",
    description:
      "Elegimos solo marcas reconocidas con años de experiencia en el sector médico.",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-text-primary mb-4">
            Elegidos con criterio médico,
            <br />
            pensados para vos
          </h2>
          <p className="text-text-muted text-lg">
            Cada producto pasa por un riguroso proceso de selección para
            garantizar tu tranquilidad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-pink-soft rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:shadow-card"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-pink-section flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
