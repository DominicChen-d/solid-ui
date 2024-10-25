// vite.config.ts
import { defineConfig } from "file:///Users/chendongmin/Documents/dev/solidjs-element/node_modules/.pnpm/vite@4.5.5_@types+node@22.8.0/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///Users/chendongmin/Documents/dev/solidjs-element/node_modules/.pnpm/vite-plugin-solid@2.10.2_@testing-library+jest-dom@5.17.0_solid-js@1.9.3_vite@4.5.5_@types+node@22.8.0_/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import dts from "file:///Users/chendongmin/Documents/dev/solidjs-element/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@22.8.0_rollup@3.29.5_vite@4.5.5_@types+node@22.8.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ["src"],
      exclude: ["**/__tests__/**"]
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index"
    },
    rollupOptions: {
      external: ["solid-js"]
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["../../tests/setup.ts"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbmRvbmdtaW4vRG9jdW1lbnRzL2Rldi9zb2xpZGpzLWVsZW1lbnQvcGFja2FnZXMvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2NoZW5kb25nbWluL0RvY3VtZW50cy9kZXYvc29saWRqcy1lbGVtZW50L3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2NoZW5kb25nbWluL0RvY3VtZW50cy9kZXYvc29saWRqcy1lbGVtZW50L3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBzb2xpZFBsdWdpbigpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ3NyYyddLFxuICAgICAgZXhjbHVkZTogWycqKi9fX3Rlc3RzX18vKionXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsnc29saWQtanMnXSxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBzZXR1cEZpbGVzOiBbJy4uLy4uL3Rlc3RzL3NldHVwLnRzJ10sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFgsU0FBUyxvQkFBb0I7QUFDM1osT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixTQUFTLENBQUMsaUJBQWlCO0FBQUEsSUFDN0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFVBQVU7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFlBQVksQ0FBQyxzQkFBc0I7QUFBQSxFQUNyQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
