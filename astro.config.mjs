// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react()],
  adapter: netlify(),
  server: {
    port: 4323,
  },
  vite: {
    define: {
      __DEFINES__: JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },
});