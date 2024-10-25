// vite.config.ts
import { defineConfig } from "file:///Users/chendongmin/Documents/dev/solidjs-element/node_modules/.pnpm/vite@4.5.5_@types+node@22.8.0/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///Users/chendongmin/Documents/dev/solidjs-element/node_modules/.pnpm/vite-plugin-solid@2.10.2_@testing-library+jest-dom@5.17.0_solid-js@1.9.3_vite@4.5.5_@types+node@22.8.0_/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import dts from "file:///Users/chendongmin/Documents/dev/solidjs-element/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@22.8.0_rollup@3.29.5_vite@4.5.5_@types+node@22.8.0_/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ["src"]
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index"
    },
    rollupOptions: {
      external: ["solid-js", "@solid-ui/theme"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbmRvbmdtaW4vRG9jdW1lbnRzL2Rldi9zb2xpZGpzLWVsZW1lbnQvcGFja2FnZXMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVuZG9uZ21pbi9Eb2N1bWVudHMvZGV2L3NvbGlkanMtZWxlbWVudC9wYWNrYWdlcy91dGlscy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbmRvbmdtaW4vRG9jdW1lbnRzL2Rldi9zb2xpZGpzLWVsZW1lbnQvcGFja2FnZXMvdXRpbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHNvbGlkUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zb2xpZFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBzb2xpZFBsdWdpbigpLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbXCJzcmNcIl0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogXCJzcmMvaW5kZXgudHNcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJzb2xpZC1qc1wiLCBcIkBzb2xpZC11aS90aGVtZVwiXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStXLFNBQVMsb0JBQW9CO0FBQzVZLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsS0FBSztBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxZQUFZLGlCQUFpQjtBQUFBLElBQzFDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
