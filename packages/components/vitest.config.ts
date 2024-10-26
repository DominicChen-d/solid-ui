/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid() as any],
  test: {
    environment: 'jsdom',
    globals: true,
    testTransformMode: {
      web: ['.[jt]sx?'],
    },
    deps: {
      inline: [/solid-js/],
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
