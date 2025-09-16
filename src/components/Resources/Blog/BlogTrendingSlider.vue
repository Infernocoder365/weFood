<template>
  <section class="pt-6 pb-20 lg:pb-40">
    <div class="w-full max-w-wrap mx-auto">
      <h3
        class="mb-10 lg:mb-20 px-[5%] text-[36px] lg:text-[44px] text-center font-medium leading-tight"
        ><span>Trending articles</span></h3
      >

      <!-- Swiper -->
      <section class="w-full overflow-visible" style="--swiper-theme-color: var(--minor);">
        <Swiper
          class="mySwiper px-[5%]"
          :modules="[Navigation]"
          :slides-per-view="'auto'"
          :centered-slides="true"
          :space-between="16"
          navigation
          :breakpoints="{ 1024: { spaceBetween: 32 } }"
        >
          <SwiperSlide
            v-for="(slide, idx) in slides"
            :key="idx"
            class="!w-[310px] !h-[210px] lg:!w-[610px] lg:!h-[410px]"
          >
            <div class="w-full h-full rounded-3xl lg:rounded-[40px] relative overflow-hidden flex">
              <img :src="slide.image" class="w-full h-full object-cover" />
              <div
                class="w-full h-full p-4 lg:py-6 lg:px-8 text-white absolute left-0 top-0 flex flex-col gap-2 items-start justify-end"
                style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.9) 85%);"
              >
                <div class="px-2 py-1 text-[0.625rem] bg-white/30 leading-none rounded-full flex">
                  <span>{{ slide.tag }}</span>
                </div>
                <h5 class="text-xl font-medium"><span>{{ slide.title }}</span></h5>
                <div
                  class="pt-2 text-[0.625rem] lg:text-xd opacity-60 flex items-center gap-3 lg:gap-6"
                >
                  <span>{{ slide.read }}</span>
                  <i class="h-3 lg:h-4 border-l border-white"></i>
                  <span>{{ slide.date }}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface SlideItem {
  image: string
  tag: string
  title: string
  read: string
  date: string
}

const slides: SlideItem[] = [
  {
    image: '/images/resources/blog/resources_blog_3_1.jpeg',
    tag: 'Restaurant Software',
    title: '8 Best Restaurant Online Ordering Systems to Drive Sales in 2025',
    read: '11 min read',
    date: 'November 20, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_2.jpeg',
    tag: 'Marketing Strategy',
    title:
      'Email Marketing for Restaurants: The 8 Money-Making Campaigns Every Restaurant Must Send',
    read: '14 min read',
    date: 'August 5, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_3.jpeg',
    tag: 'Marketing Strategy',
    title: 'Restaurant Marketing Plan: A Step-by-Step Template for Any Budget',
    read: '17 min read',
    date: 'July 3, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_4.jpeg',
    tag: 'Restaurant Software',
    title: 'The Top 7 ChowNow Alternatives for Growing Online Orders',
    read: '8 min read',
    date: 'June 21, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_5.jpeg',
    tag: 'Restaurant Software',
    title: 'The 6 Best Popmenu Competitors to Consider (Pros & Cons)',
    read: '8 min read',
    date: 'June 17, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_6.jpeg',
    tag: 'Restaurant Software',
    title: 'How To Create Online Ordering for a Restaurant (That Gets Results)',
    read: '10 min read',
    date: 'June 12, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_7.jpeg',
    tag: 'Restaurant Software',
    title: 'The Best Restaurant Website Builders (Read This First)',
    read: '15 min read',
    date: 'May 14, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_8.jpeg',
    tag: 'Marketing Strategy',
    title: 'Restaurant SEO is Easier Than You Think (3 Big Wins)',
    read: '22 min read',
    date: 'May 6, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_9.jpeg',
    tag: 'Marketing Strategy',
    title: "Restaurant Marketing Guide: Strategies for Growth in 2024",
    read: '21 min read',
    date: 'April 24, 2024'
  },
  {
    image: '/images/resources/blog/resources_blog_3_10.jpeg',
    tag: 'Increase Online Sales',
    title: "7 Reliable Local SEO Tips To Grow Your Restaurant's Exposure",
    read: '10 min read',
    date: 'March 26, 2024'
  }
]
</script>

<style scoped>
/* scale effect for active vs others */
:deep(.mySwiper .swiper-slide) {
  transition: transform 0.3s ease;
  transform: scale(0.8);
}
:deep(.mySwiper .swiper-slide-active) {
  transform: scale(1);
}
/* Ensure slides overflow is visible so prev/next peek in */
:deep(.mySwiper .swiper-wrapper) {
  align-items: stretch;
}
/* Optional: nicer nav buttons on dark images */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: var(--minor);
}
</style>