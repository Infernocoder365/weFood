<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StoryReleaseSection from './StoryReleaseSection.vue'

const { t } = useI18n()

const year = 2024
const season = t('company.seasons.spring')
const videoSrc = '/images/company/story/company_story_v3.mp4'
const intro = t('company.releases.heroes.2024.spring.intro')
</script>

<template>
  <StoryReleaseSection variant="hero" :year="year" :season="season" :video-src="videoSrc" :intro="intro" />
</template>