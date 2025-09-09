// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/april-nail-project/", // ⚠️ 這裡要改成你的 GitHub repo 名字
  server: {
    port: 5173,        // 本地開發預設 port
    open: true,        // 自動開瀏覽器
  },
  build: {
    outDir: "dist",    // build 後輸出的資料夾
    sourcemap: false,  // 若要偵錯可以改 true
  },
});
