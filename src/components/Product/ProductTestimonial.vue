<script setup lang="ts">
const props = withDefaults(defineProps<{
  imageSrc: string
  imageAlt: string
  headline: string
  metrics: { value: string; label: string }[]
}>(), {
  imageSrc: '/images/product/product/in_how_1.jpg',
  imageAlt: 'Customer story',
  headline: "How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com",
  metrics: () => [
    { value: '+$150,000', label: 'Online sales' },
    { value: '+377%', label: 'Growth' }
  ]
})
</script>

<template>
  <section class="pt-16 pb-20 lg:pt-52 lg:pb-32 px-4 md:px-[5%]">
    <div class="w-full max-w-6xl mx-auto">
      <dl class="w-full bg-gray-50 rounded-[24px] lg:rounded-[32px] flex flex-wrap">
        <dt class="w-full md:w-2/5 md:max-w-[406px] shrink-0">
          <div class="w-full h-[320px] md:h-[474px]">
            <img :src="props.imageSrc" :alt="props.imageAlt"
                 class="w-full h-full object-cover rounded-[24px] lg:rounded-[32px]" />
          </div>
        </dt>
        <dd class="w-full md:flex-1 md:overflow-hidden  bg-white rounded-[32px]">
          <div class="w-full px-6 pt-8 pb-10 md:px-10">
            <div class="w-full">
              <h3 class="mb-6 text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-tight">
                <span>{{ props.headline }}</span>
              </h3>
            </div>
            <div class="w-full">
              <ul class="flex justify-between md:justify-start gap-6">
                <li v-for="(m,i) in props.metrics" :key="i" class="font-medium">
                  <p class="text-lg md:text-xl"><span>{{ m.value }}</span></p>
                  <p class="text-sm text-gray-500"><span>{{ m.label }}</span></p>
                </li>
              </ul>
            </div>
          </div>
        </dd>
      </dl>
      <div class="w-full pt-10 md:pt-20 flex justify-center">
        <em class="w-3 h-3 flex items-center justify-center"><i class="w-2 h-2 bg-gray-300 rounded-full"></i></em>
        <em class="w-3 h-3 flex items-center justify-center"><i class="w-2 h-2 bg-gray-300 rounded-full"></i></em>
        <em class="w-3 h-3 flex items-center justify-center"><i class="w-2 h-2 bg-gray-300 rounded-full"></i></em>
      </div>
    </div>
  </section>
</template>