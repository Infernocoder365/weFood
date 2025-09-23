<template>
  <!-- How restaurants grow using WeFood Section -->
  <section class="py-[60px] lg:py-[80px] px-4 bg-white text-black">
    <div class="w-full max-w-7xl mx-auto">
      <div class="lg:text-center">
        <h3 class="max-w-[560px] mx-auto mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
          <span>{{ $t('home.restaurant_growth.title') }}</span>
        </h3>
        <p class="max-w-[400px] mx-auto text-sm text-gray-600">
          <span>{{ $t('home.restaurant_growth.description') }}</span>
        </p>
      </div>
      <ul class="mt-10 grid grid-cols-3 gap-2">
        <li class="col-span-3 md:col-span-2 lg:col-span-1">
          <div class="w-full bg-gray-100 rounded-[32px] relative" style="height: 694px;">
            <em class="w-full h-full rounded-[32px] bg-cover bg-center flex" style="background-image: url('/2025/home_hiw_1.jpg');"></em>
            <i class="w-full h-full bg-black/20 rounded-[32px] absolute left-0 top-0 block"></i>
            <div class="w-full pb-12 px-2 text-white absolute left-0 bottom-0">
              <h5 class="text-lg text-center font-medium">
                <span>{{ $t('home.restaurant_growth.cards[0].title') }}</span><br>
                <span class="opacity-80">{{ $t('home.restaurant_growth.cards[0].subtitle') }}</span>
              </h5>
            </div>
          </div>
        </li>
        <li class="col-span-3 md:col-span-2 lg:col-span-1">
          <div class="w-full bg-gray-100 rounded-[32px] relative" style="height: 694px;">
            <em class="w-full h-full rounded-[32px] bg-cover bg-center flex" style="background-image: url('/2025/home_hiw_2.jpg');"></em>
            <i class="w-full h-full bg-black/20 rounded-[32px] absolute left-0 top-0 block"></i>
            <div class="w-full pb-12 px-2 text-white absolute left-0 bottom-0">
              <h5 class="text-lg text-center font-medium">
                <span>{{ $t('home.restaurant_growth.cards[1].title') }}</span><br>
                <span class="opacity-80">{{ $t('home.restaurant_growth.cards[1].subtitle') }}</span>
              </h5>
            </div>
          </div>
        </li>
        <li class="col-span-3 md:col-span-2 lg:col-span-1">
          <div class="w-full bg-gray-100 rounded-[32px] relative" style="height: 694px;">
            <em class="w-full h-full rounded-[32px] bg-cover bg-center flex" style="background-image: url('/2025/home_hiw_3.jpg');"></em>
            <i class="w-full h-full bg-black/20 rounded-[32px] absolute left-0 top-0 block"></i>
            <div class="w-full pb-12 px-2 text-white absolute left-0 bottom-0">
              <h5 class="text-lg text-center font-medium">
                <span>{{ $t('home.restaurant_growth.cards[2].title') }}</span><br>
                <span class="opacity-80">{{ $t('home.restaurant_growth.cards[2].subtitle') }}</span>
              </h5>
            </div>
          </div>
        </li>
        <li class="col-span-3 md:col-span-2 lg:col-span-1">
          <div class="w-full"></div>
        </li>
      </ul>
      <div class="pt-6 flex justify-center">
        <a href="works" class="h-12 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center transition-colors hover:underline">
          <span>{{ $t('home.restaurant_growth.cta') }}</span>
          <svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2">
            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive data needed for this component
</script>

<style scoped>
/* Component-specific styles if needed */
</style>