import Login from '@/views/Login.vue'
import AuthLayout from '@/views/AuthLayout.vue'

export default {
  path: '/auth',
  component: AuthLayout,
  children: [
    { path: '', redirect: 'login' },
    { path: 'login', component: Login },
    // { path: 'register', component: Register }
  ]
}
