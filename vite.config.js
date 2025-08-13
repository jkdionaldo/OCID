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
  },
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          "react-vendor": ["react", "react-dom"],
          "ui-vendor": ["@radix-ui/react-dialog", "lucide-react"],
          "form-vendor": ["react-hook-form", "@hookform/resolvers", "zod"],
          "utils-vendor": ["axios", "react-toastify", "lz-string"],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        // Remove console logs in production
        drop_console: true,
        drop_debugger: true,
        // Remove unused code
        dead_code: true,
        // Optimize loops
        loops: true,
        // Remove unused function arguments
        unused: true,
      },
      mangle: {
        // Mangle property names for smaller bundle
        properties: {
          regex: /^_/,
        },
      },
    },
    // Enable source maps for debugging (disable in production)
    sourcemap: process.env.NODE_ENV === "development",
    // Target modern browsers
    target: "es2020",
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false,
    },
    // Enable compression in dev
    compress: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "axios", "react-hook-form"],
    exclude: ["@vite/client", "@vite/env"],
  },
  // Define environment variables
  define: {
    __DEV__: process.env.NODE_ENV === "development",
  },
});
