import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // 👈 para Netlify
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
