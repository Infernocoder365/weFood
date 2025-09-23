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
  title: t('product_loyalty.hero.title'),
  description: t('product_loyalty.hero.description'),
  primaryCtaText: t('actions.get_started'),
  primaryCtaHref: '/dashboard',
  secondaryCtaText: t('actions.view_pricing'),
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/loyalty/video_2.mp4',
  videoPoster: '/images/product/loyalty/video_2.jpg',
  overlayText: t('product_loyalty.hero.overlay_text')
}

const salesFeaturesProps = {
  title: t('product_loyalty.sales_features.title'),
  leftImageSrc: '/images/product/loyalty/product_loyalty_1.jpg',
  leftImageAlt: t('product_loyalty.sales_features.left_image_alt'),
  features: [
    { title: t('product_loyalty.sales_features.features.0.title'), description: t('product_loyalty.sales_features.features.0.desc') },
    { title: t('product_loyalty.sales_features.features.1.title'), description: t('product_loyalty.sales_features.features.1.desc') },
    { title: t('product_loyalty.sales_features.features.2.title'), description: t('product_loyalty.sales_features.features.2.desc') }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.5 17.0625H34.5V16.0625H33.5V17.0625ZM33.5 31.0625V32.0625H34.5V31.0625H33.5ZM15.5 31.0625H14.5V32.0625H15.5V31.0625ZM15.5 17.0625V16.0625H14.5V17.0625H15.5ZM24.5 25.0625L24.0528 25.9569L24.5 26.1805L24.9472 25.9569L24.5 25.0625ZM32.5 17.0625V31.0625H34.5V17.0625H32.5ZM33.5 30.0625H15.5V32.0625H33.5V30.0625ZM16.5 31.0625V17.0625H14.5V31.0625H16.5ZM15.5 18.0625H33.5V16.0625H15.5V18.0625ZM24.9472 24.1681L16.2354 19.8122L15.341 21.601L24.0528 25.9569L24.9472 24.1681ZM32.7646 19.8122L24.0528 24.1681L24.9472 25.9569L33.6591 21.601L32.7646 19.8122Z" fill="currentColor"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 32.0625L13.5025 31.9922L13.427 33.0625H14.5V32.0625ZM26.5 32.0625V33.0625H27.573L27.4975 31.9922L26.5 32.0625ZM34.6457 31.0625V32.0625H35.7187L35.6432 30.9922L34.6457 31.0625ZM22.5 19.0625C22.5 20.1671 21.6046 21.0625 20.5 21.0625V23.0625C22.7091 23.0625 24.5 21.2716 24.5 19.0625H22.5ZM20.5 21.0625C19.3954 21.0625 18.5 20.1671 18.5 19.0625H16.5C16.5 21.2716 18.2909 23.0625 20.5 23.0625V21.0625ZM18.5 19.0625C18.5 17.9579 19.3954 17.0625 20.5 17.0625V15.0625C18.2909 15.0625 16.5 16.8534 16.5 19.0625H18.5ZM20.5 17.0625C21.6046 17.0625 22.5 17.9579 22.5 19.0625H24.5C24.5 16.8534 22.7091 15.0625 20.5 15.0625V17.0625ZM31 19.5625C31 20.3909 30.3284 21.0625 29.5 21.0625V23.0625C31.433 23.0625 33 21.4955 33 19.5625H31ZM29.5 21.0625C28.6716 21.0625 28 20.3909 28 19.5625H26C26 21.4955 27.567 23.0625 29.5 23.0625V21.0625ZM28 19.5625C28 18.7341 28.6716 18.0625 29.5 18.0625V16.0625C27.567 16.0625 26 17.6295 26 19.5625H28ZM29.5 18.0625C30.3284 18.0625 31 18.7341 31 19.5625H33C33 17.6295 31.433 16.0625 29.5 16.0625V18.0625ZM14.5 33.0625H26.5V31.0625H14.5V33.0625ZM15.4975 32.1328C15.7979 27.8723 18.2996 26.0625 20.5 26.0625C22.7004 26.0625 25.2021 27.8723 25.5025 32.1328L27.4975 31.9922C27.1399 26.9193 23.9707 24.0625 20.5 24.0625C17.0293 24.0625 13.8601 26.9193 13.5025 31.9922L15.4975 32.1328ZM27.9456 26.4323C29.0717 25.8719 30.3861 25.9465 31.4682 26.6691C32.5432 27.3868 33.485 28.8176 33.6482 31.1328L35.6432 30.9922C35.4452 28.1825 34.2623 26.1299 32.5788 25.0058C30.9026 23.8866 28.8248 23.7609 27.0546 24.6417L27.9456 26.4323ZM29.5001 32.0625H34.6457V30.0625H29.5001V32.0625Z" fill="currentColor"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 18.0625L29 15.0625L33.5 19.5625L30.5 22.5625M26 18.0625L15.5 28.5625V33.0625H20L30.5 22.5625M26 18.0625L30.5 22.5625" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>`
  ]
}

