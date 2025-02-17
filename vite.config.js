import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-weather-app/",
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173, // Uses Railway's PORT
    strictPort: true,
    host: "0.0.0.0", // Ensures the server is accessible
  },
})
