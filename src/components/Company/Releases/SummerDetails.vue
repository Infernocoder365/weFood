<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'
import { useI18n } from 'vue-i18n'

const year = 2024
const season = 'Summer'
const { t } = useI18n()

const sections = [
  {
    imageSrc: '/images/company/story/company_releases_1_1.jpg',
    imageAlt: 'AI SEO pages',
    items: [
      { title: t('company.releases.details.2024.summer.sections.0.items.0.title'), text: t('company.releases.details.2024.summer.sections.0.items.0.text') },
      { title: t('company.releases.details.2024.summer.sections.0.items.1.title'), text: t('company.releases.details.2024.summer.sections.0.items.1.text') }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_1_2.jpg',
    imageAlt: 'Dashboard upgrades',
    items: [
      { title: t('company.releases.details.2024.summer.sections.1.items.0.title'), text: t('company.releases.details.2024.summer.sections.1.items.0.text') },
      { title: t('company.releases.details.2024.summer.sections.1.items.1.title'), text: t('company.releases.details.2024.summer.sections.1.items.1.text') }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_1_3.jpg',
    imageAlt: 'Faster checkout',
    items: [
      { title: t('company.releases.details.2024.summer.sections.2.items.0.title'), text: t('company.releases.details.2024.summer.sections.2.items.0.text') },
      { title: t('company.releases.details.2024.summer.sections.2.items.1.title'), text: t('company.releases.details.2024.summer.sections.2.items.1.text') }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>