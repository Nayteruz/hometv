import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Фильмы и сериалы',
        short_name: 'Фильмы и сериалы',
        description: 'Фильмы и сериалы',
        theme_color: '#163060',
        background_color: '#101421',
        display: 'standalone',
        scope: '/hometv/', // КРИТИЧЕСКО ВАЖНО!
        start_url: '/hometv/', // КРИТИЧЕСКО ВАЖНО!
        icons: [
          {
            src: '/hometv/img/icons/android-chrome-192x192.png', // Путь с base
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/hometv/img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/hometv/img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        navigateFallback: '/hometv/index.html', // Важно для SPA
      },
      devOptions: {
        enabled: true, // Включает PWA в режиме разработки для тестирования
      },
    }),
  ],
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
  },
  build: {
    outDir: 'dist',
  },
});
