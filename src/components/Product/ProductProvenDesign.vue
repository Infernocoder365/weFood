<template>
  <section class="pt-16 pb-24 lg:pt-40 lg:pb-44 px-4 md:px-[5%]">
    <div class="w-full max-w-6xl mx-auto">
      <h3
        class="w-full md:w-[580px] max-w-full mx-auto mb-12 lg:mb-20 text-[28px] md:text-[38px] lg:text-[48px] text-center leading-none">
        <span>{{ titleText }}</span>
      </h3>
      <ul class="w-full max-w-6xl mx-auto grid grid-cols-12 gap-4 md:gap-6">
        <li v-for="(card, idx) in cardsData" :key="idx" class="col-span-12 md:col-span-6 lg:col-span-4">
          <div
            class="w-full h-[320px] md:h-[520px] px-6 pb-6 md:p-8 rounded-[24px] lg:rounded-[32px] relative overflow-hidden bg-white"
            :class="card.wrapperClass">
            <em class="w-full h-full absolute left-0 top-0 flex">
              <img :src="card.src" :alt="card.alt" :class="card.imgClass" />
            </em>
            <div :class="[card.textWrapperClass, card.textColorClass]">
              <p class="mb-2 text-sm opacity-60"><span>{{ card.label }}</span></p>
              <h5 :class="['leading-none', card.headingClass]">
                <span>{{ card.heading }}</span>
              </h5>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: String,
  cards: Array
})

const { t, tm } = useI18n()

const titleText = computed(() => props.title ?? (t('product.design.title') || 'A proven design that drives more traffic'))

const cardsData = computed(() => {
  if (props.cards) return props.cards
  const i18nCards = tm('product.design.cards')
  if (Array.isArray(i18nCards) && i18nCards.length) return i18nCards
  return [
    {
      src: '/images/product/product/product_pro_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: 'SEO boost',
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: '',
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: 'AI-optimized sites boost SEO and Google traffic.'
    },
    {
      src: '/images/product/product/product_pro_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-right-bottom',
      alt: 'Ordering built-in',
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Online ordering built-in',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Great ordering experience that increases sales.'
    },
    {
      src: '/images/product/product/product_pro_2_3.png',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: 'Fast launch',
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: 'Fast launch',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Add your branding, then go live ASAP.'
    }
  ]
})
</script>
