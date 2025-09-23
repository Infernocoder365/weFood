<script setup lang="ts">
import ProductHero from '@/components/Product/ProductHero.vue'
import ProductSalesFeatures from '@/components/Product/ProductSalesFeatures.vue'
import ProductProvenDesign from '@/components/Product/ProductProvenDesign.vue'
import ProductFAQs from '@/components/Product/ProductFAQs.vue'
import ProductTestimonial from '@/components/Product/ProductTestimonial.vue'
import ProductGuides from '@/components/Product/ProductGuides.vue'
import ProductOrderingCTA from '@/components/Product/ProductOrderingCTA.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const heroProps = {
  title: t('product_branded.hero.title'),
  description: t('product_branded.hero.description'),
  primaryCtaText: t('actions.get_started'),
  primaryCtaHref: '/dashboard',
  secondaryCtaText: t('actions.view_pricing'),
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/branded/video_3.mp4',
  videoPoster: '/images/product/branded/video_3.jpg',
  overlayText: t('product_branded.hero.overlay_text')
}

const salesFeaturesProps = {
  title: t('product_branded.sales_features.title'),
  leftImageSrc: '/images/product/branded/product_branded_1.jpg',
  leftImageAlt: t('product_branded.sales_features.left_image_alt'),
  features: [
    { title: t('product_branded.sales_features.features.0.title'), description: t('product_branded.sales_features.features.0.desc') },
    { title: t('product_branded.sales_features.features.1.title'), description: t('product_branded.sales_features.features.1.desc') },
    { title: t('product_branded.sales_features.features.2.title'), description: t('product_branded.sales_features.features.2.desc') }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 24.0625C16.5 28.4808 20.0817 32.0625 24.5 32.0625C27.0264 32.0625 29.3304 30.8914 30.8115 29.0625M32.5 24.0625C32.5 19.6442 28.9183 16.0625 24.5 16.0625C21.9736 16.0625 19.6696 17.2336 18.1885 19.0625M17.5 16.0625V20.0625H21.5M31.5118 32.0625V28.0625H27.5118" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9998 20.0625L19.9998 22.0625L21.9998 24.0625M25.207 31.8554L34.2927 22.7696C34.6833 22.3791 34.6833 21.7459 34.2927 21.3554L29.2927 16.3554C29.1052 16.1679 28.8509 16.0625 28.5856 16.0625H20.4141C20.1488 16.0625 19.8945 16.1679 19.707 16.3554L14.707 21.3554C14.3164 21.7459 14.3164 22.3791 14.707 22.7696L23.7927 31.8554C24.1833 32.2459 24.8164 32.2459 25.207 31.8554Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 23.0625L29.5 21.0625L24.5 26.0625L22 23.5625L17 28.5625M16.5 16.0625V32.0625H32.5" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path></svg>`
  ]
}

const provenDesignProps = {
  title: t('product_branded.proven_design.title'),
  cards: [
    {
      src: '/images/product/branded/product_branded_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: t('product_branded.proven_design.cards.0.alt'),
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: t('product_branded.proven_design.cards.0.label'),
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: t('product_branded.proven_design.cards.0.heading')
    },
    {
      src: '/images/product/branded/product_branded_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-bottom',
      alt: t('product_branded.proven_design.cards.1.alt'),
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: t('product_branded.proven_design.cards.1.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_branded.proven_design.cards.1.heading')
    },
    {
      src: '/images/product/branded/product_branded_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: t('product_branded.proven_design.cards.2.alt'),
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: t('product_branded.proven_design.cards.2.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_branded.proven_design.cards.2.heading')
    }
  ]
}

const faqsProps = {
  title: t('product_branded.faqs.title'),
  faqs: [
    { question: t('product_branded.faqs.items.0.question'), answer: t('product_branded.faqs.items.0.answer_html') },
    { question: t('product_branded.faqs.items.1.question'), answer: t('product_branded.faqs.items.1.answer_html') },
    { question: t('product_branded.faqs.items.2.question'), answer: t('product_branded.faqs.items.2.answer_html') }
  ],
  sideCard: {
    imageSrc: '/images/product/branded/faq_manager_6.jpg',
    imageAlt: t('product_branded.faqs.side_card.image_alt'),
    quote: t('product_branded.faqs.side_card.quote'),
    name: t('product_branded.faqs.side_card.name'),
    role: t('product_branded.faqs.side_card.role')
  }
}

const testimonialProps = {
  imageSrc: '/images/product/branded/in_how_1.jpg',
  imageAlt: t('product_branded.testimonial.image_alt'),
  headline: t('product_branded.testimonial.headline'),
  metrics: [
    { value: '+$150,000', label: t('product_branded.testimonial.metrics.online_sales') },
    { value: '+377%', label: t('product_branded.testimonial.metrics.growth') }
  ]
}

const guidesProps = {
  sectionTitle: t('product_branded.guides.section_title'),
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/branded/new_video_2.mp4',
  mainVideoTitle: t('product_branded.guides.main_video_title'),
  sideImageSrc: '/images/product/branded/product_branded_3_2.jpg',
  sideImageAlt: t('product_branded.guides.side_image_alt'),
  sideImageTitle: t('product_branded.guides.side_image_title')
}

const orderingCtaProps = {
  title: t('product_branded.ordering_cta.title'),
  imageSrc: '/images/product/branded/product_branded_4_1.jpg',
  linkTo: '/product/loyalty',
  cardTitle: t('product_branded.ordering_cta.card_title'),
  cardDescription: t('product_branded.ordering_cta.card_desc')
}
</script>

<template>
  <main>
    <ProductHero v-bind="heroProps" />
    <ProductSalesFeatures v-bind="salesFeaturesProps" />
    <ProductProvenDesign v-bind="provenDesignProps" />
    <ProductFAQs v-bind="faqsProps" />
    <ProductTestimonial v-bind="testimonialProps" />
    <ProductGuides v-bind="guidesProps" />
    <ProductOrderingCTA v-bind="orderingCtaProps" />
  </main>
</template>