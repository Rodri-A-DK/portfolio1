import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/portfolio1/', // Cambia al nombre exacto de tu repositorio
  integrations: [tailwind()],
  vite: {
    build: {
      outDir: 'build', // Carpeta de salida para la build
    },
  },
});
