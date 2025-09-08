
import './assets/style.css'


import { createApp } from 'vue';
import App from './App.vue';
import { createHead } from '@vueuse/head'
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'




const app = createApp(App);
const head = createHead()

app.use(router);
app.use(head)
app.use(store);
app.use(ToastService);
app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark',
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities'
        }
      }
    }
  })
app.mount('#app');
