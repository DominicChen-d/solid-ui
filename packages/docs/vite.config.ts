import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      "@solid-ui/components": resolve(__dirname, "../components/src"),
      "@solid-ui/theme": resolve(__dirname, "../theme/src"),
      "@solid-ui/utils": resolve(__dirname, "../utils/src"),
    },
  },
});
