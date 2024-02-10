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
      name: 'products',
      component: ProductSection
    },
    {
      path: '/revenue',
      name: 'revenue',
      component: RevenueSection
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
router.beforeEach(async (to, from, next) => {
  const hasLogin = localStorage.getItem('access_token')
  if (!hasLogin && to.path === '/') {
    next('/login')
  } else if (!hasLogin && to.path === '/revenue') {
    next('/login')
  } else if ((hasLogin && to.path === '/login') || (hasLogin && to.path === '/register')) {
    next('/')
  } else {
    // User is authenticated or on the login/register page
    next()
  }
})
export default router
