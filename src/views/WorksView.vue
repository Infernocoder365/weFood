<script setup lang="ts">
import WorksHero from '@/components/Works/WorksHero.vue'
import WorksSteps from '@/components/Works/WorksSteps.vue'
import WorksFaq from '@/components/Works/WorksFaq.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const worksFaqProps = {
  title: t('works.faqs.title'),
  faqs: [
    { question: t('works.faqs.items.0.question'), answer: t('works.faqs.items.0.answer_html') },
    { question: t('works.faqs.items.1.question'), answer: t('works.faqs.items.1.answer_html') },
    { question: t('works.faqs.items.2.question'), answer: t('works.faqs.items.2.answer_html') },
    { question: t('works.faqs.items.3.question'), answer: t('works.faqs.items.3.answer_html') },
    { question: t('works.faqs.items.4.question'), answer: t('works.faqs.items.4.answer_html') }
  ],
  sideCard: {
    imageSrc: '/images/works/faq_manager_2.jpg',
    imageAlt: t('works.faqs.side_card.image_alt'),
    quote: t('works.faqs.side_card.quote'),
    name: t('works.faqs.side_card.name'),
    role: t('works.faqs.side_card.role')
  }
}
</script>

<template>
  <div>
    <WorksHero />
    <WorksSteps />
    <WorksFaq v-bind="worksFaqProps" />
  </div>
</template>

<style scoped>
</style>