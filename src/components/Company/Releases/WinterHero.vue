<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StoryReleaseSection from './StoryReleaseSection.vue'

const { t } = useI18n()

const year = 2024
const season = t('company.seasons.winter')
const videoSrc = '/images/company/story/new_video_2.mp4'
const intro = t('company.releases.heroes.2024.winter.intro')
</script>

<template>
  <StoryReleaseSection variant="hero" :year="year" :season="season" :video-src="videoSrc" :intro="intro" />
</template>