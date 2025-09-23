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
                    <div v-for="(stat, i) in review.stats" :key="i">
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const reviewCards = computed(() => {
  const items = tm('home.customer_reviews.cards') as any[]
  // Map images/alt/bgColor in the same order as before
  const visuals = [
    { image: '/images/home/home_review_1.jpg', alt: 'Metro Pizza review', bgColor: 'bg-purple-100' },
    { image: '/images/home/home_review_2.jpg', alt: 'Cyclo Noodles review', bgColor: 'bg-orange-100' },
    { image: '/images/home/home_review_3.jpg', alt: "Sushi Me Roll'n review", bgColor: 'bg-gray-100' },
    { image: '/images/home/home_review_4.jpg', alt: 'Talkin Tacos review', bgColor: 'bg-purple-100' },
  ]
  return (items || []).map((item, idx) => ({
    id: idx + 1,
    type: item.type,
    content: item.content,
    stats: item.stats,
    author: item.author,
    position: item.position,
    ...visuals[idx]
  }))
})
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