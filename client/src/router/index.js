import { createRouter, createWebHistory } from 'vue-router'
import DashboardSection from '../views/DashboardSection.vue'
import LoginSection from '../views/LoginSection.vue'
import RegisterSection from '../views/RegisterSection.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardSection
    },
    {
      path: '/login',
      name: 'login',
      component: LoginSection
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterSection
    }
  ]
})

export default router
