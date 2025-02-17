import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-weather-app/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: process.env.PORT || 4173,
    strictPort: true,
    host: "0.0.0.0",
  },
  preview: {
    port: process.env.PORT || 4173,
    host: "0.0.0.0",
  }
})
