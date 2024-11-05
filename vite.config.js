import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  css: {
    sourcemap: false, // Tắt source map
  },
  server: {
    port: process.env.PORT,
  },
  plugins: [react(), vercel()],
})