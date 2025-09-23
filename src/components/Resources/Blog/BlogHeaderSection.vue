<template>
  <section class="pt-32 pb-16 lg:pt-44 px-[5%] bg-default text-default">
    <div class="w-full max-w-wrap mx-auto">
      <h3 class="mb-4 text-[42px] lg:text-[56px] font-medium leading-none">
        {{ title }}
      </h3>
      <p class="text-lg text-gray-deep">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Helper to simplify translation with fallback
const tr = (key: string, fallback: string) => {
  const val = t(key)
  return val === key ? fallback : val
}

const title = computed(() => tr('resources.blog.header.title', 'The Marketing Menu'))
const subtitle = computed(() => tr('resources.blog.header.subtitle', 'The Marketing Menu'))
</script>