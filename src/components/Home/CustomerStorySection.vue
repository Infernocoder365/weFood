<template>
  <section class="py-20 md:py-32 lg:pt-[200px] lg:pb-40 px-ctx">
    <div class="w-full max-w-wrap mx-auto">
      <div class="w-full p-2.5 md:px-8 md:pb-8 md:pt-10 bg-white rounded-[32px] shadow-lg">
        <dl class="grid grid-cols-3 gap-10">
          <!-- Image -->
          <dt class="col-span-3 md:col-span-2 order-first md:order-last flex justify-center md:justify-end">
            <a href="javascript:;" class="w-full max-w-[700px] relative block">
              <img
                :src="story.image"
                :alt="t('home.customer_story.hero.restaurant_name')"
                class="w-full rounded-[28px] object-cover"
                style="height: 400px;"
              >
              <div class="w-full p-8 text-white absolute left-0 bottom-0">
                <p class="text-lg font-medium opacity-90">
                  <span>{{ t('home.customer_story.hero.link_text') }}</span>
                </p>
                <p class="text-lg font-medium opacity-50">
                  <span>{{ t('home.customer_story.hero.restaurant_name') }}</span>
                </p>
              </div>
            </a>
          </dt>
          
          <!-- Main Content -->
          <dd class="col-span-3 order-2">
            <h3 class="mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
              <span>{{ t('home.customer_story.hero.customer_name') }}</span><br>
              <span>{{ t('home.customer_story.hero.quote') }}</span>
            </h3>
            <div class="flex">
              <a 
                href="/" 
                class="h-12 px-4 text-white rounded-lg flex items-center ctx-minor transition-colors"
              >
                <span>{{ t('actions.see_more_reviews') }}</span>
                <svg 
                  stroke="currentColor" 
                  stroke-width="4" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-5 h-5 ml-2"
                >
                  <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </dd>
          
          <!-- Stats -->
          <dd class="col-span-3 md:col-span-1 order-3 flex flex-col justify-between">
            <p class="mb-6 text-base text-gray-600 font-medium">
              <span>{{ t('home.customer_story.hero.description') }}</span>
            </p>
            <ul class="w-full font-medium grid grid-cols-2 gap-6">
              <li class="col-span-1 md:col-span-2">
                <p class="text-[36px] lg:text-[44px] text-gray-900">{{ t('home.customer_story.stats.growth') }}</p>
                <p class="text-sm text-gray-500">{{ t('home.customer_story.stats.growth_label') }}</p>
              </li>
              <li class="col-span-1 md:col-span-2">
                <p class="text-[36px] lg:text-[44px] text-gray-900">{{ t('home.customer_story.stats.installs') }}</p>
                <p class="text-sm text-gray-500">{{ t('home.customer_story.stats.installs_label') }}</p>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      
      <!-- Navigation -->
      <div class="px-16 py-5 flex items-center justify-center md:justify-between">
        <a 
          href="javascript:;" 
          class="p-1 text-gray-600 hover:text-orange-600 hover:underline flex items-center transition-colors"
        >
          <em class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"/>
            </svg>
          </em>
          <p class="pl-2 hidden md:block">
            <span class="text-gray-500">{{ t('actions.previous') }}&nbsp;</span>
            <b>{{ t('home.customer_story.navigation.previous_label') }}</b>
          </p>
        </a>
        
        <a 
          href="javascript:;" 
          class="p-1 text-gray-600 hover:text-orange-600 hover:underline flex items-center transition-colors"
        >
          <p class="pr-2 hidden md:block">
            <span class="text-gray-500">{{ t('actions.next') }}&nbsp;</span>
            <b>{{ t('home.customer_story.navigation.next_label') }}</b>
          </p>
          <em class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"/>
            </svg>
          </em>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const story = ref({
  image: '/images/home/home_review_1.jpg'
})

const navigation = ref({})
</script>

<style scoped>
.max-w-wrap {
  max-width: 1200px;
}

.px-ctx {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .px-ctx {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .px-ctx {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
</style>