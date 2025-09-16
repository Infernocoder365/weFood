<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Winter'

const sections = [
  {
    items: [
      { title: 'Create your own mobile app for your restaurant', text: 'Creating a mobile app for your customers can help increase reorders by 85%+. Make the online ordering experience seamless with saved favorites and recorded payment information.' },
      { title: 'Offer a loyalty program just like national chains', text: 'Run a loyalty program your regulars will love. Offer them a no-brainer sign-up offer, keep them engaged with valuable loyalty points and grow your profits by generating consistent orders.' },
      { title: 'Customize all your email marketing campaigns', text: 'You’ll still have access to our suite of proven email marketing templates, but now you can supercharge them with full creative control of your email marketing campaigns (changing the copy, images, sequence, and more).' }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>