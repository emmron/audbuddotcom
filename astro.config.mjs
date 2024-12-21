// @ts-check
import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';
import auth from '@auth/astro'

// https://astro.build/config
const config: AstroUserConfig = {
  integrations: [auth()],
};

export default defineConfig(config);
