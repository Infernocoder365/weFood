<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  description: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText: string
  secondaryCtaHref: string
  videoSrc: string
  videoPoster: string
  overlayText: string
}>(), {
  title: "Restaurant websites built for sales first, style second.",
  description: "WeFood builds your website to drive sales. Our proven design grows Google traffic, outranks delivery apps, and beats your competition.",
  primaryCtaText: "Get Started",
  primaryCtaHref: "https://www.wefood-online.co/#/dashboard",
  secondaryCtaText: "View Pricing",
  secondaryCtaHref: "https://www.wefood-online.co/#/pricing",
  videoSrc: "/images/product/product/video_1.mp4",
  videoPoster: "/images/product/product/video_1.jpg",
  overlayText: "See how the WeFood of Mr M's Sandwich Shop use WeFood to get 'more clicks, more traffic, more sales'"
})
</script>

<template>
  <section class="pt-24 pb-32 lg:py-40 lg:mx-8 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="grid grid-cols-2 gap-4">
        <dt class="col-span-2 lg:col-span-1">
          <div class="w-[670px] max-w-full">
            <h3 class="mb-4 text-[42px] lg:text-[56px] leading-none"><span>{{ props.title }}</span></h3>
            <div class="w-[460px] max-w-full mb-8">
              <p class="text-gray-deep"><span>{{ props.description }}</span></p>
            </div>
            <div class="flex flex-wrap">
              <a :href="props.primaryCtaHref"
                class="h-12 px-4 mr-3 mt-3 ctx-minor rounded-lg flex items-center"><span>{{ props.primaryCtaText }}</span><svg
                  stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none"
                  xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60">
                  <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></a>
              <a :href="props.secondaryCtaHref"
                class="h-12 px-4 mr-3 mt-3 bg-[#ebebeb] rounded-lg flex items-center"><span>{{ props.secondaryCtaText }}</span><svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48"
                  fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60">
                  <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></a>
            </div>
          </div>
        </dt>
        <dd class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
          <div class="w-[530px] max-w-full bg-gray-light rounded-[32px] relative h-[619px]">
            <video class="w-full h-full rounded-[32px] object-cover"
              :src="props.videoSrc" :poster="props.videoPoster" autoplay loop></video>
            <div class="w-full p-5 lg:p-8 text-white absolute left-0 bottom-0">
              <p>{{ props.overlayText }}</p>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </section>
</template>