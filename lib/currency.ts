/**
 * Utilidades para formateo de precios en Colones Costarricenses (CRC)
 */

const crcFormatter = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Formatea un número como precio en Colones Costarricenses
 * @param amount - Monto numérico a formatear
 * @returns String formateado con símbolo ₡ (ej: "₡25 000")
 */
export function formatCRC(amount: number): string {
  return crcFormatter.format(amount);
}

/**
 * Parsea un string de precio a número
 * Maneja formatos como "$45.990", "₡25000", "25000"
 */
export function parsePriceToNumber(price: string | number): number {
  if (typeof price === "number") return price;
  // Remove currency symbols and separators
  const cleaned = price.replace(/[₡$,.\s]/g, "");
  return parseInt(cleaned, 10) || 0;
}
