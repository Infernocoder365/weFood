<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Spring'
const videoSrc = '/images/company/story/company_story_v3.mp4'
const intro = `Learn how our new automated holiday emails, SMS promotions, and website upgrades help your restaurants drive more online sales.`
</script>

<template>
  <StoryReleaseSection variant="hero" :year="year" :season="season" :video-src="videoSrc" :intro="intro" />
</template>