import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VIntersection from '@/directives/VIntersection';
import VTitle from '@/directives/VTitle';
import App from '@/App.vue';
import router from '@/router';
import mitt from 'mitt';
import '@/registerServiceWorker';
import '@/plugins/index';
import type { EventsEmitter } from './types';

interface GlobalEvents extends Record<EventsEmitter, any> {}

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Регистрируем SW с правильным scope
    navigator.serviceWorker
      .register('/hometv/sw.js', {
        scope: '/hometv/',
      })
      .then((registration) => {
        console.log('✅ Service Worker зарегистрирован:', registration);

        // Проверяем обновления
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('Обновление Service Worker обнаружено:', newWorker);
        });
      })
      .catch((error) => {
        console.error('❌ Ошибка регистрации Service Worker:', error);
      });
  });

  // Периодическая проверка обновлений
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('Service Worker обновлен, перезагрузите страницу');
  });
}

const emitter = mitt<GlobalEvents>();
const app = createApp(App);
app.directive('intersection', VIntersection);
app.directive('title', VTitle);
app.use(createPinia());
app.use(router);

app.provide('emitter', emitter);
app.mount('#app');
