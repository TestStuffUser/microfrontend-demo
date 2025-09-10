import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    target: "esnext",
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm"
      }
    }
  }
});
