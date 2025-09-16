<template>
  <section class="pt-20 pb-12 lg:py-32 px-ctx lg:px-16 bg-[#F7F6F5] text-default">
    <div class="max-w-7xl w-full max-w-wrap mx-auto">
      <div class="w-full flex items-center justify-between flex-wrap">
        <div class="w-[560px] max-w-full">
          <h3 class="max-w-[560px] mx-auto mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
            <span>See our free guides on growing your restaurant</span>
          </h3>
        </div>
        <a href="/" class="h-12 px-4 ctx-minor rounded-lg hidden lg:flex items-center">
          <span>See all guides</span>
          <svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
      <ul class="text-white grid grid-cols-3 gap-2">
        <li v-for="guide in guides" :key="guide.id" class="col-span-3 sm:col-span-2 lg:col-span-1 relative flex">
          <img :src="guide.image" class="w-full h-auto rounded-[32px]" :alt="guide.title">
          <div class="w-full h-full p-4 md:p-6 lg:p-8 absolute left-0 top-0 flex flex-col justify-end">
            <p class="w-full text-lg">
              <span>{{ guide.title }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const guides = ref([
  {
    id: 1,
    title: "3 Best Restaurant Marketing Ideas For 2024 (with AI Strategies)",
    image: "/images/home/in_restaurant_1.jpg"
  },
  {
    id: 2,
    title: "Restaurant SEO is Easier Than You Think (3 Big Wins)",
    image: "/images/home/in_restaurant_2.jpg"
  },
  {
    id: 3,
    title: "Buyer's Guide: The Best Restaurant Website Builders",
    image: "/images/home/in_restaurant_3.jpg"
  }
])
</script>