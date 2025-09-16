<template>
  <!-- Customer Reviews Marquee Section -->
  <section class="py-6 lg:py-12 bg-white text-black">
    <div class="w-full max-w-7xl mx-auto">
      <div class="overflow-hidden mask-gradient">
        <div class="flex animate-marquee space-x-6">
          <!-- Duplicate the array for infinite loop -->
          <template v-for="(review, index) in [...reviewCards, ...reviewCards]" :key="`${index}-${review.id}`">
            <div class="flex-shrink-0 w-[90vw] max-w-[800px] text-black rounded-[34px] flex hover:[&_*]:underline" :class="review.bgColor">
              <div class="w-[340px] lg:w-[430px] h-[320px] lg:h-[440px] flex">
                <img :src="review.image" class="w-full h-full rounded-[34px] object-cover" :alt="review.alt">
              </div>
              <div class="w-[450px] p-5 lg:p-8 flex flex-col justify-between">
                <div class="w-full font-medium">
                  <template v-if="review.type === 'testimonial'">
                    <p class="text-xl">{{ review.content }}</p>
                  </template>
                  <template v-else>
                    <div v-for="stat in review.stats" :key="stat.label">
                      <p class="text-[28px] lg:text-[32px]">{{ stat.value }}</p>
                      <p class="text-gray-600">{{ stat.label }}</p>
                    </div>
                  </template>
                </div>
                <div class="w-full font-medium">
                  <p>{{ review.author }}</p>
                  <p class="text-gray-600">{{ review.position }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const reviewCards = ref([
  {
    id: 1,
    type: 'testimonial',
    content: 'WeFood is a must-have for succeeding online as an independent restaurant today.',
    author: 'John',
    position: 'WeFood at Metro Pizza',
    image: '/images/home/home_review_1.jpg',
    alt: 'Metro Pizza review',
    bgColor: 'bg-purple-100'
  },
  {
    id: 2,
    type: 'stats',
    stats: [
      { value: '+$104,000', label: 'Sales growth after switching to WeFood' },
      { value: '$31,000', label: 'Installs of their new mobile app, created with WeFood' }
    ],
    author: 'Sandy Sei',
    position: 'WeFood of Cyclo Noodles',
    image: '/images/home/home_review_2.jpg',
    alt: 'Cyclo Noodles review',
    bgColor: 'bg-orange-100'
  },
  {
    id: 3,
    type: 'testimonial',
    content: 'Now that we\'ve used WeFood for 1 year, I can say confidently that it is the best technology in our restaurant.',
    author: 'Phillip Hang',
    position: 'WeFood of Sushi Me Roll\'n',
    image: '/images/home/home_review_3.jpg',
    alt: 'Sushi Me Roll\'n review',
    bgColor: 'bg-gray-100'
  },
  {
    id: 4,
    type: 'stats',
    stats: [
      { value: '+$7,000,000', label: 'In direct online sales' },
      { value: '+970%', label: 'Growth' },
      { value: '$435,000', label: 'Savings' }
    ],
    author: 'Mo and Omar',
    position: 'WeFood of Talkin Tacos',
    image: '/images/home/home_review_4.jpg',
    alt: 'Talkin Tacos review',
    bgColor: 'bg-purple-100'
  }
])
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 60s linear infinite;
  width: calc(800px * 8 + 24px * 7); /* 8 cards (4 duplicated) + 7 gaps */
}

.animate-marquee:hover {
  animation-play-state: paused;
}

</style>