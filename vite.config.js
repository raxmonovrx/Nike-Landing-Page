import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/nike-shoes/', // GitHub Pages repozitoriyasi nomiga mos keladi
})
