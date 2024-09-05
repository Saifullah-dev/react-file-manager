import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.js",
      name: "ReactFileManager",
      fileName: (format) => `react-file-manager.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if(assetInfo.name.endsWith('.png')) {
            return '';
          }else {
            return 'assets/[name]-[hash][extname]';
          }
        },
      },
    },
  },
});