const provenDesignProps = {
  title: t('product_loyalty.proven_design.title'),
  cards: [
    {
      src: '/images/product/loyalty/product_loyalty_2_1.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: t('product_loyalty.proven_design.cards.0.alt'),
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: t('product_loyalty.proven_design.cards.0.label'),
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: t('product_loyalty.proven_design.cards.0.heading')
    },
    {
      src: '/images/product/loyalty/product_loyalty_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-right-bottom',
      alt: t('product_loyalty.proven_design.cards.1.alt'),
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: t('product_loyalty.proven_design.cards.1.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_loyalty.proven_design.cards.1.heading')
    },
    {
      src: '/images/product/loyalty/product_loyalty_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: t('product_loyalty.proven_design.cards.2.alt'),
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: t('product_loyalty.proven_design.cards.2.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_loyalty.proven_design.cards.2.heading')
    }
  ]
}

const faqsProps = {
  title: t('product_loyalty.faqs.title'),
  faqs: [
    { question: t('product_loyalty.faqs.items.0.question'), answer: t('product_loyalty.faqs.items.0.answer_html') },
    { question: t('product_loyalty.faqs.items.1.question'), answer: t('product_loyalty.faqs.items.1.answer_html') },
    { question: t('product_loyalty.faqs.items.2.question'), answer: t('product_loyalty.faqs.items.2.answer_html') }
  ],
  sideCard: {
    imageSrc: '/images/product/loyalty/faq_manager_8.jpg',
    imageAlt: t('product_loyalty.faqs.side_card.image_alt'),
    quote: t('product_loyalty.faqs.side_card.quote'),
    name: t('product_loyalty.faqs.side_card.name'),
    role: t('product_loyalty.faqs.side_card.role')
  }
}

const testimonialProps = {
  imageSrc: '/images/product/loyalty/in_how_1.jpg',
  imageAlt: t('product_loyalty.testimonial.image_alt'),
  headline: t('product_loyalty.testimonial.headline'),
  metrics: [
    { value: '+$150,000', label: t('product_loyalty.testimonial.metrics.online_sales') },
    { value: '+377%', label: t('product_loyalty.testimonial.metrics.growth') }
  ]
}

const guidesProps = {
  sectionTitle: t('product_loyalty.guides.section_title'),
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/loyalty/new_video_2.mp4',
  mainVideoTitle: t('product_loyalty.guides.main_video_title'),
  sideImageSrc: '/images/product/loyalty/product_loyalty_3_2.jpg',
  sideImageAlt: t('product_loyalty.guides.side_image_alt'),
  sideImageTitle: t('product_loyalty.guides.side_image_title')
}

const orderingCtaProps = {
  title: t('product_loyalty.ordering_cta.title'),
  imageSrc: '/images/product/loyalty/product_loyalty_4_1.jpg',
  linkTo: '/product/branded',
  cardTitle: t('product_loyalty.ordering_cta.card_title'),
  cardDescription: t('product_loyalty.ordering_cta.card_desc')
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