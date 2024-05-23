import { createRouter, createWebHistory } from 'vue-router'
import ContentTemplate from '@/components/ContentTemplate.vue'
import TransactionsTemplate from '@/components/TransactionsTemplate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContentTemplate
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsTemplate
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),routes
  })

export default router