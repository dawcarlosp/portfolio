import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dawcarlosp.github.io',
  base: '/portfolio',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
