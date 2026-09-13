import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  },
  server: {
    fs: {
      allow: ['.']
    }
  }
})
