import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@types': resolve(__dirname, 'src/types'),
    },
    extensions: ['.mjs', '.ts', '.js', '.jsx', '.tsx', '.json', '.vue'],
  },
  base: '/hometv/',
  server: {
    port: 8000,
    open: false,
    headers: {
      'Service-Worker-Allowed': '/',
    },
  },
  build: {
    outDir: 'dist',
    // Копируем sw.js и manifest.json в dist
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        // Гарантируем что sw.js будет в корне dist
        entryFileNames: (assetInfo) => {
          return assetInfo.name === 'sw'
            ? '[name].js'
            : 'assets/[name]-[hash].js';
        },
      },
    },
  },
  publicDir: 'public',
});
