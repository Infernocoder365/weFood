<template>
  <section class="px-2 pb-2">
    <div class="w-full max-w-wrap mx-auto">
      <section class="pt-12 lg:pt-20 px-[5%] bg-gray-light rounded-[48px]">
        <ol class="md:mt-10 lg:mt-16 block">
          <li v-for="(section, sIdx) in sections" :key="sIdx" class="w-full py-12 lg:py-20 border-b border-dark last:border-none">
            <dl class="flex flex-col lg:flex-row gap-10 lg:gap-6">
              <dt class="max-w-[300px]">
                <div class="grid gap-3">
                  <h5 class="text-[32px] font-medium leading-tight">{{ section.heading }}</h5>
                  <p class="text-base text-gray-default">{{ section.desc }}</p>
                </div>
              </dt>
              <dd class="flex-1 grid grid-cols-5 gap-2.5">
                <!-- Featured (1st) item -->
                <div class="col-span-5 md:col-span-3 row-span-2 bg-default text-default rounded-3xl grid place-content-between">
                  <div class="w-full">
                    <div class="w-full p-2.5 flex">
                      <img :src="section.items[0].image" class="w-full aspect-[397/265] rounded-2xl object-cover" :alt="section.items[0].alt" />
                    </div>
                    <div class="p-4 lg:p-6 flex flex-col items-start gap-2">
                      <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">{{ section.items[0].tag }}</h6>
                      <p class="text-xl font-medium">{{ section.items[0].title }}</p>
                    </div>
                  </div>
                  <div class="p-4 lg:px-6 text-xs sm:text-xd text-gray-default font-medium flex items-start gap-2.5 sm:gap-6">
                    <span>{{ section.items[0].read }}</span>
                    <i class="h-5 border-l border-black hidden sm:block"></i>
                    <span>{{ section.items[0].date }}</span>
                  </div>
                </div>

                <!-- The other 2 items -->
                <div v-for="(item, iIdx) in section.items.slice(1)" :key="iIdx" class="col-span-5 md:col-span-2 bg-default text-default rounded-3xl grid place-content-between">
                  <dl class="p-4 sm:p-6 flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <dt class="flex-1 overflow-hidden flex flex-col items-start gap-4">
                      <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">{{ item.tag }}</h6>
                      <p class="text-xl font-medium">{{ item.title }}</p>
                    </dt>
                    <dd class="w-[90px] h-[90px] flex shrink-0">
                      <img :src="item.image" class="w-full h-full object-cover rounded-2xl" :alt="item.alt" />
                    </dd>
                  </dl>
                  <div class="p-4 sm:px-6 text-sm sm:text-base text-gray-default font-medium flex items-start gap-2.5 sm:gap-6">
                    <span>{{ item.read }}</span>
                    <i class="h-5 border-l border-black hidden sm:block"></i>
                    <span>{{ item.date }}</span>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
        </ol>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface SectionItem {
  image: string
  alt: string
  tag: string
  title: string
  read: string
  date: string
}
interface TopicSection {
  heading: string
  desc: string
  items: [SectionItem, SectionItem, SectionItem]
}

const { tm } = useI18n()

const base = '/images/resources/blog/'

