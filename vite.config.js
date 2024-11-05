import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  css: {
    sourcemap: false, // Tắt source map
  },
  plugins: [react()],
})
