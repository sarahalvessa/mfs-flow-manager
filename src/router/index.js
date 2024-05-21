import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '/src/pages/pessoa/dashboard/DashboardPage.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
