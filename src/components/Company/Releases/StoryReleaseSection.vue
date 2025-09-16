<script setup lang="ts">

type ReleaseItem = {
  title: string
  text: string
}

type ReleaseSection = {
  imageSrc?: string
  imageAlt?: string
  items: ReleaseItem[]
}

const props = withDefaults(defineProps<{
  variant?: 'hero' | 'details'
  year: string | number
  season: string
  videoSrc?: string
  intro?: string
  sections?: ReleaseSection[]
}>(), {
  variant: 'details'
})
</script>

<template>
  <!-- Hero variant -->
  <section v-if="props.variant === 'hero'" class="pt-24 pb-16 lg:pt-40 lg:pb-32 px-[5%] bg-default text-default">
    <div class="w-full max-w-wrap mx-auto">
      <div class="text-lg font-medium leading-none flex items-center justify-center">
        <div class="px-2 py-1 mr-3 border-2 border-black rounded-lg flex items-center"><span>{{ props.year }}</span></div>
        <span>{{ props.season }} Release</span>
      </div>
      <div class="mt-8 lg:mt-12" v-if="props.videoSrc">
        <div class="w-full rounded-[20px] lg:rounded-[40px] overflow-hidden" style="height: 641px;">
          <video :src="props.videoSrc" controls class="w-full h-auto"></video>
        </div>
      </div>
      <div class="w-[560px] max-w-full mx-auto mt-8 lg:mt-12" v-if="props.intro">
        <p class="text-gray-deep text-center">
          {{ props.intro }}
        </p>
      </div>
    </div>
  </section>

  <!-- Details variant -->
  <section v-else class="pt-12 pb-14 lg:py-20 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="grid grid-cols-6 gap-8 lg:gap-12">
        <dt class="col-span-6 md:col-span-2">
          <div class="text-lg opacity-50 font-medium leading-none flex items-center">
            <div class="px-2 py-1 mr-3 border-2 border-black rounded-lg flex items-center"><span>{{ props.year }}</span></div>
            <span>{{ props.season }} Release</span>
          </div>
        </dt>
        <dd class="col-span-6 md:col-span-4 lg:col-span-3">
          <article class="story_article">
            <template v-if="props.sections && props.sections.length > 1">
              <ul class="grid grid-cols-1 gap-20 lg:gap-32">
                <li v-for="(section, idx) in props.sections" :key="idx" class="col-span-1">
                  <div>
                    <div v-if="section.imageSrc" class="w-full rounded-xl overflow-hidden mb-4">
                      <img class="w-full h-auto" :src="section.imageSrc" :alt="section.imageAlt || ''" />
                    </div>
                    <template v-for="(it, i) in section.items" :key="i">
                      <h5 class="mb-4">{{ it.title }}</h5>
                      <p class="mb-6 text-gray-deep">{{ it.text }}</p>
                    </template>
                  </div>
                </li>
              </ul>
            </template>
            <template v-else-if="props.sections && props.sections.length === 1">
              <div>
                <template v-if="props.sections[0].imageSrc">
                  <div class="w-full rounded-xl overflow-hidden mb-4">
                    <img class="w-full h-auto" :src="props.sections[0].imageSrc" :alt="props.sections[0].imageAlt || ''" />
                  </div>
                </template>
                <template v-for="(it, i) in props.sections[0].items" :key="i">
                  <h5 class="mb-4">{{ it.title }}</h5>
                  <p class="mb-6 text-gray-deep">{{ it.text }}</p>
                </template>
              </div>
            </template>
          </article>
        </dd>
      </dl>
    </div>
  </section>
</template>