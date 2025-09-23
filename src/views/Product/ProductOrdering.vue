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
  title: t('product_ordering.hero.title'),
  description: t('product_ordering.hero.description'),
  primaryCtaText: t('actions.get_started'),
  primaryCtaHref: '/dashboard',
  secondaryCtaText: t('actions.view_pricing'),
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/ordering/video_1.mp4',
  videoPoster: '/images/product/ordering/video_1.jpg',
  overlayText: t('product_ordering.hero.overlay_text')
}

const salesFeaturesProps = {
  title: t('product_ordering.sales_features.title'),
  leftImageSrc: '/images/product/ordering/product_ordering_1.jpg',
  leftImageAlt: t('product_ordering.sales_features.left_image_alt'),
  features: [
    { title: t('product_ordering.sales_features.features.0.title'), description: t('product_ordering.sales_features.features.0.desc') },
    { title: t('product_ordering.sales_features.features.1.title'), description: t('product_ordering.sales_features.features.1.desc') },
    { title: t('product_ordering.sales_features.features.2.title'), description: t('product_ordering.sales_features.features.2.desc') }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3040_24308)"><path d="M32.0657 21.0625H26C25.7239 21.0625 25.5 20.8386 25.5 20.5625V14.4639C25.5 13.9692 24.8584 13.7749 24.584 14.1865L16.5182 26.2851C16.2967 26.6174 16.5349 27.0625 16.9343 27.0625H23C23.2761 27.0625 23.5 27.2864 23.5 27.5625V33.6611C23.5 34.1558 24.1416 34.3501 24.416 33.9385L32.4818 21.8399C32.7033 21.5076 32.4651 21.0625 32.0657 21.0625Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></g></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 31.0625V16.0625C17.5 15.5102 17.9477 15.0625 18.5 15.0625H30.5C31.0523 15.0625 31.5 15.5102 31.5 16.0625V30.0625H18.5C17.9477 30.0625 17.5 30.5102 17.5 31.0625ZM17.5 31.0625V32.0625C17.5 32.6148 17.9477 33.0625 18.5 33.0625H31.5M25.25 20.8125C25.25 21.2267 24.9142 21.5625 24.5 21.5625C24.0858 21.5625 23.75 21.2267 23.75 20.8125M25.25 20.8125C25.25 20.3983 24.9142 20.0625 24.5 20.0625C24.0858 20.0625 23.75 20.3983 23.75 20.8125M25.25 20.8125H23.75M24.5 24.0625C22.9851 24.0625 22.6145 24.6982 22.5265 24.9559C22.5074 25.0119 22.5513 25.0625 22.6105 25.0625H26.3895C26.4487 25.0625 26.4926 25.0119 26.4735 24.9559C26.3855 24.6982 26.0149 24.0625 24.5 24.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 15.0625H17.5V32.6625L19.8333 31.0625L22.1667 33.0625L24.5 31.0625L26.8333 33.0625L29.1667 31.0625L31.5 32.6625V15.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path> <path d="M21.5 20.0625H21.51M21.75 20.0625C21.75 20.2006 21.6381 20.3125 21.5 20.3125C21.3619 20.3125 21.25 20.2006 21.25 20.0625C21.25 19.9244 21.3619 19.8125 21.5 19.8125C21.6381 19.8125 21.75 19.9244 21.75 20.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> <path d="M27.5 26.0625H27.51M27.75 26.0625C27.75 26.2006 27.6381 26.3125 27.5 26.3125C27.3619 26.3125 27.25 26.2006 27.25 26.0625C27.25 25.9244 27.3619 25.8125 27.5 25.8125C27.6381 25.8125 27.75 25.9244 27.75 26.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> <path d="M28.4571 20.5196L29.1642 19.8125L27.75 18.3983L27.0429 19.1054L28.4571 20.5196ZM27.0429 19.1054L20.5429 25.6054L21.9571 27.0196L28.4571 20.5196L27.0429 19.1054Z" fill="currentColor"></path></svg>`
  ]
}

const provenDesignProps = {
  title: t('product_ordering.proven_design.title'),
  cards: [
    {
      src: '/images/product/ordering/product_ordering_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: t('product_ordering.proven_design.cards.0.alt'),
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: t('product_ordering.proven_design.cards.0.label'),
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: t('product_ordering.proven_design.cards.0.heading')
    },
    {
      src: '/images/product/ordering/product_ordering_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-bottom',
      alt: t('product_ordering.proven_design.cards.1.alt'),
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: t('product_ordering.proven_design.cards.1.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_ordering.proven_design.cards.1.heading')
    },
    {
      src: '/images/product/ordering/product_ordering_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: t('product_ordering.proven_design.cards.2.alt'),
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: t('product_ordering.proven_design.cards.2.label'),
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: t('product_ordering.proven_design.cards.2.heading')
    }
  ]
}

const faqsProps = {
  title: t('product_ordering.faqs.title'),
  faqs: [
    { question: t('product_ordering.faqs.items.0.question'), answer: t('product_ordering.faqs.items.0.answer_html') },
    { question: t('product_ordering.faqs.items.1.question'), answer: t('product_ordering.faqs.items.1.answer_html') },
    { question: t('product_ordering.faqs.items.2.question'), answer: t('product_ordering.faqs.items.2.answer_html') }
  ],
  sideCard: {
    imageSrc: '/images/product/ordering/faq_manager_7.jpg',
    imageAlt: t('product_ordering.faqs.side_card.image_alt'),
    quote: t('product_ordering.faqs.side_card.quote'),
    name: t('product_ordering.faqs.side_card.name'),
    role: t('product_ordering.faqs.side_card.role')
  }
}

const testimonialProps = {
  imageSrc: '/images/product/ordering/in_how_1.jpg',
  imageAlt: t('product_ordering.testimonial.image_alt'),
  headline: t('product_ordering.testimonial.headline'),
  metrics: [
    { value: '+$150,000', label: t('product_ordering.testimonial.metrics.online_sales') },
    { value: '+377%', label: t('product_ordering.testimonial.metrics.growth') }
  ]
}

const guidesProps = {
  sectionTitle: t('product_ordering.guides.section_title'),
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/ordering/new_video_2.mp4',
  mainVideoTitle: t('product_ordering.guides.main_video_title'),
  sideImageSrc: '/images/product/ordering/product_ordering_3_2.jpg',
  sideImageAlt: t('product_ordering.guides.side_image_alt'),
  sideImageTitle: t('product_ordering.guides.side_image_title')
}

const orderingCtaProps = {
  title: t('product_ordering.ordering_cta.title'),
  imageSrc: '/images/product/ordering/product_ordering_4_1.jpg',
  linkTo: '/product/delivery',
  cardTitle: t('product_ordering.ordering_cta.card_title'),
  cardDescription: t('product_ordering.ordering_cta.card_desc')
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