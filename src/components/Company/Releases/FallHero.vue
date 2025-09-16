<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Fall'
const videoSrc = '/images/company/story/new_video_2.mp4'
const intro = `In our fall update, we launched a free AI tool that lets you spy on competitors & find errors costing you sales, a new lightning-fast checkout system that increases conversions by 25%, and an AI product to scan a restaurant’s online presence.`
</script>

<template>
  <StoryReleaseSection variant="hero" :year="year" :season="season" :video-src="videoSrc" :intro="intro" />
</template>