const defaultSections = computed<TopicSection[]>(() => [
  {
    heading: 'Increase Online Sales',
    desc: "Grow your restaurant's online sales with these ideas.",
    items: [
      { image: base + 'resources_blog_4_1.jpeg', alt: 'tile-1', tag: 'Increase Online Sales', title: 'Restaurant Growth', read: '14 min read', date: 'October 18, 2023' },
      { image: base + 'resources_blog_4_2.jpeg', alt: 'tile-2', tag: 'Increase Online Sales', title: 'How Much Does WeFood Cost? Cut Delivery Fees with These Proven Tips', read: '7 min read', date: 'November 21, 2024' },
      { image: base + 'resources_blog_4_3.jpeg', alt: 'tile-3', tag: 'Increase Online Sales', title: '18 Proven Restaurant Promotion Ideas That Work in 2024', read: '7 min read', date: 'November 21, 2024' },
    ]
  },
  {
    heading: 'Restaurant Software',
    desc: 'Get to know restaurant tech that can upgrade your operations and bring your sales to the next level.',
    items: [
      { image: base + 'resources_blog_4_4.jpeg', alt: 'rs-1', tag: 'Restaurant Software', title: '8 Best Restaurant Online Ordering Systems to Drive Sales in 2025', read: '11 min read', date: 'November 20, 2024' },
      { image: base + 'resources_blog_4_5.png', alt: 'rs-2', tag: 'Restaurant Software', title: '9 Popular Toast Competitors According to Customers [2024]', read: '15 min read', date: 'March 25, 2024' },
      { image: base + 'resources_blog_4_6.jpeg', alt: 'rs-3', tag: 'Restaurant Software', title: '8 WeFood Alternatives for Every Restaurant Goal', read: '15 min read', date: 'March 25, 2024' },
    ]
  },
  {
    heading: 'Marketing Strategy',
    desc: 'Proven marketing best practices for restaurant WeFood that want to grow their business.',
    items: [
      { image: base + 'resources_blog_4_7.jpg', alt: 'ms-1', tag: 'Marketing Strategy', title: 'Digital Marketing for Restaurants: 17 Ways to Boost Profits', read: '18 min read', date: 'November 11, 2024' },
      { image: base + 'resources_blog_4_8.jpeg', alt: 'ms-2', tag: 'Marketing Strategy', title: 'Restaurant SEO is Easier Than You Think (3 Big Wins)', read: '22 min read', date: 'May 6, 2024' },
      { image: base + 'resources_blog_4_9.jpg', alt: 'ms-3', tag: 'Marketing Strategy', title: 'Best Restaurant Loyalty Programs: 10 Examples That Actually Work', read: '22 min read', date: 'May 6, 2024' },
    ]
  },
  {
    heading: 'Restaurant Websites',
    desc: 'Learn how to build a restaurant website that drives direct orders.',
    items: [
      { image: base + 'resources_blog_4_10.jpg', alt: 'rw-1', tag: 'Restaurant Websites', title: 'New Data: 6 Ways Guests Judge Your Restaurant’s Website (And What to Do About It)', read: '8 min read', date: 'September 2, 2024' },
      { image: base + 'resources_blog_4_11.jpeg', alt: 'rw-2', tag: 'Restaurant Websites', title: 'How to Create a Restaurant Website That Grows Your Online Orders', read: '15 min read', date: 'February 26, 2024' },
      { image: base + 'resources_blog_4_12.jpeg', alt: 'rw-3', tag: 'Restaurant Websites', title: 'The 12 Best Restaurant Websites That Drive Results', read: '15 min read', date: 'February 26, 2024' },
    ]
  },
  {
    heading: 'Industry Trends & Data',
    desc: "Get up to speed on what's happening in the restaurant industry.",
    items: [
      { image: base + 'resources_blog_4_13.jpeg', alt: 'it-1', tag: 'Industry Trends & Data', title: '39 Food Delivery Statistics Restaurateurs Can Learn From in 2024', read: '11 min read', date: 'April 25, 2024' },
      { image: base + 'resources_blog_4_14.jpeg', alt: 'it-2', tag: 'Industry Trends & Data', title: 'Average Restaurant Profit Margin (Calculator + How To Grow Yours)', read: '8 min read', date: 'April 26, 2024' },
      { image: base + 'resources_blog_4_15.jpg', alt: 'it-3', tag: 'Industry Trends & Data', title: 'The Top 6 Changes Impacting the Restaurant Industry in 2025', read: '8 min read', date: 'April 26, 2024' },
    ]
  },
])

const sections = computed<TopicSection[]>(() => {
  const overrides = (tm('resources.blog.topic_sections.sections') as any[]) || []
  const defaults = defaultSections.value
  return defaults.map((sec, i) => {
    const o = overrides[i] || {}
    const items = sec.items.map((item, j) => ({
      ...item,
      ...(o.items?.[j] || {}),
    })) as [SectionItem, SectionItem, SectionItem]
    return {
      heading: o.heading ?? sec.heading,
      desc: o.desc ?? sec.desc,
      items,
    }
  })
})
</script>