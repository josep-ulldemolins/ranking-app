// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://ranking.socplanner.com',
  
  security: {
    checkOrigin: true
  },

  vite: {
    plugins: [tailwindcss()]
  }
});