import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/april-nail-project/',   // ⚠️ 這一行要加，名稱跟你的 repo 名字一樣
})
