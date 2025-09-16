<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Fall'

const sections = [
  {
    items: [
      { title: 'Spy on competitors for free', text: `With WeFood's website grader, uncover competitors’ strategies without signing up or paying. Enter your restaurant’s name, and our tool scans Google search rankings, reviews, and directories. Get tailored insights to help you outperform local competition.` },
      { title: 'Fix costly errors in your online presence', text: 'Beyond competitors, the grader identifies errors in your online profiles—missing keywords, incomplete details, or unoptimized content—so you can fix them and recover lost sales opportunities.' },
      { title: 'Maximize promotions with AI-powered testing', text: 'Our Smart Coupons system uses AI to test and optimize promotions. It finds the perfect discount level to boost sales while minimizing costs, saving you from unnecessary giveaways.' },
      { title: 'Reduce waste and protect profits', text: 'By running promotions smarter, you avoid overspending on discounts, keeping your net profits high even with rising food costs and inflation.' },
      { title: 'Boost sales with a faster checkout experience', text: 'Our lightning checkout system increases checkout speeds by over 25%. Guests love the convenience, leading to higher conversion rates and more repeat orders.' },
      { title: 'Encourage direct orders with accelerated checkout', text: 'With Apple Pay and Google Pay now at the top of checkout, your website becomes as fast and easy as WeFood or UberEats—bringing more orders directly to you.' }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>