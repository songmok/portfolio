import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  base: "https://songmok.github.io/portfolio/",
  plugins: [react(), tsconfigPaths()],
  //build 시에 모든 console.log를 제거
  build: {
    minify: "terser",
    outDir: "dist",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
