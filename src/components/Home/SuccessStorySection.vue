<template>
  <section class="pt-16 pb-20 lg:pt-52 lg:pb-32 px-ctx lg:px-16">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="w-full bg-white rounded-[32px] flex flex-wrap shadow-lg">
        <!-- Image -->
        <dt class="w-full md:w-2/5 md:max-w-[406px] shrink-0">
          <div class="w-full" style="height: 353px;">
            <img 
              :src="story.image" 
              :alt="story.title"
              class="w-full h-full rounded-[32px] object-cover"
            >
          </div>
        </dt>
        
        <!-- Content -->
        <dd class="w-full md:flex-1 md:overflow-hidden">
          <div class="w-full px-6 pt-8 pb-10 md:px-10">
            <div class="w-full">
              <h3 class="mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
                <span>{{ story.title }}</span>
              </h3>
            </div>
            <div class="w-full">
              <ul class="flex justify-between md:justify-start gap-6">
                <li class="font-medium">
                  <p class="text-lg">
                    <span>{{ story.stats.sales }}</span>
                  </p>
                  <p class="text-sm text-gray-500">
                    <span>{{ story.stats.salesLabel }}</span>
                  </p>
                </li>
                <li class="font-medium">
                  <p class="text-lg">
                    <span>{{ story.stats.growth }}</span>
                  </p>
                  <p class="text-sm text-gray-500">
                    <span>{{ story.stats.growthLabel }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </dd>
      </dl>
      
      <!-- Pagination Dots -->
      <div class="w-full pt-10 md:pt-20 flex justify-center">
        <em 
          v-for="dot in 3" 
          :key="dot" 
          class="w-3 h-3 flex items-center justify-center mx-1"
        >
          <i 
            class="w-2 h-2 rounded-full transition-colors bg-gray-300"
          ></i>
        </em>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const story = ref({
  title: 'How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com',
  image: '/images/home/in_how_1.jpg',
  stats: {
    sales: '+$150,000',
    salesLabel: 'Online sales',
    growth: '+377%',
    growthLabel: 'Growth'
  }
})
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