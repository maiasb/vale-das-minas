import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // APENAS BARRA QUANDO FOR DOMÍNIO PERSONALIZADO
  base: "/"
  // base: "/vale-das-minas"
})
