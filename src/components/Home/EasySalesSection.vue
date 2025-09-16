<template>
  <section class="md:mx-2 -my-10 pt-20 pb-8 lg:py-32 bg-white rounded-[24px] md:rounded-[48px]">
    <div class="w-full max-w-wrap mx-auto">
      <div class="w-full px-ctx md:px-10 lg:px-20">
        <ul class="pt-5 md:pt-10 grid grid-cols-2 gap-3">
          <!-- Mobile App Feature -->
          <li
            class="col-span-2 h-[408px] md:h-[560px] px-6 py-8 md:p-10 rounded-[40px] bg-cover bg-center flex flex-col items-end justify-end relative overflow-hidden bg-orange-500"
            :style="{ backgroundImage: `url('${features[0].image}')` }"
          >
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            <div class="md:text-right max-w-[460px] text-center relative z-10">
              <p class="text-lg leading-tight font-medium text-white-semi">
                <span>{{ features[0].description }}</span>
              </p>
            </div>
          </li>
          
          <!-- SEO Feature -->
          <li
            class="col-span-2 md:col-span-1 h-[408px] md:h-[560px] px-6 py-8 md:p-10 rounded-[40px] bg-cover bg-center flex flex-col items-end justify-end relative overflow-hidden bg-blue-500"
            :style="{ backgroundImage: `url('${features[1].image}')` }"
          >
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            <div class="max-w-[460px] text-center relative z-10">
              <p class="text-lg leading-tight font-medium text-white">
                <span>{{ features[1].description }}</span>
              </p>
            </div>
          </li>
          
          <!-- Online Ordering Feature -->
          <li
            class="col-span-2 md:col-span-1 h-[408px] md:h-[560px] px-6 py-8 md:p-10 rounded-[40px] bg-cover bg-center flex flex-col items-end justify-end relative overflow-hidden bg-green-500"
            :style="{ backgroundImage: `url('${features[2].image}')` }"
          >
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            <div class="max-w-[460px] text-center relative z-10">
              <p class="text-lg leading-tight font-medium text-gray-700">
                <span>{{ features[2].description }}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    description: 'We make it easy for your customers to re-order by giving your restaurant its own mobile app.',
    image: '/images/home/in_easy_sale_1.jpg'
  },
  {
    id: 2,
    description: 'Your website should be your top source of new customers. We use AI to grow your website\'s Google rankings.',
    image: '/images/home/in_easy_sale_2.jpg'
  },
  {
    id: 3,
    description: 'Customers order directly if it\'s familiar & easy. So that\'s how we build your online ordering.',
    image: '/images/home/in_easy_sale_3.jpg'
  }
])
</script>