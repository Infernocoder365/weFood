<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  leftImageSrc: string
  leftImageAlt: string
  features: { title: string; description: string }[]
  icons: string[]
}>(), {
  title: "Get more sales from your restaurant's website",
  leftImageSrc: "/images/product/product/product_pro_1.jpg",
  leftImageAlt: "Website preview",
  features: () => [
    {
      title: 'We build websites that Google loves',
      description: 'AI-optimized websites that boost your SEO and get you more Google traffic.'
    },
    {
      title: 'Drive online sales like the big brands',
      description: 'Easy online ordering right on your website. Grow your traffic, grow your orders.'
    },
    {
      title: 'Your new website in days, not months',
      description: "Add your branding to our proven design, then you're ready to grow online."
    }
  ],
  icons: () => [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 25.5L23.5 27.25L27 22.25M21.5 17.5L24.5 14.5L27.5 17.5H31.5V21.5L34.5 24.5L31.5 27.5V31.5H27.5L24.5 34.5L21.5 31.5H17.5V27.5L14.5 24.5L17.5 21.5V17.5H21.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
    </svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.5 20.5L20.5 28.5M33.5 24.5C33.5 29.4706 29.4706 33.5 24.5 33.5C19.5294 33.5 15.5 29.4706 15.5 24.5C15.5 19.5294 19.5294 15.5 24.5 15.5C29.4706 15.5 33.5 19.5294 33.5 24.5Z" stroke="currentColor" stroke-linejoin="round"></path>
      <path d="M21.5 22.375C21.9832 22.375 22.375 21.9832 22.375 21.5C22.375 21.0168 21.9832 20.625 21.5 20.625C21.0168 20.625 20.625 21.0168 20.625 21.5C20.625 21.9832 21.0168 22.375 21.5 22.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.75"></path>
      <path d="M27.5 28.375C27.9832 28.375 28.375 27.9832 28.375 27.5C28.375 27.0168 27.9832 26.625 27.5 26.625C27.0168 26.625 26.625 27.0168 26.625 27.5C26.625 27.9832 27.0168 28.375 27.5 28.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.75"></path>
    </svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 22.5L24.75 28M32 28.5H17M33.5 24.5C33.5 19.5294 29.4706 15.5 24.5 15.5C19.5294 15.5 15.5 19.5294 15.5 24.5C15.5 29.4706 19.5294 33.5 24.5 33.5C29.4706 33.5 33.5 29.4706 33.5 24.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
    </svg>`
  ]
})
</script>

<template>
  <section class="pt-16 pb-10 lg:pt-24 lg:pb-32 px-4 md:px-[5%] rounded-3xl md:rounded-[48px] bg-white">
    <div class="w-full max-w-6xl mx-auto">
      <h3 class="w-full md:w-[600px] max-w-full mx-auto mb-12 lg:mb-20 text-[28px] md:text-[38px] lg:text-[48px] text-center font-medium leading-none">
        <span>{{ props.title }}</span>
      </h3>
      <dl class="grid grid-cols-2 gap-10 place-items-center">
        <dt class="col-span-2 lg:col-span-1 flex justify-center lg:justify-start">
          <div class="w-[530px] max-w-full">
            <img class="w-full h-auto rounded-[24px]" :src="props.leftImageSrc" :alt="props.leftImageAlt" />
          </div>
        </dt>
        <dd class="col-span-2 lg:col-span-1">
          <ul class="grid grid-cols-1 gap-10">
            <!-- Render features dynamically and use icons from params -->
            <li v-for="(feature, idx) in props.features" :key="idx" class="col-span-1 flex">
              <em class="w-12 h-12 mr-3 bg-[#ebebeb] rounded-lg flex shrink-0 items-center justify-center" aria-hidden="true">
                <span v-html="props.icons[idx]"></span>
              </em>
              <div class="flex-1 overflow-hidden">
                <h5 class="text-2xl font-medium">{{ feature.title }}</h5>
                <p class="text-sm text-gray-600">{{ feature.description }}</p>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </section>
</template>