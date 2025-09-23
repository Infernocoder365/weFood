<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface FeatureItem { source: string; date: string; title: string; image: string; logo: string }
const sideItems: FeatureItem[] = [
  { source: 'The Verge', date: 'Jul 2, 2024', title: t('company.press_page.side_items.0.title'), image: '/images/company/press/company_press_3_1.jpeg', logo: '/images/company/press/company_press_3_logo1.svg' },
  { source: 'Bloomberg', date: 'Jul 2, 2024', title: t('company.press_page.side_items.1.title'), image: '/images/company/press/company_press_3_2.jpeg', logo: '/images/company/press/company_press_3_logo2.svg' },
  { source: 'TechCrunch', date: 'Jul 2, 2024', title: t('company.press_page.side_items.2.title'), image: '/images/company/press/company_press_3_3.webp', logo: '/images/company/press/company_press_3_logo3.svg' },
  { source: 'VentureBeat', date: 'Jul 2, 2024', title: t('company.press_page.side_items.3.title'), image: '/images/company/press/company_press_3_4.jpeg', logo: '/images/company/press/company_press_3_logo4.svg' },
  { source: 'Business Insider', date: 'Jul 2, 2024', title: t('company.press_page.side_items.4.title'), image: '/images/company/press/company_press_3_5.jpeg', logo: '/images/company/press/company_press_3_logo5.svg' },
  { source: 'Inc.', date: 'Jul 2, 2024', title: t('company.press_page.side_items.5.title'), image: '/images/company/press/company_press_3_6.jpeg', logo: '/images/company/press/company_press_3_logo6.svg' },
  { source: 'Fortune', date: 'Jul 2, 2024', title: t('company.press_page.side_items.6.title'), image: '/images/company/press/company_press_3_7.jpeg', logo: '/images/company/press/company_press_3_logo7.svg' },
  { source: 'USA Today', date: 'Jul 2, 2024', title: t('company.press_page.side_items.7.title'), image: '/images/company/press/company_press_3_8.webp', logo: '/images/company/press/company_press_3_logo8.svg' },
  { source: 'Wired', date: 'Jul 2, 2024', title: t('company.press_page.side_items.8.title'), image: '/images/company/press/company_press_3_9.jpeg', logo: '/images/company/press/company_press_3_logo9.svg' },
  { source: 'LA Times', date: 'Jul 2, 2024', title: t('company.press_page.side_items.9.title'), image: '/images/company/press/company_press_3_10.webp', logo: '/images/company/press/company_press_3_logo10.svg' }
]
</script>

<template>
  <section class="py-24 lg:pt-40 lg:pb-60 px-[5%] bg-footer text-footer">
    <div class="w-full max-w-wrap mx-auto">
      <section class="grid grid-cols-1">
        <h3 class="mb-10 text-[32px] lg:text-[36px] font-medium leading-none">{{ t('company.press_page.recently_featured_on') }}</h3>
        <div class="col-span-1 grid grid-cols-12 gap-6">
          <a href="javascript:;" class="col-span-12 mb-5 md:mb-12 lg:mb-16 rounded-[20px] bg-default text-default hover:text-minor hover:underline overflow-hidden flex flex-wrap">
            <div class="w-full md:w-1/2 relative flex">
              <img src="/images/company/press/company_press_2_1.jpg" class="w-full h-full aspect-[524/455] object-cover" />
              <em class="w-full h-full absolute left-0 top-0 flex items-center justify-center" style="background-image: linear-gradient(transparent, rgba(9, 10, 11, 0.8));">
                <img src="/images/company/press/company_press_2_logo1.svg" class="w-auto h-14" />
              </em>
            </div>
            <dl class="w-full md:w-1/2 grid grid-cols-1 place-content-between">
              <dt class="col-span-1 px-8 py-7">
                <p class="text-sm text-gray-deep font-medium">Forbes</p>
                <h3 class="text-[32px] lg:text-[36px] font-medium leading-none">WeFood named to Forbes Next Billion-Dollar Startups 2024</h3>
              </dt>
              <dd class="px-8 pt-2 pb-5 flex flex-wrap items-center justify-between">
                <p class="text-sm text-gray-deep font-medium">Aug 14, 2024</p>
                <p class="text-base text-minor font-medium flex items-center">
                  <span>{{ t('company.press_page.see_the_article') }}</span>
                  <svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60 ml-2"><path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </p>
              </dd>
            </dl>
          </a>
          <a v-for="(item, idx) in sideItems" :key="idx" href="javascript:;" class="col-span-12 sm:col-span-6 md:col-span-4 bg-default text-default rounded-[20px] hover:text-minor hover:underline overflow-hidden flex flex-col" style="box-shadow: rgba(0, 0, 0, 0.01) 0px 10px 73px, rgba(0, 0, 0, 0.02) 0px 10px 73px;">
            <div class="w-full pt-[82%] relative">
              <img :src="item.image" class="w-full h-full absolute top-0 left-0 object-cover" />
              <em class="w-full h-full absolute left-0 top-0 flex items-center justify-center" style="background-image: linear-gradient(transparent, rgba(9, 10, 11, 0.8));">
                <img :src="item.logo" class="w-auto h-14" />
              </em>
            </div>
            <div class="flex-1 px-4 lg:px-6 py-6">
              <h5 class="mb-6 text-2xl font-medium">{{ item.title }}</h5>
              <p class="text-sm text-gray-default">{{ item.date }}</p>
            </div>
            <div class="px-4 lg:px-6 pt-2 pb-3 border-t border-default">
              <div class="py-2 text-minor font-medium flex items-center">
                <span>{{ t('company.press_page.see_the_article') }}</span>
                <svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60 ml-2"><path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>