// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://jipizarroo.github.io',
  base: '/notaria-demo',
  integrations: [react()],
});
