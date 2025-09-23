<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Intro section with headline, Forbes badge, and image mosaic
const mosaicItems = [
  {
    id: 1,
    classes: 'lg:col-span-3 lg:row-span-2 col-span-1',
    src: '/images/company/careers/company_careers_1_1.jpg',
    alt: 'Team 1'
  },
  {
    id: 2,
    classes: 'lg:col-span-1 col-span-1',
    src: '/images/company/careers/company_careers_1_2.jpg',
    alt: 'Team 2'
  },
  {
    id: 3,
    classes: 'lg:col-span-1 col-span-1',
    src: '/images/company/careers/company_careers_1_3.jpg',
    alt: 'Team 3'
  },
  {
    id: 4,
    classes: 'lg:col-span-2 col-span-1',
    src: '/images/company/careers/company_careers_1_4.jpg',
    alt: 'Team 4'
  }
]

const { t } = useI18n()
</script>

<template>
  <section class="py-24 lg:pt-40 pb-32 px-[5%] bg-default text-default">
    <div class="w-full max-w-wrap mx-auto">
      <div class="mb-10 lg:mb-20 flex flex-col items-center">
        <a href="javascript:;" class="py-2 pl-4 pr-3 mb-6 lg:mb-7 text-sm border border-minor hover:text-minor hover:underline rounded-full block flex item-center">
          <span>🎉&nbsp;</span>
          <span>{{ t('careers.intro.badge_text') }}</span>
          <svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60 ml-2"><path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        <h3 class="w-[700px] max-w-full mb-3 lg:mb-4 text-[42px] lg:text-[56px] text-center font-medium leading-none">
          <span>{{ t('careers.intro.headline') }}</span>
        </h3>
        <p class="w-[470px] max-w-full text-gray-deep text-center">
          <span>{{ t('careers.intro.subheadline') }}</span>
        </p>
      </div>
      <dl class="grid grid-cols-2 lg:grid-cols-5 gap-2">
        <!-- Use v-for to render mosaic items -->
        <dd v-for="item in mosaicItems" :key="item.id" :class="item.classes">
          <div class="w-full h-full rounded-xl overflow-hidden flex">
            <div class="w-full h-full bg-gray-200">
              <img class="w-full h-full object-cover" :src="item.src" :alt="item.alt" />
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </section>
</template>