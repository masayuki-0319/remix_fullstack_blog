import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import baseViteConfig from './vite.config';

export default mergeConfig(
  baseViteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'vprisma',
      setupFiles: ['vitest-environment-vprisma/setup', 'vitest.setup.ts'],
      environmentOptions: {
        vprisma: {
          databaseUrl: process.env.DATABASE_URL,
        },
      },
    },
  })
);
