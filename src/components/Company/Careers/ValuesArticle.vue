<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="pt-12 pb-14 lg:py-20 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="grid grid-cols-6 gap-8 lg:gap-12">
        <dt class="col-span-6 md:col-span-2">
          <h3 class="text-[32px] font-medium">{{ t('careers.values.title') }}</h3>
        </dt>
        <dd class="col-span-6 md:col-span-4 lg:col-span-3">
          <article class="story_article prose max-w-none">
            <h5 class="mb-4">{{ t('careers.values.sections.obsess.title') }}</h5>
            <p class="mb-6 text-gray-deep">{{ t('careers.values.sections.obsess.desc') }}</p>
            <h5 class="mb-4">{{ t('careers.values.sections.energy.title') }}</h5>
            <p class="mb-6 text-gray-deep">{{ t('careers.values.sections.energy.desc') }}</p>
            <h5 class="mb-4">{{ t('careers.values.sections.speed.title') }}</h5>
            <p class="mb-6 text-gray-deep">{{ t('careers.values.sections.speed.desc') }}</p>
            <h5 class="mb-4">{{ t('careers.values.sections.owner.title') }}</h5>
            <p class="mb-6 text-gray-deep">{{ t('careers.values.sections.owner.desc') }}</p>
            <h5 class="mb-4">{{ t('careers.values.sections.scale.title') }}</h5>
            <p class="mb-6 text-gray-deep">{{ t('careers.values.sections.scale.desc') }}</p>
          </article>
        </dd>
      </dl>
    </div>
  </section>
</template>