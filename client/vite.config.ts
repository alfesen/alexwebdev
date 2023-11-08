import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
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
        `,
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      external: ['react-helmet'],
    },
  },
})
