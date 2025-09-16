<script setup lang="ts">
interface ProductRelease {
  id: number
  title: string
  description: string
  date: string
  category: string
  version?: string
  features: string[]
  image: string
  link?: string
}

interface ReleaseCategory {
  name: string
  count: number
  color: string
}

const releaseCategories: ReleaseCategory[] = [
  { name: "Product Updates", count: 8, color: "bg-blue-100 text-blue-700" },
  { name: "New Features", count: 12, color: "bg-green-100 text-green-700" },
  { name: "Integrations", count: 6, color: "bg-purple-100 text-purple-700" },
  { name: "Company News", count: 4, color: "bg-orange-100 text-orange-700" }
]

const featuredReleases: ProductRelease[] = [
  {
    id: 1,
    title: "WeFood 3.0: Revolutionary AI-Powered Restaurant Management",
    description: "Introducing our most advanced platform yet with AI-driven analytics, automated inventory management, and predictive customer insights.",
    date: "2024-12-15",
    category: "Product Updates",
    version: "3.0",
    features: [
      "AI-powered demand forecasting",
      "Automated inventory optimization",
      "Smart menu recommendations",
      "Advanced customer analytics"
    ],
    image: "/images/company/releases/company_releases_1_1.jpg",
    link: "/releases/wefood-3-0"
  },
  {
    id: 2,
    title: "Universal POS Integration Platform Launch",
    description: "Seamlessly connect with over 50+ POS systems including Square, Toast, Clover, and more with our new universal integration platform.",
    date: "2024-11-28",
    category: "Integrations",
    features: [
      "50+ POS system integrations",
      "Real-time order synchronization",
      "Unified reporting dashboard",
      "One-click setup process"
    ],
    image: "/images/company/releases/company_releases_1_2.jpg",
    link: "/releases/pos-integration"
  },
  {
    id: 3,
    title: "Smart Delivery Network Expansion",
    description: "Expanding our delivery coverage to 500+ new cities with optimized routing, real-time tracking, and eco-friendly delivery options.",
    date: "2024-11-10",
    category: "Company News",
    features: [
      "500+ new cities covered",
      "Optimized delivery routing",
      "Real-time GPS tracking",
      "Carbon-neutral delivery options"
    ],
    image: "/images/company/releases/company_releases_1_3.jpg",
    link: "/releases/delivery-expansion"
  }
]

const recentReleases: ProductRelease[] = [
  {
    id: 4,
    title: "Advanced SEO Toolkit for Restaurant Websites",
    description: "Boost your restaurant's online visibility with our comprehensive SEO toolkit featuring automated optimization and local search enhancement.",
    date: "2024-10-22",
    category: "New Features",
    features: [
      "Automated meta tag optimization",
      "Local SEO enhancement",
      "Google My Business integration",
      "Performance analytics"
    ],
    image: "/images/company/releases/company_releases_2_1.png"
  },
  {
    id: 5,
    title: "Mobile App 2.5: Enhanced Customer Experience",
    description: "Updated mobile application with improved UI/UX, faster ordering process, and personalized recommendations.",
    date: "2024-10-08",
    category: "Product Updates",
    version: "2.5",
    features: [
      "Redesigned user interface",
      "One-tap reordering",
      "Personalized menu suggestions",
      "Enhanced loyalty program"
    ],
    image: "/images/company/releases/company_releases_2_2.png"
  },
  {
    id: 6,
    title: "Enterprise Analytics Dashboard",
    description: "Comprehensive analytics platform for restaurant chains with multi-location reporting, performance insights, and predictive analytics.",
    date: "2024-09-15",
    category: "New Features",
    features: [
      "Multi-location reporting",
      "Predictive sales analytics",
      "Customer behavior insights",
      "Custom KPI tracking"
    ],
    image: "/images/company/releases/company_releases_2_3.png"
  }
]
</script>

