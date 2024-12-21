import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true,
    functionName: 'astro_ssr_adapter' // Changed to use only alphanumeric characters and underscores
  }),
  integrations: []
});
