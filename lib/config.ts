/**
 * Configuración de la aplicación
 */

// SINPE Móvil - Puede ser sobreescrito por variable de entorno
export const SINPE_NUMBER =
  process.env.NEXT_PUBLIC_SINPE_NUMBER || "8888-8888";

export const SINPE_RECIPIENT =
  process.env.NEXT_PUBLIC_SINPE_RECIPIENT || "Latidos CR";

export const STORE_NAME = "Latidos";
export const STORE_DESCRIPTION = "Tecnología Médica Confiable";
