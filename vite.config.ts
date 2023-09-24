import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: (() => {
      let globalVariable = 'globalThis';
      try {
        // Try to import @safe-global/safe-apps-provider
        require.resolve('@safe-global/safe-apps-provider');
        // Try to import @safe-global/safe-apps-sdk
        require.resolve('@safe-global/safe-apps-sdk');
        // If both modules are found, return the custom global variable
        globalVariable = 'global';
       } catch (e) {
        // If either module is not found, fallback to globalThis
        globalVariable = 'globalThis';
       }
      return globalVariable;
     })()
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
      target: "es2020",
      define: {
        global: "globalThis",
      },
      supported: {
        bigint: true,
      },
    },
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return
      }
      warn(warning)
    }}
  },
});
