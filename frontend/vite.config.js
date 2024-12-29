import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import packageJson from "./package.json";

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
      external: [
        ...Object.keys(packageJson.dependencies).map(
          (mod) => new RegExp(`^${mod}`)
        ),
        ...Object.keys(packageJson.peerDependencies).map(
          (mod) => new RegExp(`^${mod}`)
        ),
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
