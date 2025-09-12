<template>
  <section class="generic">
    <div class="container">
      <h1>{{ title }}</h1>
      <p>This page is coming soon. Use the header or footer to navigate back.</p>
      <RouterLink to="/" class="back">Go to Home</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const title = computed(() =>
  (route.name as string)?.toString().replace(/[-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Page'
)
</script>

<style scoped>
.generic {
  padding: 80px 16px;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}
h1 { font-size: 32px; margin-bottom: 12px; }
p { color: #4b5563; margin-bottom: 24px; }
.back { color: #0ea5e9; text-decoration: underline; }
</style>