<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Summer'

const sections = [
  {
    imageSrc: '/images/company/story/company_releases_1_1.jpg',
    imageAlt: 'AI SEO pages',
    items: [
      { title: 'Get more traffic with (more) AI SEO pages', text: `We've used AI to automatically create new location pages to boost your Google traffic. We make pages for every nearby city or town you deliver to. This helps you appear at the top when locals search for your cuisine.` },
      { title: 'Drive more orders from your delivery area', text: `Your restaurant website now shows up at the top of Google for all areas you deliver to. This brings in new customers and more online orders.` }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_1_2.jpg',
    imageAlt: 'Dashboard upgrades',
    items: [
      { title: 'See where your sales are coming from', text: `We've upgraded your dashboard to make it easier to see how many sales you're getting from SEO, from email, and from your mobile app.` },
      { title: 'Menu updates are easier', text: `Customers asked us to simplify how they manage their menu on the WeFood platform. We've updated the dashboard based on your feedback, and it's now much easier to make updates, even when you're on your phone.` }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_1_3.jpg',
    imageAlt: 'Faster checkout',
    items: [
      { title: 'Grow sales with a faster guest checkout experience', text: 'We tested moving Apple Pay to the top of guest checkout, and our early tests have shown a 6% increase in sales and faster checkout times.' },
      { title: 'Increase guest satisfaction with simplified tipping', text: `We've streamlined how your guests add tips to their order. We also improved on-time food delivery for your guests.` }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>