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
  title: t('product_website.hero.title'),
  description: t('product_website.hero.description'),
  primaryCtaText: t('actions.get_started'),
  primaryCtaHref: '/dashboard',
  secondaryCtaText: t('actions.view_pricing'),
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/product/video_1.mp4',
  videoPoster: '/images/product/product/video_1.jpg',
  overlayText: t('product_website.hero.overlay_text')
}

const salesFeaturesProps = {
  title: t("product_website.sales_features.title"),
  leftImageSrc: '/images/product/product/product_pro_1.jpg',
  leftImageAlt: t('product_website.sales_features.left_image_alt'),
  features: [
    {
      title: t('product_website.sales_features.features.0.title'),
      description: t('product_website.sales_features.features.0.desc')
    },
    {
      title: t('product_website.sales_features.features.1.title'),
      description: t('product_website.sales_features.features.1.desc')
    },
    {
      title: t('product_website.sales_features.features.2.title'),
      description: t('product_website.sales_features.features.2.desc')
    }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 25.5L23.5 27.25L27 22.25M21.5 17.5L24.5 14.5L27.5 17.5H31.5V21.5L34.5 24.5L31.5 27.5V31.5H27.5L24.5 34.5L21.5 31.5H17.5V27.5L14.5 24.5L17.5 21.5V17.5H21.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
    </svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.5 20.5L20.5 28.5M33.5 24.5C33.5 29.4706 29.4706 33.5 24.5 33.5C19.5294 33.5 15.5 29.4706 15.5 24.5C15.5 19.5294 19.5294 15.5 24.5 15.5C29.4706 15.5 33.5 19.5294 33.5 24.5Z" stroke="currentColor" stroke-linejoin="round"></path>
      <path d="M21.5 22.375C21.9832 22.375 22.375 21.9832 22.375 21.5C22.375 21.0168 21.9832 20.625 21.5 20.625C21.0168 20.625 20.625 21.0168 20.625 21.5C20.625 21.9832 21.0168 22.375 21.5 22.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.75"></path>
      <path d="M27.5 28.375C27.9832 28.375 28.375 27.9832 28.375 27.5C28.375 27.0168 27.9832 26.625 27.5 26.625C27.0168 26.625 26.625 27.0168 26.625 27.5C26.625 27.9832 27.0168 28.375 27.5 28.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.75"></path>
    </svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 22.5L24.75 28M32 28.5H17M33.5 24.5C33.5 19.5294 29.4706 15.5 24.5 15.5C19.5294 15.5 15.5 19.5294 15.5 24.5C15.5 29.4706 19.5294 33.5 24.5 33.5C29.4706 33.5 33.5 29.4706 33.5 24.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path>
    </svg>`
  ]
}

const provenDesignProps = {
  title: t('product_website.proven_design.title'),
  cards: [
    {
      src: '/images/product/product/product_pro_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: t('product_website.proven_design.cards.0.alt'),
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: t('product_website.proven_design.cards.0.label'),
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: t('product_website.proven_design.cards.0.heading')
    },
    {
      src: '/images/product/product/product_pro_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-right-bottom',
      alt: t('product_website.proven_design.cards.1.alt'),
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: t('product_website.proven_design.cards.1.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_website.proven_design.cards.1.heading')
    },
    {
      src: '/images/product/product/product_pro_2_3.png',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: t('product_website.proven_design.cards.2.alt'),
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: t('product_website.proven_design.cards.2.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_website.proven_design.cards.2.heading')
    }
  ]
}

const faqsProps = {
  title: t('product_website.faqs.title'),
  faqs: [
    {
      question: t('product_website.faqs.items.0.question'),
      answer: t('product_website.faqs.items.0.answer_html')
    },
    {
      question: t('product_website.faqs.items.1.question'),
      answer: t('product_website.faqs.items.1.answer_html')
    },
    {
      question: t('product_website.faqs.items.2.question'),
      answer: t('product_website.faqs.items.2.answer_html')
    }
  ],
  sideCard: {
    imageSrc: '/images/product/product/faq_manager_3.jpg',
    imageAlt: t('product_website.faqs.side_card.image_alt'),
    quote: t('product_website.faqs.side_card.quote'),
    name: t('product_website.faqs.side_card.name'),
    role: t('product_website.faqs.side_card.role')
  }
}

const testimonialProps = {
  imageSrc: '/images/product/product/in_how_1.jpg',
  imageAlt: t('product_website.testimonial.image_alt'),
  headline: t('product_website.testimonial.headline'),
  metrics: [
    { value: '+$150,000', label: t('product_website.testimonial.metrics.online_sales') },
    { value: '+377%', label: t('product_website.testimonial.metrics.growth') }
  ]
}

const guidesProps = {
  sectionTitle: t("product_website.guides.section_title"),
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/product/new_video_2.mp4',
  mainVideoTitle: t('product_website.guides.main_video_title'),
  sideImageSrc: '/images/product/product/product_pro_3_2.jpg',
  sideImageAlt: t('product_website.guides.side_image_alt'),
  sideImageTitle: t('product_website.guides.side_image_title')
}

const orderingCtaProps = {
  title: t('product_website.ordering_cta.title'),
  imageSrc: '/images/product/product/product_pro_4_1.jpg',
  linkTo: '/product/ordering',
  cardTitle: t('product_website.ordering_cta.card_title'),
  cardDescription: t('product_website.ordering_cta.card_desc')
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