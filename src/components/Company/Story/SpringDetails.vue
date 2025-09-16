<script setup lang="ts">
import StoryReleaseSection from './StoryReleaseSection.vue'

const year = 2024
const season = 'Spring'

const sections = [
  {
    imageSrc: '/images/company/story/company_releases_2_1.png',
    imageAlt: 'Automatic emails',
    items: [
      { title: 'Get more reorders with new automatic emails', text: 'Drive more reorders for every holiday period throughout the year — without spending time on email blasts. WeFood.com automates email promotions to your customers, using proven templates that drive online orders.' },
      { title: 'Preview the campaigns before they go live', text: `All of the email campaigns are in your dashboard, so you can see them any time. We'll also send you an email and text as the holiday comes up, so you can see it before it goes out.` }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_2_2.png',
    imageAlt: 'SMS campaigns',
    items: [
      { title: 'Reach more customers with SMS campaigns', text: 'Use WeFood to send text message blasts to your customers. Many of your customers opt-in to receive text messages from you to receive order updates, so it’s a great way to stay top of mind.' },
      { title: 'Promote your latest updates, specials, and more', text: 'Texts are the perfect way to create a surge in sales, with data showing that they have a 95% open rate. Use them to send customers your latest updates, specials, and exclusive discounts.' }
    ]
  },
  {
    imageSrc: '/images/company/story/company_releases_2_3.png',
    imageAlt: 'Website upgrades',
    items: [
      { title: 'Give your customers a premium online experience', text: 'Our design team upgraded the look and feel of restaurant websites that use WeFood.com. Inspired by Apple, we refreshed your website and online ordering experience.' },
      { title: 'Convert more website visitors to customers', text: 'Your new website experience feels better, while converting 2-4X better than the average restaurant website.' }
    ]
  }
]
</script>

<template>
  <StoryReleaseSection variant="details" :year="year" :season="season" :sections="sections" />
</template>