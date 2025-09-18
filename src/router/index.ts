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
const BlogResource = () => import('../views/Resources/BlogResource.vue')
const CaseResource = () => import('../views/Resources/CaseResource.vue')
const SupportResource = () => import('../views/Resources/SupportResource.vue')
const OwnerResource = () => import('../views/Resources/OwnerResource.vue')

// Newly added view imports
const ContactUsView = () => import('../views/ContactUsView.vue')
const FaqsView = () => import('../views/FaqsView.vue')
const JoinUsView = () => import('../views/JoinUsView.vue')
const PremiumMembershipView = () => import('../views/PremiumMembershipView.vue')
const PrivacyPolicyView = () => import('../views/PrivacyPolicyView.vue')
const ProfileView = () => import('../views/ProfileView.vue')
const LicenseTermsView = () => import('../views/LicenseTermsView.vue')

// Profile-related Views
const PasswordChangeView = () => import('../views/PasswordChangeView.vue')
const CashwordChangeView = () => import('../views/CashwordChangeView.vue')
const BindcardView = () => import('../views/BindcardView.vue')

// Auth Views
const LoginView = () => import('../views/Auth/LoginView.vue')
const RegisterView = () => import('../views/Auth/RegisterView.vue')

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
  { path: '/resources/blog', name: 'resources-blog', component: BlogResource },
  { path: '/resources/case', name: 'resources-case', component: CaseResource },
  { path: '/resources/support', name: 'resources-support', component: SupportResource },
  { path: '/resources/owner', name: 'resources-owner', component: OwnerResource },
  // New top-level pages from sample HTML
  { path: '/contact-us', name: 'contact-us', component: ContactUsView },
  { path: '/join-us', name: 'join-us', component: JoinUsView },
  { path: '/faqs', name: 'faqs', component: FaqsView },
  // Legal / misc
  { path: '/privacy-policy', name: 'privacy', component: PrivacyPolicyView },
  { path: '/license', name: 'license', component: LicenseTermsView },
  { path: '/service', name: 'service', component: GenericPage },
  { path: '/dashboard', name: 'dashboard', component: () => import('../views/DashboardView.vue'), meta: { requiresAuth: true } },
  { path: '/premium-membership', name: 'premium-membership', component: PremiumMembershipView, meta: { requiresAuth: true } },
  { path: '/invite', name: 'invite', component: GenericPage, meta: { requiresAuth: true } },
  { path: '/orders', name: 'orders', component: GenericPage, meta: { requiresAuth: true } },
  { path: '/withdraw', name: 'withdraw', component: GenericPage, meta: { requiresAuth: true } },
  { path: '/logs', name: 'logs', component: GenericPage, meta: { requiresAuth: true } },
  { path: '/profile', name: 'profile', component: ProfileView, meta: { requiresAuth: true } },
  // Profile-related routes
  { path: '/password/change', name: 'password-change', component: PasswordChangeView, meta: { requiresAuth: true } },
  { path: '/cashword/change', name: 'cashword-change', component: CashwordChangeView, meta: { requiresAuth: true } },
  { path: '/bindcard', name: 'bindcard', component: BindcardView, meta: { requiresAuth: true } },

  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  // Fallback
  { path: '/:pathMatch(.*)*', name: 'not-found', component: GenericPage },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      // If navigating to an anchor on the page
      return { el: to.hash, behavior: 'smooth' } as any
    }
    return { left: 0, top: 0, behavior: 'smooth' } as any
  },
})

// Global auth guard
import { useCounterStore } from '@/stores/counter' // keep existing store imports happy if needed
import { useAuthStore } from '@/stores/auth'

router.beforeEach((to) => {
  const auth = useAuthStore()

  // If already logged in, block navigating to login/register
  if (auth.isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    const next = (to.query.next as string) || '/dashboard'
    return { path: next }
  }

  // Protect routes that need auth
  if (to.meta.requiresAuth) {
    if (!auth.isAuthenticated) {
      return { path: '/login', query: { next: to.fullPath } }
    }
  }

  return true
})

export default router
