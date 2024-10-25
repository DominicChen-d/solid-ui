import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ['src'],
      exclude: ['**/__tests__/**'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['solid-js'],
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['../../tests/setup.ts'],
  },
});
