import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/pessoa/dashboard/DashboardPage.vue'
import Login from '../pages/pessoa/Auth/Login.vue'

function isAuthenticated() {
  return !!localStorage.getItem('authToken')
}

const routes = [
  {
    path: '/dashboard/:usuarioId',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
