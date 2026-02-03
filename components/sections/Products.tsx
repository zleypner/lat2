import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/lib/assets";

const products = [
  {
    id: 1,
    image: assets.products.tensiometer,
    category: "MONITOREO",
    name: "Tensiómetro Digital Pro",
    description:
      "Precisión profesional para el control diario de tu presión arterial",
    badge: "Más vendido",
    badgeColor: "bg-accent",
    stock: "Quedan 12 unidades",
    highlight: false,
  },
  {
    id: 2,
    image: assets.products.oximeter,
    category: "MONITOREO",
    name: "Oxímetro de Pulso",
    description: "Monitorea tu oxigenación de forma rápida y precisa",
    badge: null,
    stock: null,
    highlight: true,
  },
  {
    id: 3,
    image: assets.products.thermometer,
    category: "TEMPERATURA",
    name: "Termómetro Infrarrojo",
    description: "Medición sin contacto, segura y rápida",
    badge: "Nuevo",
    badgeColor: "bg-text-primary",
    stock: null,
    highlight: false,
  },
];

export default function Products() {
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
          {products.map((product) => (
            <Link
              key={product.id}
              href="/tienda"
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

                {/* Stock Badge */}
                {product.stock && (
                  <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-white text-text-primary text-sm font-medium rounded-full shadow-sm">
                    {product.stock}
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
                <h3
                  className={`text-xl font-serif mt-1 mb-2 ${
                    product.highlight ? "text-accent" : "text-text-primary"
                  }`}
                >
                  {product.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
