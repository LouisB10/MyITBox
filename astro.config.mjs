// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Optimisation du build
  build: {
    inlineStylesheets: 'auto', // Inline CSS pour les petits fichiers
  },
  // Compression du HTML en production
  compressHTML: true,
  // Mode de sortie statique pour performance maximale
  output: 'static',
  // Intégration de TailwindCSS
  integrations: [
    tailwind({
      // Configuration pour minimiser le CSS
      applyBaseStyles: false,
    }),
  ],
});
