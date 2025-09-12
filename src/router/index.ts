import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const GenericPage = () => import('../views/GenericPage.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: GenericPage },
  { path: '/pricing', name: 'pricing', component: GenericPage },
  { path: '/works', name: 'works', component: GenericPage },
  // Product
  { path: '/product/product', name: 'product-website', component: GenericPage },
  { path: '/product/marketing', name: 'product-marketing', component: GenericPage },
  { path: '/product/delivery', name: 'product-delivery', component: GenericPage },
  { path: '/product/branded', name: 'product-branded', component: GenericPage },
  { path: '/product/ordering', name: 'product-ordering', component: GenericPage },
  { path: '/product/loyalty', name: 'product-loyalty', component: GenericPage },
  // Company
  { path: '/company/story', name: 'company-story', component: GenericPage },
  { path: '/company/careers', name: 'company-careers', component: GenericPage },
  { path: '/company/press', name: 'company-press', component: GenericPage },
  { path: '/company/reviews', name: 'company-reviews', component: GenericPage },
  { path: '/company/releases', name: 'company-releases', component: GenericPage },
  // Resources
  { path: '/resources/blog', name: 'resources-blog', component: GenericPage },
  { path: '/resources/case', name: 'resources-case', component: GenericPage },
  { path: '/resources/owner', name: 'resources-owner', component: GenericPage },
  // Legal / misc
  { path: '/privacy-policy', name: 'privacy', component: GenericPage },
  { path: '/license', name: 'license', component: GenericPage },
  { path: '/dashboard', name: 'dashboard', component: GenericPage },
  { path: '/premium-membership', name: 'premium-membership', component: GenericPage },
  // Fallback
  { path: '/:pathMatch(.*)*', name: 'not-found', component: GenericPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
