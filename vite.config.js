import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/Coffee/",  // Add this line
  plugins: [react()],
  server: {
    hmr: false  // Disables hot reload to prevent constant reloading
  }
})
