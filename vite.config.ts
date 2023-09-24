import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  plugins: [react()],

  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      define: {
        global: "globalThis",
      },
      supported: {
        bigint: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return
      }
      warn(warning)
    }}
  },
});
