import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.js",
      name: "ReactFileManager",
      fileName: (format) => `react-file-manager.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.length && assetInfo.names[0].endsWith(".css")) {
            return "style.css";
          }
          return assetInfo.names;
        },
      },
    },
  },
});
