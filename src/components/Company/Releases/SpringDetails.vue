<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'
import { useI18n } from 'vue-i18n'

const year = 2024
const season = 'Spring'
const { t } = useI18n()

const sections = [
  {
    imageSrc: '/images/company/story/company_releases_2_1.png',
    imageAlt: 'Automatic emails',
    items: [
      { title: t('company.releases.details.2024.spring.sections.0.items.0.title'), text: t('company.releases.details.2024.spring.sections.0.items.0.text') },
      { title: t('company.releases.details.2024.spring.sections.0.items.1.title'), text: t('company.releases.details.2024.spring.sections.0.items.1.text') }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_2_2.png',
    imageAlt: 'SMS campaigns',
    items: [
      { title: t('company.releases.details.2024.spring.sections.1.items.0.title'), text: t('company.releases.details.2024.spring.sections.1.items.0.text') },
      { title: t('company.releases.details.2024.spring.sections.1.items.1.title'), text: t('company.releases.details.2024.spring.sections.1.items.1.text') }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_2_3.png',
    imageAlt: 'Website upgrades',
    items: [
      { title: t('company.releases.details.2024.spring.sections.2.items.0.title'), text: t('company.releases.details.2024.spring.sections.2.items.0.text') },
      { title: t('company.releases.details.2024.spring.sections.2.items.1.title'), text: t('company.releases.details.2024.spring.sections.2.items.1.text') }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>