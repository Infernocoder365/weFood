<template>
  <section class="px-2 bg-default text-default">
    <div class="w-full max-w-wrap mx-auto">
      <div class="px-4 sm:px-10 lg:px-16 py-12 lg:py-20 bg-gray-light rounded-[48px]">
        <ul class="grid grid-cols-12 gap-6 md:gap-2">
          <!-- Featured -->
          <li class="col-span-12 pb-6 lg:pb-0">
            <dl class="w-full bg-default text-default rounded-[32px] flex flex-wrap">
              <dt class="w-full lg:w-[440px] rounded-[32px] shadow-xl lg:shadow-none shadow-minor/30 overflow-hidden flex shrink-0">
                <img src="/images/resources/blog/resources_blog_1_1.jpeg" class="w-full aspect-[35/20] lg:aspect-auto object-cover" :alt="featured.imageAlt" />
              </dt>
              <dd class="w-full px-4 py-8 lg:pl-14 lg:pr-[72px] lg:flex-1 lg:overflow-hidden">
                <div class="h-full grid gap-6 lg:gap-14 place-content-between">
                  <div class="flex flex-col items-start gap-4 lg:gap-6">
                    <p class="px-2 py-0.5 text-xs font-medium bg-minor/10 text-minor rounded-full">{{ featured.tag }}</p>
                    <h5 class="text-[32px] font-medium leading-tight">{{ featured.title }}</h5>
                    <p class="text-gray-default font-medium">{{ featured.desc }}</p>
                  </div>
                  <div class="flex flex-wrap items-center space-x-2 sm:space-x-4 lg:space-x-6">
                    <div class="w-full sm:w-auto">
                      <img src="/images/resources/blog/resources_blog_1_2.jpg" class="w-6 h-6 mr-2 rounded-full object-cover inline-block align-middle" :alt="featured.authorAlt" />
                      <span>{{ featured.author }}</span>
                    </div>
                    <em class="h-5 border-l border-black hidden sm:block"></em>
                    <div class="w-full sm:w-auto text-gray-default">{{ featured.read }}</div>
                    <em class="h-5 border-l border-black hidden sm:block"></em>
                    <div class="w-full sm:w-auto text-gray-default">{{ featured.date }}</div>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          
          <!-- Cards -->
          <li class="col-span-12 md:col-span-6 lg:col-span-4" v-for="(card, cidx) in cards" :key="cidx">
            <div class="w-full h-full bg-default text-default rounded-2xl grid place-content-between">
              <dl class="p-4 sm:p-6 flex">
                <dt class="flex-1 overflow-hidden flex flex-col items-start gap-4">
                  <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">{{ card.category }}</h6>
                  <p class="text-xl font-medium">{{ card.title }}</p>
                </dt>
                <dd class="w-[90px] h-[90px] ml-4 sm:ml-6 flex shrink-0">
                  <img :src="card.image" class="w-full h-full object-cover rounded-2xl" :alt="card.alt" />
                </dd>
              </dl>
              <div class="p-4 sm:px-6 text-sm sm:text-base text-gray-default font-medium flex items-start space-x-2.5 sm:space-x-6">
                <span>{{ card.read }}</span>
                <i class="h-5 border-l border-black hidden sm:block"></i>
                <span>{{ card.date }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Featured { tag: string; title: string; desc: string; author: string; read: string; date: string; imageAlt: string; authorAlt: string }
interface CardItem { category: string; title: string; image: string; alt: string; read: string; date: string }

const { tm, t } = useI18n()
const tr = (key: string, fallback: string) => { const v = t(key); return v === key ? fallback : v }

const defaultFeatured: Featured = {
  tag: 'FEATURED',
  title: 'How to Create a Restaurant Website That Grows Your Online Orders',
  desc: 'Discover easy ways to build a website that attracts more customers to your restaurant.',
  author: 'Adam Guild',
  read: '5 min read',
  date: 'February 26, 2024',
  imageAlt: 'Featured image',
  authorAlt: 'Author'
}

const base = '/images/resources/blog/'
const defaultCards: CardItem[] = [
  { category: 'Increase Online Sales', title: "7 Reliable Local SEO Tips To Grow Your Restaurant's Exposure", image: base + 'resources_blog_1_3.jpeg', alt: 'Card 1', read: '10 min read', date: 'March 26, 2024' },
  { category: 'Restaurant Software', title: '8 Best Restaurant Online Ordering Systems to Drive Sales in 2025', image: base + 'resources_blog_1_4.jpeg', alt: 'Card 2', read: '11 min read', date: 'November 20, 2024' },
  { category: 'Marketing Strategy', title: 'Restaurant SEO is Easier Than You Think (3 Big Wins)', image: base + 'resources_blog_1_5.jpeg', alt: 'Card 3', read: '22 min read', date: 'May 6, 2024' }
]

const featured = computed<Featured>(() => ({ ...(defaultFeatured as any), ...((tm('resources.blog.featured.featured') as any) || {}) }))
const cards = computed<CardItem[]>(() => (tm('resources.blog.featured.cards') as any) ?? defaultCards)
</script>