<script setup lang="ts">
import { ref } from 'vue'

type Faq = { question: string; answer: string }

const faqs: Faq[] = [
  {
    question: 'What is included?',
    answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Your subscription includes all of our features. The WeFood platform upgrades your online presence to drive direct orders like the big restaurant brands. One price upgrades your website and online ordering system and gives you your own branded app. You also get proven marketing automations that drive revenue per guest higher.<br><br>“<a href="javascript:;">WeFood.com is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.”</a></p><p></p><p><a href="javascript:;">Yuliana Vasquez, WeFood of Samos Oaxaca</a></p></div></article>`
  },
  {
    question: 'What commissions do I pay as a restaurant?',
    answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Restaurants pay zero commissions, and are only charged a simple flat fee for the WeFood platform.<br><br>As for your customers, they are charged 5% of their order. When your customers order from third-party apps, they get charged 15% or more, so they pay a lot less when they order directly from you.<br><br>“It's only one flat fee. There's no hidden fees. They're very upfront about what they're going to charge you. I love it, you know, and I cannot say that enough.”</p><p></p><p>Sandy Sei, WeFood of Cyclo Noodles</p><p></p></div></article>`
  },
  {
    question: 'How long are your contracts?',
    answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>There are no long-term contracts or commitments. You can use WeFood month to month, and cancel at any time you'd like. At WeFood, we don’t believe in locking restaurants into contracts. That’s why we have the only month-to-month billing in the industry.<br><br>“The best part is your customer service. It’s so quick and friendly; it just made my life easier. If somebody asks me, I recommend WeFood.”</p><p></p><p>Hiroyuki Aidichi, WeFood of Aburaya Fried Chicken</p><p></p></div></article>`
  },
  {
    question: 'How long does it take to get started?',
    answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Many restaurants can launch within a week. We'll ask you for details like your website domain, Google Business, and Yelp information. If you have those on hand, we can launch your new online presence in a few days.<br><br>“The process was so easy. I think it was ready in less than two weeks. I'm so grateful.”</p><p></p><p>Gia Schultz, WeFood of The Modern Vegan</p><p></p></div></article>`
  },
  {
    question: 'Should I stop using third-party delivery apps?',
    answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Most of our customers use both. They use the apps as another marketing channel, then drive their customers to order directly from them using WeFood.<br><br>“We're working with <a href="javascript:;">WeFood.com</a> and it's pulling away the traffic that's going to those third-party platforms, and it's coming directly to us.”</p><p></p><p>Matt Miller, Co-WeFood of Mr M's Sandwich Shop</p><p></p></div></article>`
  }
]

const openIndex = ref<number | null>(null)
const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}
</script>

<template>
  <section
    class="py-60 lg:pt-[140px] lg:pb-[180px] lg:mx-2 -my-10 px-ctx lg:px-16 bg-white text-default rounded-3xl lg:rounded-[48px] relative z-10">
    <div class="w-full max-w-wrap mx-auto">
      <div class="w-full flex">
        <div class="w-full lg:flex-1 lg:overflow-hidden">
          <h3 class="mb-10 text-[36px] md:text-[44px] font-medium"><span>FAQs</span></h3>
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
                <div v-html="faq.answer"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-[260px] ml-10 pt-14 hidden lg:block shrink-0">
          <div class="w-full px-[22px] pb-[22px] pt-3 bg-[#171F1F] text-white rounded-3xl grid grid-cols-1 gap-6">
            <div class="-mx-3 flex"><img class="w-full h-[150px] object-cover"
                src="/images/pricing/faq_manager_1.jpg"></div>
            <p class="text-lg font-medium"><span>"After we signed up with WeFood, we've saved probably hundreds
                of thousands of dollars."</span></p>
            <div class="text-xs opacity-60">
              <p>Hiroyuki Aidichi</p>
              <p>WeFood of Aburaya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>