/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  // Désactiver les fonctionnalités non utilisées
  corePlugins: {
    // Exemple: désactiver les transitions par défaut pour réduire le CSS
    transition: false,
    // Désactiver les animations par défaut
    animation: false,
  },
  // Réduire la taille du bundle en production
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}; 