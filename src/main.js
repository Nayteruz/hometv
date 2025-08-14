import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VIntersection from '@/directives/VIntersection';
import VTitle from '@/directives/VTitle';
import App from '@/App.vue';
import router from '@/router';
import mitt from 'mitt';
import '@/registerServiceWorker';
import '@/plugins/index';

const emitter = mitt();
const app = createApp(App);
app.directive('intersection', VIntersection);
app.directive('title', VTitle);
app.use(createPinia());
app.use(router);

app.provide('emitter', emitter);
app.mount('#app');
