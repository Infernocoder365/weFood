<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Logo sources for the press strip
const pressLogos: string[] = [
  '/images/company/press/company_press_1_logo1.svg',
  '/images/company/press/company_press_1_logo2.svg',
  '/images/company/press/company_press_1_logo3.svg',
  '/images/company/press/company_press_1_logo4.svg',
  '/images/company/press/company_press_1_logo5.svg',
  '/images/company/press/company_press_1_logo6.svg',
  '/images/company/press/company_press_1_logo7.svg',
  '/images/company/press/company_press_1_logo8.svg',
  '/images/company/press/company_press_1_logo9.svg'
]

const { t } = useI18n()
</script>

<template>
  <section class="md:px-8 -mb-10 bg-footer text-footer relative z-10">
    <div class="w-full max-w-wrap mx-auto">
      <div class="pt-32 pb-10 lg:pb-20 lg:pt-44 px-[5%] bg-default text-default rounded-b-[24px] lg:rounded-b-[48px]">
        <div class="mb-8 md:mb-24 lg:mb-32">
          <h3 class="text-[42px] lg:text-[56px] font-medium leading-none">{{ t('company.press_page.title') }}</h3>
          <p class="text-lg text-gray-default font-medium">{{ t('company.press_page.subtitle') }}</p>
        </div>
        <dl class="flex flex-wrap items-center">
          <dt class="w-full lg:w-auto mr-10 text-sm text-gray-deep shrink-0">{{ t('company.press_page.as_seen_on') }}</dt>
          <dd class="w-full lg:flex-1 overflow-hidden relative">
            <div class="h-10 flex items-center">
              <!-- v-for logo items -->
              <img v-for="(logo, idx) in pressLogos" :key="idx" :src="logo" class="w-auto h-full mr-4 md:mr-8 shrink-0" />
            </div>
            <em class="w-1/5 h-full absolute left-0 top-0 block" style="background-image: linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));"></em>
            <em class="w-1/5 h-full absolute right-0 top-0 block" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255));"></em>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>