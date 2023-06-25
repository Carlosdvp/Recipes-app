import { createRouter, createWebHashHistory } from 'vue-router'
// import { useAuthStore } from '@/stores'
import Home from '@/views/Home.vue'
// import usersRoutes from './users.routes'

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },

  ]
})
