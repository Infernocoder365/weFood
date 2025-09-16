import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const GenericPage = () => import('../views/GenericPage.vue')
const ProductWebsite = () => import('../views/Product/ProductWebsite.vue')
const ProductMarketing = () => import('../views/Product/ProductMarketing.vue')
const ProductDelivery = () => import('../views/Product/ProductDelivery.vue')
const ProductBranded = () => import('../views/Product/ProductBranded.vue')
const ProductOrdering = () => import('../views/Product/ProductOrdering.vue')
const ProductLoyalty = () => import('../views/Product/ProductLoyalty.vue')
const PricingView = () => import('../views/PricingView.vue')
const WorksView = () => import('../views/WorksView.vue')
// Company Views
const CompanyStoryView = () => import('../views/Company/CompanyStoryView.vue')
const CompanyCareersView = () => import('../views/Company/CompanyCareersView.vue')
const CompanyPressView = () => import('../views/Company/CompanyPressView.vue')
const CompanyReviewsView = () => import('../views/Company/CompanyReviewsView.vue')
const CompanyReleasesView = () => import('../views/Company/CompanyReleasesView.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: GenericPage },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/works', name: 'works', component: WorksView },
  // Product
  { path: '/product/product', name: 'product-website', component: ProductWebsite },
  { path: '/product/marketing', name: 'product-marketing', component: ProductMarketing },
  { path: '/product/delivery', name: 'product-delivery', component: ProductDelivery },
  { path: '/product/branded', name: 'product-branded', component: ProductBranded },
  { path: '/product/ordering', name: 'product-ordering', component: ProductOrdering },
  { path: '/product/loyalty', name: 'product-loyalty', component: ProductLoyalty },
  // Company
  { path: '/company/story', name: 'company-story', component: CompanyStoryView },
  { path: '/company/careers', name: 'company-careers', component: CompanyCareersView },
  { path: '/company/press', name: 'company-press', component: CompanyPressView },
  { path: '/company/reviews', name: 'company-reviews', component: CompanyReviewsView },
  { path: '/company/releases', name: 'company-releases', component: CompanyReleasesView },
  // Resources
  { path: '/resources/blog', name: 'resources-blog', component: GenericPage },
  { path: '/resources/case', name: 'resources-case', component: GenericPage },
  { path: '/resources/support', name: 'resources-support', component: GenericPage },
  { path: '/resources/owner', name: 'resources-owner', component: GenericPage },
  // Legal / misc
  { path: '/privacy-policy', name: 'privacy', component: GenericPage },
  { path: '/license', name: 'license', component: GenericPage },
  { path: '/service', name: 'service', component: GenericPage },
  { path: '/dashboard', name: 'dashboard', component: GenericPage },
  { path: '/premium-membership', name: 'premium-membership', component: GenericPage },
  { path: '/login', name: 'login', component: GenericPage },
  // Fallback
  { path: '/:pathMatch(.*)*', name: 'not-found', component: GenericPage },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
