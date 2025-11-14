import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      rollupTypes: true,
      outDir: 'dist',
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
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
          if (assetInfo.names && assetInfo.names.length && assetInfo.names[0].endsWith(".css")) {
            return "style.css";
          }
          return assetInfo.names?.[0] || "assets/[name][extname]";
        },
      },
    },
  },
});