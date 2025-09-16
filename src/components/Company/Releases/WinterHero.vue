<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Winter'
const videoSrc = '/images/company/story/new_video_2.mp4'
const intro = `Learn how WeFood's custom branded mobile apps, updated website builder, and fully customizable email marketing system can help your restaurant drive more online sales.`
</script>

<template>
  <StoryReleaseSection variant="hero" :year="year" :season="season" :video-src="videoSrc" :intro="intro" />
</template>