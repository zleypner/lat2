import { assets } from "./assets";
import { Product } from "./types";

/**
 * Catálogo de productos con precios en CRC (Colones Costarricenses)
 */
export const allProducts: Product[] = [
  {
    id: 1,
    image: assets.products.tensiometer,
    category: "MONITOREO",
    name: "Tensiómetro Digital Pro",
    description:
      "Precisión profesional para el control diario de tu presión arterial",
    price: 28500,
    badge: "Más vendido",
    badgeColor: "bg-accent",
  },
  {
    id: 2,
    image: assets.products.oximeter,
    category: "MONITOREO",
    name: "Oxímetro de Pulso",
    description: "Monitorea tu oxigenación de forma rápida y precisa",
    price: 18500,
    badge: null,
  },
  {
    id: 3,
    image: assets.products.thermometer,
    category: "TEMPERATURA",
    name: "Termómetro Infrarrojo",
    description: "Medición sin contacto, segura y rápida",
    price: 21000,
    badge: "Nuevo",
    badgeColor: "bg-text-primary",
  },
  {
    id: 4,
    image: assets.extra.smartwatch,
    category: "MONITOREO",
    name: "Smartwatch Salud",
    description: "Monitoreo continuo de ritmo cardíaco y actividad física",
    price: 56500,
    badge: null,
  },
  {
    id: 5,
    image: assets.about.stethoscope,
    category: "DIAGNÓSTICO",
    name: "Estetoscopio Profesional",
    description: "Calidad acústica superior para profesionales de la salud",
    price: 35000,
    badge: null,
  },
  {
    id: 6,
    image: assets.extra.oximeter2,
    category: "MONITOREO",
    name: "Oxímetro Clínico",
    description: "Precisión hospitalaria para uso doméstico",
    price: 24500,
    badge: null,
  },
];

/**
 * Productos destacados para la página principal (primeros 3)
 */
export const featuredProducts = allProducts.slice(0, 3);
