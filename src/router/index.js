import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/pessoa/dashboard/DashboardPage.vue'
import Login from '../pages/pessoa/Auth/Login.vue'
import Register from '../pages/pessoa/Auth/Register.vue' // Importe a página de registro

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
  },
  {
    path: '/register', // Adicione a rota de registro
    name: 'register',
    component: Register // Use o componente de registro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
