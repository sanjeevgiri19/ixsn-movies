import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          redux: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000",
      "Access-Control-Allow-Origin": "*",
    },
  },
});
