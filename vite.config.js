/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "react-vendor";
          }
          if (id.includes("@radix-ui/")) {
            return "react-vendor";
          }
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform/resolvers") ||
            id.includes("zod")
          ) {
            return "form-vendor";
          }

          if (id.includes("axios") || id.includes("lz-string")) {
            return "utils-vendor";
          }
          if (id.includes("lucide-react") || id.includes("framer-motion")) {
            return "react-vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        loops: true,
        unused: true,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
    },
    sourcemap: process.env.NODE_ENV === "development",
    target: "es2020",
    cssCodeSplit: true,
  },

  server: {
    hmr: {
      overlay: false,
    },
    compress: true,
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "axios",
      "react-hook-form",
      "@radix-ui/react-dialog",
      "@radix-ui/react-select",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },
  define: {
    __DEV__: process.env.NODE_ENV === "development",
  },
});
