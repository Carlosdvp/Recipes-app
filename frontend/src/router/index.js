import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore, useAlertStore } from '@/stores'
import Home from '@/views/Home.vue'
import authRoutes from './auth.routes'

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    { ...authRoutes },
    // catch all non-existent paths and redirect to home apge
    {
      path: '/:pathMatch(.*)*', redirect: '/'
    }
  ]
});

router.beforeEach(async (to) => {
  const alertStore = useAlertStore();
  alertStore.clear();

  // route guard - redirect to Home page if not logged in
  const publicPages = ['/auth/login'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.useer) {
    authStore.returnurl = to.fullPath;

    return '/auth/login';
  }
})
