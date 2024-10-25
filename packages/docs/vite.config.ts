import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      "@solid-ui/components": resolve(__dirname, "../components"),
      "@solid-ui/theme": resolve(__dirname, "../theme"),
      "@solid-ui/utils": resolve(__dirname, "../utils"),
      "@solid-ui/docs-utils": resolve(__dirname, "../docs-utils"),
    },
  },
  optimizeDeps: {
    include: ["@solidjs/router"],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
