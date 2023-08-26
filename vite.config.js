import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/App_Rick_and_Morty/",
  plugins: [react()],
})
