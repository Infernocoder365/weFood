<template>
  <section class="py-12 lg:py-20 px-[5%] bg-default text-default">
    <div class="w-full max-w-wrap mx-auto">
      <h3 class="mb-10 lg:mb-12 text-[36px] lg:text-[44px] text-center font-medium leading-tight">{{ mostRecentTitle }}</h3>
      <dl class="flex flex-wrap gap-16 lg:gap-10">
        <dt class="w-full lg:flex-1 lg:overflow-hidden">
          <ul class="grid gap-4 md:gap-8">
            <li v-for="(it, idx) in items" :key="idx" class="pb-4 md:pb-6 flex gap-4 md:gap-6 border-b border-default">
              <div class="w-[60px] sm:w-20 h-[53px]">
                <img :src="it.image" class="w-full h-full object-cover rounded-2xl" :alt="it.alt" />
              </div>
              <dl class="flex-1 grid gap-4 md:gap-6 place-content-between">
                <dt class="flex-1 overflow-hidden flex flex-col items-start gap-2">
                  <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">{{ it.tag }}</h6>
                  <p class="text-xl font-medium">{{ it.title }}</p>
                </dt>
                <dd class="text-xs sm:text-xd text-gray-default font-medium flex items-start gap-2.5 sm:gap-6">
                  <span>{{ it.read }}</span>
                  <i class="h-5 border-l border-black hidden sm:block"></i>
                  <span>{{ it.date }}</span>
                </dd>
              </dl>
            </li>
          </ul>
        </dt>
        <dd class="w-full lg:max-w-[400px] px-6 py-12 lg:p-10 bg-body text-body rounded-2xl flex flex-col items-center justify-center shrink-0">
          <h5 class="mb-4 lg:mb-6 text-[32px] text-center font-medium leading-tight">{{ subscribeTitle }}</h5>
          <p class="text-base text-center font-medium">{{ subscribeDesc }}</p>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface RecentItem { image: string; alt: string; tag: string; title: string; read: string; date: string }

const { t, tm } = useI18n()
const tr = (key: string, fallback: string) => { const val = t(key); return val === key ? fallback : val }

const mostRecentTitle = computed(() => tr('resources.blog.most_recent.title', 'Most Recent'))
const subscribeTitle = computed(() => tr('resources.blog.most_recent.subscribe.title', 'Subscribe to our blog'))
const subscribeDesc = computed(() => tr('resources.blog.most_recent.subscribe.desc', "We'll send you our best ideas on restaurant marketing and growing your online sales."))

const defaults: RecentItem[] = [
  { image: '/images/resources/blog/resources_blog_2_1.jpg', alt: 'Recent 1', tag: 'Marketing Strategy', title: 'How To Write a Killer Menu Description That Boosts Sales', read: '9 min read', date: 'December 10, 2024' },
  { image: '/images/resources/blog/resources_blog_2_2.png', alt: 'Recent 2', tag: 'Marketing Strategy', title: 'Menu Engineering: How To Design a Menu That Drives Sales', read: '8 min read', date: 'December 3, 2024' },
  { image: '/images/resources/blog/resources_blog_2_3.jpeg', alt: 'Recent 3', tag: 'Increase Online Sales', title: 'How Much Does WeFood Cost? Cut Delivery Fees with These Proven Tips', read: '7 min read', date: 'November 21, 2024' },
]

const items = computed<RecentItem[]>(() => (tm('resources.blog.most_recent.items') as any) ?? defaults)
</script>