<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  sectionTitle: String,
  blogHref: String,
  mainVideoSrc: String,
  mainVideoTitle: String,
  sideImageSrc: String,
  sideImageAlt: String,
  sideImageTitle: String
})

const { t } = useI18n()

const sectionTitleText = computed(() => props.sectionTitle ?? (t('product_website.guides.section_title') || "Improve your restaurant's website with our guides"))
const blogHrefText = computed(() => props.blogHref ?? (t('product_website.guides.blog_href') || '/resources/blog'))
const mainVideoSrcText = computed(() => props.mainVideoSrc ?? (t('product_website.guides.main_video_src') || '/images/product/product/new_video_2.mp4'))
const mainVideoTitleText = computed(() => props.mainVideoTitle ?? (t('product_website.guides.main_video_title') || "I Reviewed The Best Website Builders For Restaurants, Here's What I Found"))
const sideImageSrcText = computed(() => props.sideImageSrc ?? (t('product_website.guides.side_image_src') || '/images/product/product/product_pro_3_2.jpg'))
const sideImageAltText = computed(() => props.sideImageAlt ?? (t('product_website.guides.side_image_alt') || 'Guide side card'))
const sideImageTitleText = computed(() => props.sideImageTitle ?? (t('product_website.guides.side_image_title') || "Buyer's Guide: The Best Website Builders for Restaurants"))
const blogCtaText = computed(() => t('product_website.guides.blog_cta') || 'Read the blog')
</script>

<template>
  <section class="py-20 lg:pb-32 px-4 md:px-[5%] bg-gray-light rounded-[24px] lg:rounded-[48px] relative z-10">
    <div class="w-full max-w-6xl mx-auto">
      <div class="max-w-5xl mx-auto">
        <div class="mb-8 md:mb-10 flex items-center">
          <div class="flex-1 overflow-hidden">
            <h3
              class="w-full md:w-[560px] max-w-full text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-tight">
              <span>{{ sectionTitleText }}</span>
            </h3>
          </div>
          <RouterLink :to="blogHrefText"
            class="h-10 md:h-12 px-4 ml-4 rounded-lg hidden lg:flex items-center shrink-0 border ctx-minor">
            <span>{{ blogCtaText }}</span>
            <svg stroke="currentColor" stroke-width="5" width="20" height="20" viewBox="0 0 48 48" fill="none"
              xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60 ml-1">
              <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </RouterLink>
        </div>
        <dl class="grid grid-cols-3 gap-6 lg:gap-4">
          <dt class="col-span-3 md:col-span-2">
            <div class="lg:w-[730px] max-w-full"></div>
            <RouterLink :to="blogHrefText"
              class="md:w-[730px] max-w-full h-[380px] md:h-[450px] text-white hover:text-minor hover:underline relative block">
              <video controls class="w-full h-full object-cover rounded-[32px]" :src="mainVideoSrcText"></video>
              <div class="w-full p-5 lg:p-8 absolute left-0 bottom-0">
                <h5 class="text-lg font-medium"><span>{{ mainVideoTitleText }}</span></h5>
              </div>
            </RouterLink>
          </dt>
          <dd class="col-span-3 md:col-span-1">
            <RouterLink :to="blogHrefText"
              class="md:w-[400px] max-w-full h-[380px] md:h-[450px] text-white hover:underline relative block">
              <img class="w-full h-full object-cover rounded-[24px] lg:rounded-[32px]"
                :src="sideImageSrcText" :alt="sideImageAltText">
              <div class="w-full p-5 lg:p-8 absolute left-0 bottom-0">
                <h5 class="text-lg font-medium"><span>{{ sideImageTitleText }}</span></h5>
              </div>
            </RouterLink>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>