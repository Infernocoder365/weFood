<script setup lang="ts">
interface MediaOutlet {
  name: string
  logo: string
}

interface FeaturedArticle {
  title: string
  outlet: string
  date: string
  image: string
  link: string
}

const mediaOutlets: MediaOutlet[] = [
  { name: 'TechCrunch', logo: '/images/press/techcrunch-logo.svg' },
  { name: 'Forbes', logo: '/images/press/forbes-logo.svg' },
  { name: 'The Verge', logo: '/images/press/verge-logo.svg' },
  { name: 'Restaurant Business', logo: '/images/press/restaurant-business-logo.svg' },
  { name: 'Nation\'s Restaurant News', logo: '/images/press/nrn-logo.svg' },
  { name: 'QSR Magazine', logo: '/images/press/qsr-logo.svg' }
]

const featuredArticles: FeaturedArticle[] = [
  {
    title: 'WeFood Revolutionizes Restaurant Technology with AI-Powered Solutions',
    outlet: 'TechCrunch',
    date: 'December 2024',
    image: '/images/press/article-1.jpg',
    link: '#'
  },
  {
    title: 'How WeFood is Helping Local Restaurants Compete with Delivery Giants',
    outlet: 'Forbes',
    date: 'November 2024',
    image: '/images/press/article-2.jpg',
    link: '#'
  },
  {
    title: 'The Future of Restaurant Ordering: WeFood\'s Direct-to-Consumer Platform',
    outlet: 'Restaurant Business',
    date: 'October 2024',
    image: '/images/press/article-3.jpg',
    link: '#'
  },
  {
    title: 'WeFood Named to Forbes Next Billion-Dollar Startups List',
    outlet: 'Forbes',
    date: 'September 2024',
    image: '/images/press/article-4.jpg',
    link: '#'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-12 space-y-16">
    <!-- WeFood in the News Section -->
    <section>
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-center">WeFood in the News</h2>
      <div class="bg-gray-50 rounded-2xl p-8">
        <p class="text-center text-gray-600 mb-8">Featured in leading technology and restaurant industry publications</p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div v-for="(outlet, i) in mediaOutlets" :key="i" class="flex justify-center">
            <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-16 flex items-center justify-center">
              <span class="text-gray-700 font-medium text-sm">{{ outlet.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recently Featured Articles -->
    <section>
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Recently Featured On</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(article, i) in featuredArticles" :key="i" class="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
          <!-- Article Image -->
          <div class="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
            <svg class="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
          </div>
          
          <!-- Article Content -->
          <div class="p-6">
            <!-- Media Logo -->
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center mr-3">
                <span class="text-xs font-bold text-gray-600">{{ article.outlet.charAt(0) }}</span>
              </div>
              <span class="text-sm font-medium text-gray-600">{{ article.outlet }}</span>
            </div>
            
            <!-- Article Title -->
            <h3 class="text-lg font-semibold mb-2 line-clamp-2">{{ article.title }}</h3>
            
            <!-- Date and Link -->
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ article.date }}</span>
              <a :href="article.link" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                See the article
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Press Contact -->
    <section class="text-center">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 class="text-2xl font-semibold mb-4">Press Inquiries</h2>
        <p class="text-gray-700 mb-6">For media inquiries, interviews, or press materials, please contact our press team.</p>
        <a href="mailto:press@wefood.com" class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Contact Press Team
        </a>
      </div>
    </section>
  </div>
</template>