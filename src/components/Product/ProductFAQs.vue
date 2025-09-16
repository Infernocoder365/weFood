<template>
  <section
    class="py-24 lg:pt-[140px] lg:pb-[180px] -my-6 px-4 md:px-8 bg-white rounded-3xl md:rounded-[48px] relative z-10">
    <div class="w-full max-w-6xl mx-auto">
      <div class="w-full flex flex-col lg:flex-row">
        <div class="w-full lg:flex-1 lg:overflow-hidden">
          <h3 class="mb-6 text-[28px] md:text-[36px] font-medium"><span>{{ props.title }}</span></h3>
          <ul class="grid grid-cols-1 gap-2">
            <li v-for="(faq, idx) in props.faqs" :key="idx" class="col-span-1 rounded-2xl hover:bg-gray-light">
              <div class="w-full p-5 flex items-center cursor-pointer select-none" role="button" tabindex="0"
                :aria-expanded="openIndex === idx" :aria-controls="'faq-' + idx" @click="toggle(idx)"
                @keydown.enter.prevent="toggle(idx)" @keydown.space.prevent="toggle(idx)">
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
              <div :id="'faq-' + idx" class="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                :class="openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'">
                <div v-html="faq.answer"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-[260px] lg:ml-10 pt-10 lg:pt-14 hidden lg:block shrink-0">
          <div class="w-full px-[22px] pb-[22px] pt-3 bg-[#171F1F] text-white rounded-3xl grid grid-cols-1 gap-6">
            <div class="-mx-3 flex">
              <img class="w-full h-[150px] object-cover rounded-2xl" :src="props.sideCard.imageSrc"
                :alt="props.sideCard.imageAlt">
            </div>
            <p class="text-base md:text-lg font-medium"><span>{{ props.sideCard.quote }}</span></p>
            <div class="text-xs opacity-80">
              <p>{{ props.sideCard.name }}</p>
              <p>{{ props.sideCard.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  faqs: { question: string; answer: string }[]
  sideCard: { imageSrc: string; imageAlt: string; quote: string; name: string; role: string }
}>(), {
  title: 'FAQs',
  faqs: () => [
    {
      question: 'What happens to my current website?',
      answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>When you sign up with WeFood, you'll get a new restaurant website optimized for traffic and sales. It will replace your current website.<br><br> Your domain and website URL will stay the same.<br><br> We won't delete your current website. If you ever decide to cancel your subscription with us, we will restore your website to how it was before you signed up.</p></div></article>`
    },
    {
      question: 'How much can I customize my design?',
      answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>We believe sales is the most important thing. So we give you a proven design that you can personalize with your branding.<br><br>It's why restaurant websites with WeFood look a certain way. We've studied the best online brands. We've driven over $100 million in sales for restaurants. We've helped thousands of restaurant WeFood grow their customer base with our websites.<br><br>If you're looking for a lot of design freedom, WeFood is not the right fit for your business.</p></div></article>`
    },
    {
      question: 'How long will this take?',
      answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>If you have everything ready to go, a few days.<br><br>Most customers get their new online presence set up within about a week.<br><br>We'll need some information about your business when you sign up.<br><br>This includes your website domain information, along with Google Business and Yelp details. The more of those you have on hand, the faster we can launch.</p></div></article>`
    }
  ],
  sideCard: () => ({
    imageSrc: '/images/product/product/faq_manager_3.jpg',
    imageAlt: 'Manager',
    quote: "We're getting more clicks, and we're getting more traffic. And those clicks are turning into sales.",
    name: 'Matthew Miller',
    role: "Co-WeFood of Mr M's Sandwich Shop"
  })
})

const openIndex = ref<number | null>(null)
const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>
