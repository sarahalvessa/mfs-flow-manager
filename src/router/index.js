import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/dashboard/DashboardPage.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'

function isAuthenticated() {
  return !!localStorage.getItem('authToken')
}

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        return next({ name: 'login' })
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
