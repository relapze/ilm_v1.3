import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    global: (() => {
      if (command !== "build") return "globalThis";
      let globalVariable = "globalThis";
      try {
        // Try to import @safe-global/safe-apps-provider
        require.resolve("@safe-global/safe-apps-provider");
        // Try to import @safe-global/safe-apps-sdk
        require.resolve("@safe-global/safe-apps-sdk");
        // If both modules are found, return custom global variable
        globalVariable = "global";
      } catch (e) {
        // If either module is not found, fallback to globalThis
        globalVariable = "globalThis";
      }
      return globalVariable;
    })(),
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
    target: ["esnext"],
    chunkSizeWarningLimit: 100000,
  },
}));