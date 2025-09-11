// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/april-nail-project/",   // ✅ 必須跟 GitHub repo 名字一樣
});
