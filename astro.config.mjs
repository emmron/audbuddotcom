import { defineConfig } from 'astro';
import auth from 'auth-astro';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [auth()]
});