<template>
  <div class="py-16 space-y-16">
    <!-- Header Section -->
    <section class="text-center">
      <div class="container mx-auto px-6">
        <h1 class="text-3xl md:text-4xl font-bold text-[#171F1F] mb-4">Product Releases & Updates</h1>
        <p class="text-lg text-[#6B7280] max-w-2xl mx-auto">Stay up to date with the latest WeFood features, integrations, and company announcements</p>
      </div>
    </section>

    <!-- Release Categories -->
    <section>
      <div class="container mx-auto px-6">
        <h2 class="text-2xl font-semibold text-[#171F1F] mb-6">Release Categories</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="(category, i) in releaseCategories" :key="i" class="text-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div class="text-2xl font-bold text-[#171F1F] mb-2">{{ category.count }}</div>
            <div class="text-sm font-medium text-[#6B7280] mb-2">{{ category.name }}</div>
            <span :class="category.color" class="inline-block px-2 py-1 rounded-full text-xs font-medium">View All</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Releases -->
    <section>
      <div class="container mx-auto px-6">
        <h2 class="text-2xl md:text-3xl font-semibold text-[#171F1F] mb-8">Featured Releases</h2>
        <div class="space-y-8">
          <article v-for="release in featuredReleases" :key="release.id" class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div class="md:flex">
              <!-- Image -->
              <div class="md:w-1/3">
                <img :src="release.image" :alt="release.title" class="w-full h-64 md:h-full object-cover" />
              </div>
              
              <!-- Content -->
              <div class="md:w-2/3 p-6 md:p-8">
                <!-- Category and Date -->
                <div class="flex items-center gap-4 mb-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">{{ release.category }}</span>
                  <span v-if="release.version" class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">v{{ release.version }}</span>
                  <span class="text-sm text-[#6B7280]">{{ new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                </div>
                
                <!-- Title -->
                <h3 class="text-xl md:text-2xl font-bold text-[#171F1F] mb-3">{{ release.title }}</h3>
                
                <!-- Description -->
                <p class="text-[#6B7280] mb-4 leading-relaxed">{{ release.description }}</p>
                
                <!-- Features -->
                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-[#171F1F] mb-2">Key Features:</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div v-for="(feature, i) in release.features" :key="i" class="flex items-center gap-2 text-sm text-[#6B7280]">
                      <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {{ feature }}
                    </div>
                  </div>
                </div>
                
                <!-- Read More Link -->
                <a v-if="release.link" :href="release.link" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                  Read Full Release
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Recent Releases -->
    <section>
      <div class="container mx-auto px-6">
        <h2 class="text-2xl md:text-3xl font-semibold text-[#171F1F] mb-8">Recent Updates</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="release in recentReleases" :key="release.id" class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <!-- Image -->
            <img :src="release.image" :alt="release.title" class="w-full h-48 object-cover" />
            
            <!-- Content -->
            <div class="p-6">
              <!-- Category and Date -->
              <div class="flex items-center justify-between mb-3">
                <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">{{ release.category }}</span>
                <span class="text-xs text-[#6B7280]">{{ new Date(release.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}</span>
              </div>
              
              <!-- Title -->
              <h3 class="text-lg font-semibold text-[#171F1F] mb-2 line-clamp-2">{{ release.title }}</h3>
              
              <!-- Description -->
              <p class="text-sm text-[#6B7280] mb-4 line-clamp-3">{{ release.description }}</p>
              
              <!-- Features Count -->
              <div class="flex items-center justify-between">
                <span class="text-xs text-[#6B7280]">{{ release.features.length }} new features</span>
                <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div class="container mx-auto px-6 py-12 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Stay Updated with WeFood</h2>
        <p class="text-lg mb-8 opacity-90">Get notified about new features, product updates, and company news</p>
        <div class="max-w-md mx-auto flex gap-3">
          <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
          <button class="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Subscribe
          </button>
        </div>
        <p class="text-sm mt-4 opacity-75">Join 10,000+ restaurant owners getting our updates</p>
      </div>
    </section>
  </div>
</template>