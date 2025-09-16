<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Summer'
const videoSrc = '/images/company/story/new_video_1.mp4'
const intro = `See how we drive traffic with AI SEO pages. We've also improved your dashboard so you can see how your online store is growing. You'll also get a preview of how we're making checkout easier for your guests.`
</script>

<template>
  <StoryReleaseSection variant="hero" :year="year" :season="season" :video-src="videoSrc" :intro="intro" />
</template>