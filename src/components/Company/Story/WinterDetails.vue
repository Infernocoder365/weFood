<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'
import { useI18n } from 'vue-i18n'

const year = 2024
const season = 'Winter'
const { t } = useI18n()

const sections = [
  {
    items: [
      { title: t('company.story.details.2024.winter.sections.0.items.0.title'), text: t('company.story.details.2024.winter.sections.0.items.0.text') },
      { title: t('company.story.details.2024.winter.sections.0.items.1.title'), text: t('company.story.details.2024.winter.sections.0.items.1.text') },
      { title: t('company.story.details.2024.winter.sections.0.items.2.title'), text: t('company.story.details.2024.winter.sections.0.items.2.text') }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>