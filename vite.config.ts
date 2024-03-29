import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Env from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Env('all')],
  base: './',
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use './src/scss/mixins' as m;

          @import './src/scss/vars';
          @import './src/scss/vars';
          @import './src/scss/utils';
          @import './src/scss/keyframes';
        `
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5174
  },
})
