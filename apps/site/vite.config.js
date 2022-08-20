import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["@marvelsq/i18n-core"],
  },
  esbuild: {
    jsx: "automatic",
  },
  build: {
    commonjsOptions: {
      include: [/i18n\/packages/, /node_modules/],
    },
  },
});
