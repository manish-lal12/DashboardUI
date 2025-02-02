import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env, // Ensure Vite can access environment variables
  },
  build: {
    rollupOptions: {
      external: ["./src/stories/"],
    },
  },
});
