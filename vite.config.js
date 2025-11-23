import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: '/hometv/',
  server: {
    port: 8000,
    open: false,
  },
  build: {
    outDir: 'dist',
  },
});
