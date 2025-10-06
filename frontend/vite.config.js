import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  publicDir: false,
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.js",
      // For a pure ES lib build, you don't need a UMD name:
      fileName: () => "react-file-manager.es.js",
      formats: ["es"],
    },
    rollupOptions: {
      // 👇 add this
      external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
      output: {
        // Keep it strictly ES
        format: "es",
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0]?.endsWith(".css")) return "style.css";
          return assetInfo.names;
        },
      },
    },
  },
});
