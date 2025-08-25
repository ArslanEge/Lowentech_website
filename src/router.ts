import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import VehicleDiagnostic from './views/ServicesPage/VehicleDiagnostic.vue'
import AppDevelopment from './views/ServicesPage/AppDevelopment.vue'
import EmbeddedSystem from './views/ServicesPage/EmbeddedSystem.vue'
import ContactView from './views/ContactView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home | Löwentech' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About | Löwentech' },
  },
  {
    path: '/vehicle-diagnostic',
    name: 'vehicle-diagnostic',
    component: VehicleDiagnostic,
    meta: { title: 'Services | Löwentech' },
  },
  {
    path: '/app-development',
    name: 'app-development',
    component: AppDevelopment,
    meta: { title: 'Services | Löwentech' },
  },
  {
    path: '/embedded-system',
    name: 'embedded-system',
    component: EmbeddedSystem,
    meta: { title: 'Services | Löwentech' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact | Löwentech' },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
