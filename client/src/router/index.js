import { createRouter, createWebHistory } from 'vue-router'
import ProductSection from '../views/ProductSection.vue'
import RevenueSection from '../views/RevenueSection.vue'
import LoginSection from '../views/LoginSection.vue'
import RegisterSection from '../views/RegisterSection.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'revenue',
      component: RevenueSection
    },
    {
      path: '/products',
      name: 'products',
      component: ProductSection
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
