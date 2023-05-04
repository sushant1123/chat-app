import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "build",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [reactRefresh()],
});
