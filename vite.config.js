import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "pages", replacement: "/src/pages" },
      { find: "containers", replacement: "/src/containers" },
      { find: "routes", replacement: "/src/routes" },
    ],
  },
});
