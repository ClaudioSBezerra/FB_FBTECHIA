import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    // A Hostinger serve a partir de public_html; assets com hash permitem
    // cache longo sem risco de servir versão velha depois de um deploy.
    assetsDir: 'assets',
    sourcemap: false,
  },
})
