import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";

// Đọc nội dung LICENSE (tuỳ chọn)
const licenseText = fs.readFileSync('./LICENSE', 'utf-8').split('\n').slice(0, 5).join('\n'); // lấy vài dòng đầu

const banner = `/*!
 * @cubone/react-file-manager (modified)
 * Originally by Saifullah Zubair
 * Licensed under the MIT License
 *
${licenseText}
 */
`;

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
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        banner,
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
