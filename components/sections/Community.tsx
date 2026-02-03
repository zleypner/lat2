import { Instagram, Users, Heart, MessageSquare } from "lucide-react";

const stats = [
  { icon: Users, value: "12K+", label: "Seguidores" },
  { icon: Heart, value: "2K+", label: "Clientes felices" },
  { icon: MessageSquare, value: "500+", label: "Reseñas" },
];

export default function Community() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-text-primary mb-6 leading-tight">
              Cada día más personas confían en Latidos
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Nuestra comunidad crece porque creemos en la prevención, el
              cuidado y la información clara. Compartimos contenido educativo,
              consejos de salud y experiencias reales de nuestra comunidad.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[120px] bg-white border border-gray-100 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" strokeWidth={1.5} />
                  <div className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Instagram Button */}
            <a
              href="https://instagram.com/latidos.salud"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Instagram className="w-5 h-5" />
              Seguinos en Instagram
            </a>
          </div>

          {/* Right - Instagram Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="aspect-square bg-pink-section rounded-2xl flex items-center justify-center hover:bg-pink-border transition-colors duration-300"
                >
                  <Instagram
                    className="w-8 h-8 text-accent/40"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>

            {/* Floating Handle Badge */}
            <div className="absolute -bottom-3 -right-3 lg:bottom-4 lg:right-4 bg-accent text-white px-4 py-2.5 rounded-xl shadow-lg">
              <span className="font-medium">@latidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
