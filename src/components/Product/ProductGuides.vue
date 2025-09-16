<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<{
  sectionTitle: string
  blogHref: string
  mainVideoSrc: string
  mainVideoTitle: string
  sideImageSrc: string
  sideImageAlt: string
  sideImageTitle: string
}>(), {
  sectionTitle: "Improve your restaurant's website with our guides",
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/product/new_video_2.mp4',
  mainVideoTitle: "I Reviewed The Best Website Builders For Restaurants, Here's What I Found",
  sideImageSrc: '/images/product/product/product_pro_3_2.jpg',
  sideImageAlt: 'Guide side card',
  sideImageTitle: "Buyer's Guide: The Best Website Builders for Restaurants"
})
</script>

<template>
  <section class="py-20 lg:pb-32 px-4 md:px-[5%] bg-gray-light rounded-[24px] lg:rounded-[48px] relative z-10">
    <div class="w-full max-w-6xl mx-auto">
      <div class="max-w-5xl mx-auto">
        <div class="mb-8 md:mb-10 flex items-center">
          <div class="flex-1 overflow-hidden">
            <h3
              class="w-full md:w-[560px] max-w-full text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-tight">
              <span>{{ props.sectionTitle }}</span>
            </h3>
          </div>
          <RouterLink :to="props.blogHref"
            class="h-10 md:h-12 px-4 ml-4 rounded-lg hidden lg:flex items-center shrink-0 border ctx-minor">
            <span>Read the blog</span>
            <svg stroke="currentColor" stroke-width="5" width="20" height="20" viewBox="0 0 48 48" fill="none"
              xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60 ml-1">
              <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </RouterLink>
        </div>
        <dl class="grid grid-cols-3 gap-6 lg:gap-4">
          <dt class="col-span-3 md:col-span-2">
            <div class="lg:w-[730px] max-w-full"></div>
            <RouterLink :to="props.blogHref"
              class="md:w-[730px] max-w-full h-[380px] md:h-[450px] text-white hover:text-minor hover:underline relative block">
              <video controls class="w-full h-full object-cover rounded-[32px]" :src="props.mainVideoSrc"></video>
              <div class="w-full p-5 lg:p-8 absolute left-0 bottom-0">
                <h5 class="text-lg font-medium"><span>{{ props.mainVideoTitle }}</span></h5>
              </div>
            </RouterLink>
          </dt>
          <dd class="col-span-3 md:col-span-1">
            <RouterLink :to="props.blogHref"
              class="md:w-[400px] max-w-full h-[380px] md:h-[450px] text-white hover:underline relative block">
              <img class="w-full h-full object-cover rounded-[24px] lg:rounded-[32px]"
                :src="props.sideImageSrc" :alt="props.sideImageAlt">
              <div class="w-full p-5 lg:p-8 absolute left-0 bottom-0">
                <h5 class="text-lg font-medium"><span>{{ props.sideImageTitle }}</span></h5>
              </div>
            </RouterLink>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>