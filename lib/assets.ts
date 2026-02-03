/**
 * Centralized asset paths for easy management
 * All images are loaded from the /public/assets directory
 *
 * Note: Assets have been moved to public/assets for Next.js static serving
 *
 * Image mapping based on available Unsplash photos:
 * - Hero: Blood pressure monitor in use (mockup-graphics-i1iqQRLULlg)
 * - Tensiometer: Blood pressure with stethoscope (immo-wegmann)
 * - Oximeter: Pulse oximeter on finger (mockup-graphics--msTEzGwKJs)
 * - Thermometer: Using stethoscope as placeholder (anita-shirmohamadi)
 */

export const assets = {
  // Hero section - main medical devices image
  hero: "/assets/mockup-graphics-i1iqQRLULlg-unsplash.jpg",

  // Product images
  products: {
    tensiometer: "/assets/immo-wegmann-f0h8EIdTXWo-unsplash.jpg",
    oximeter: "/assets/mockup-graphics--msTEzGwKJs-unsplash.jpg",
    thermometer: "/assets/anita-shirmohamadi-vnImzZA4AHk-unsplash.jpg",
  },

  // About page
  about: {
    stethoscope: "/assets/etactics-inc-g3PsF4_y7ZY-unsplash.jpg",
    medical: "/assets/etactics-inc-2qiXVelOgyw-unsplash.jpg",
  },

  // Additional medical images for variety
  extra: {
    smartwatch: "/assets/luke-chesser-rCOWMC8qf8A-unsplash.jpg",
    oximeter2: "/assets/mufid-majnun-HujoqK2H88o-unsplash.jpg",
    pills: "/assets/etactics-inc-p2mzbAfUC3E-unsplash.jpg",
  },
} as const;

export type AssetKey = keyof typeof assets;
