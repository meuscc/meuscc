import { resolve } from "path";
import { defineConfig } from "vite";
import viteMarkdownPlugin from "./tools/vite-plugin-md";

export default defineConfig({
  plugins: [viteMarkdownPlugin()],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      { find: /^src/, replacement: resolve(__dirname, "src") },
    ],
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
});
