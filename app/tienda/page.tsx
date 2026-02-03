import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

const allProducts = [
  {
    id: 1,
    image: assets.products.tensiometer,
    category: "MONITOREO",
    name: "Tensiómetro Digital Pro",
    description:
      "Precisión profesional para el control diario de tu presión arterial",
    price: "$45.990",
    badge: "Más vendido",
    badgeColor: "bg-accent",
  },
  {
    id: 2,
    image: assets.products.oximeter,
    category: "MONITOREO",
    name: "Oxímetro de Pulso",
    description: "Monitorea tu oxigenación de forma rápida y precisa",
    price: "$28.990",
    badge: null,
  },
  {
    id: 3,
    image: assets.products.thermometer,
    category: "TEMPERATURA",
    name: "Termómetro Infrarrojo",
    description: "Medición sin contacto, segura y rápida",
    price: "$32.990",
    badge: "Nuevo",
    badgeColor: "bg-text-primary",
  },
  {
    id: 4,
    image: assets.extra.smartwatch,
    category: "MONITOREO",
    name: "Smartwatch Salud",
    description: "Monitoreo continuo de ritmo cardíaco y actividad física",
    price: "$89.990",
    badge: null,
  },
  {
    id: 5,
    image: assets.about.stethoscope,
    category: "DIAGNÓSTICO",
    name: "Estetoscopio Profesional",
    description: "Calidad acústica superior para profesionales de la salud",
    price: "$54.990",
    badge: null,
  },
  {
    id: 6,
    image: assets.extra.oximeter2,
    category: "MONITOREO",
    name: "Oxímetro Clínico",
    description: "Precisión hospitalaria para uso doméstico",
    price: "$38.990",
    badge: null,
  },
];

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-pink-soft">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-soft to-pink-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-serif text-4xl sm:text-5xl text-text-primary mb-4">
            Nuestra Tienda
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Dispositivos médicos certificados, seleccionados con criterio
            profesional para tu tranquilidad.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.id}
                href="#"
                className="group bg-white rounded-3xl overflow-hidden shadow-card card-hover"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-pink-soft overflow-hidden">
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
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors duration-200">
                      Agregar
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
