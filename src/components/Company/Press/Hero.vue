<script setup lang="ts">
interface Props { title: string; subtitle?: string; bg?: string }
const props = withDefaults(defineProps<Props>(), { subtitle: '', bg: '/images/company/press/nav-company.jpg' })
</script>

<template>
  <section class="relative w-full overflow-hidden">
    <div class="w-full h-[220px] md:h-[300px] lg:h-[360px] bg-cover bg-center flex items-center justify-center" :style="{ backgroundImage: `url(${props.bg})` }">
      <div class="backdrop-brightness-90 bg-black/20 w-full h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">{{ props.title }}</h1>
          <p v-if="props.subtitle" class="text-white/90 mt-3 max-w-3xl mx-auto">{{ props.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>