<template>
  <section class="px-2 pb-2">
    <div class="w-full max-w-wrap mx-auto">
      <section class="pt-12 lg:pt-20 px-[5%] bg-gray-light rounded-[48px]">
        <h3 class="text-[36px] lg:text-[44px] text-center font-medium leading-tight">{{ heading }}</h3>
        <div class="w-[90%] max-w-[800px] mx-auto pt-6 lg:pt-14">
          <ul class="flex flex-wrap gap-2.5 justify-center">
            <li v-for="(topic, idx) in topics" :key="idx" class="w-full sm:w-auto">
              <div class="w-full h-full py-6 pl-6 pr-8 bg-default text-default rounded-2xl flex items-center gap-2">
                <img :src="topic.icon" class="w-6 h-6 shrink-0" :alt="topic.alt" />
                <div class="flex-1 overflow-hidden">
                  <p class="text-base font-medium">{{ topic.label }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Topic { icon: string; alt: string; label: string }

const { t, tm } = useI18n()

const tr = (key: string, fallback: string) => {
  const val = t(key)
  return val === key ? fallback : val
}

const heading = computed(() => tr('resources.blog.explore.heading', 'Explore topics'))

const base = '/images/resources/blog/'
const defaultTopics: Topic[] = [
  { icon: base + 'resources_blog_5_1.svg', alt: 'topic1', label: 'Increase Online Sales' },
  { icon: base + 'resources_blog_5_2.svg', alt: 'topic2', label: 'Restaurant Software' },
  { icon: base + 'resources_blog_5_3.svg', alt: 'topic3', label: 'Marketing Strategy' },
  { icon: base + 'resources_blog_5_4.svg', alt: 'topic4', label: 'Restaurant Websites' },
  { icon: base + 'resources_blog_5_5.svg', alt: 'topic5', label: 'Industry Trends & Data' },
]

const topics = computed<Topic[]>(() => {
  const overrides = (tm('resources.blog.explore.topics') as any[]) || []
  return defaultTopics.map((d, i) => ({
    ...d,
    label: overrides[i]?.label ?? d.label,
    alt: overrides[i]?.alt ?? d.alt,
  }))
})
</script>