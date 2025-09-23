<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const faqs = computed(() => tm('pricing.faq.items') ?? [])
const openIndex = ref(null)
const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
  <section
    class="py-60 lg:pt-[140px] lg:pb-[180px] lg:mx-2 -my-10 px-ctx lg:px-16 bg-white text-default rounded-3xl lg:rounded-[48px] relative z-10">
    <div class="w-full max-w-wrap mx-auto">
      <div class="w-full flex">
        <div class="w-full lg:flex-1 lg:overflow-hidden">
          <h3 class="mb-10 text-[36px] md:text-[44px] font-medium"><span>{{ $t('pricing.faq.title') }}</span></h3>
          <ul class="grid grid-cols-1 gap-2">
            <li v-for="(faq, idx) in faqs" :key="idx" class="col-span-1 rounded-2xl hover:bg-gray-light">
              <div
                class="w-full p-5 flex items-center cursor-pointer select-none"
                role="button"
                tabindex="0"
                :aria-expanded="openIndex === idx"
                :aria-controls="'faq-' + idx"
                @click="toggle(idx)"
                @keydown.enter.prevent="toggle(idx)"
                @keydown.space.prevent="toggle(idx)"
              >
                <div class="flex-1 overflow-hidden">
                  <h6 class="text-lg font-medium leading-tight"><span>{{ faq.question }}</span></h6>
                </div>
                <em class="w-4 h-4 ml-4 flex shrink-0">
                  <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path v-if="openIndex !== idx" d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    <path v-else d="M5 11H19V13H5Z"></path>
                  </svg>
                </em>
              </div>
              <div
                :id="'faq-' + idx"
                class="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                :class="openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'"
              >
                <div v-html="faq.answer_html"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-[260px] ml-10 pt-14 hidden lg:block shrink-0">
          <div class="w-full px-[22px] pb-[22px] pt-3 bg-[#171F1F] text-white rounded-3xl grid grid-cols-1 gap-6">
            <div class="-mx-3 flex"><img class="w-full h-[150px] object-cover"
                src="/images/pricing/faq_manager_1.jpg" alt="pricing faq side image"></div>
            <p class="text-lg font-medium"><span>{{ $t('pricing.faq.side_card.quote') }}</span></p>
            <div class="text-xs opacity-60">
              <p>{{ $t('pricing.faq.side_card.name') }}</p>
              <p>{{ $t('pricing.faq.side_card.role') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>