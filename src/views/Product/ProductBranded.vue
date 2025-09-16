<script setup lang="ts">
import ProductHero from '@/components/Product/ProductHero.vue'
import ProductSalesFeatures from '@/components/Product/ProductSalesFeatures.vue'
import ProductProvenDesign from '@/components/Product/ProductProvenDesign.vue'
import ProductFAQs from '@/components/Product/ProductFAQs.vue'
import ProductTestimonial from '@/components/Product/ProductTestimonial.vue'
import ProductGuides from '@/components/Product/ProductGuides.vue'
import ProductOrderingCTA from '@/components/Product/ProductOrderingCTA.vue'

const heroProps = {
  title: 'Imagine having your own mobile app.',
  description: 'With a mobile app, more customers order directly — instead of going to third parties.',
  primaryCtaText: 'Get Started',
  primaryCtaHref: '/dashboard',
  secondaryCtaText: 'View Pricing',
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/branded/video_3.mp4',
  videoPoster: '/images/product/branded/video_3.jpg',
  overlayText: 'See how Mo from Phnom Penh Noodle Shack gets more repeat orders with his mobile app'
}

const salesFeaturesProps = {
  title: 'Every restaurant today needs a mobile app',
  leftImageSrc: '/images/product/branded/product_branded_1.jpg',
  leftImageAlt: 'Branded app hero image',
  features: [
    { title: 'The fastest way for your regulars to order', description: 'Customers can re-order in a few taps. No distractions from other restaurants.' },
    { title: 'Your own 5-star mobile app', description: "We've helped restaurants earn thousands of 5-star reviews on Apple and Android." },
    { title: 'It drives repeat orders', description: 'Restaurants with apps get 85% more return customers.' }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 24.0625C16.5 28.4808 20.0817 32.0625 24.5 32.0625C27.0264 32.0625 29.3304 30.8914 30.8115 29.0625M32.5 24.0625C32.5 19.6442 28.9183 16.0625 24.5 16.0625C21.9736 16.0625 19.6696 17.2336 18.1885 19.0625M17.5 16.0625V20.0625H21.5M31.5118 32.0625V28.0625H27.5118" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9998 20.0625L19.9998 22.0625L21.9998 24.0625M25.207 31.8554L34.2927 22.7696C34.6833 22.3791 34.6833 21.7459 34.2927 21.3554L29.2927 16.3554C29.1052 16.1679 28.8509 16.0625 28.5856 16.0625H20.4141C20.1488 16.0625 19.8945 16.1679 19.707 16.3554L14.707 21.3554C14.3164 21.7459 14.3164 22.3791 14.707 22.7696L23.7927 31.8554C24.1833 32.2459 24.8164 32.2459 25.207 31.8554Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 23.0625L29.5 21.0625L24.5 26.0625L22 23.5625L17 28.5625M16.5 16.0625V32.0625H32.5" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path></svg>`
  ]
}

const provenDesignProps = {
  title: 'Increase sales with your own mobile app',
  cards: [
    {
      src: '/images/product/branded/product_branded_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: 'Fast ordering',
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: 'Fast ordering',
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: 'Regulars can reorder in seconds.'
    },
    {
      src: '/images/product/branded/product_branded_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-bottom',
      alt: '5-star ratings',
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Control delivery options',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: "Thousands of 5-star ratings on Apple and Android. It's your turn."
    },
    {
      src: '/images/product/branded/product_branded_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: 'Drive loyalty',
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: 'Drive loyalty',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Apps drive 85% more repeat orders.'
    }
  ]
}

const faqsProps = {
  title: 'FAQs',
  faqs: [
    { question: 'Do independent restaurants really need their own app?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Yes, it’s another way we help you drive sales.<br><br>Here’s the data from the thousands of restaurants we work with: 80% of your regulars want apps from their favorite restaurants. Roughly 1 in 2 of your regulars will download your app. People who install restaurant apps order 85% more frequently.</p></div></article>` },
    { question: 'Do you build me a custom app from scratch?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Your app, like your online ordering, is based on proven systems that drive sales.<br><br>You'll be able to personalize your app with your brand and customize your rewards program.<br><br>If you were to build an app from scratch, it would cost you at least 5 figures and take months. Using a tried-and-tested mobile app design is how we can launch you in weeks.</p></div></article>` },
    { question: 'How much does this cost?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Your branded mobile app comes included when you sign up. There is no additional charge to have a mobile app for your restaurant.</p></div></article>` }
  ],
  sideCard: {
    imageSrc: '/images/product/branded/faq_manager_6.jpg',
    imageAlt: 'Manager',
    quote: 'I didn’t think having our own app would work, but our regulars love it and use it constantly. We’ve more than doubled our direct online sales since starting with WeFood.',
    name: 'Timirie Shibley',
    role: 'WeFood of Doo-Dah Diner'
  }
}

const testimonialProps = {
  imageSrc: '/images/product/branded/in_how_1.jpg',
  imageAlt: 'Customer story',
  headline: 'How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com',
  metrics: [
    { value: '+$150,000', label: 'Online sales' },
    { value: '+377%', label: 'Growth' }
  ]
}

const guidesProps = {
  sectionTitle: 'Guides and best practices for your mobile app',
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/branded/new_video_2.mp4',
  mainVideoTitle: 'How To Get Your Own Mobile App For Your Restaurant in 7 Days',
  sideImageSrc: '/images/product/branded/product_branded_3_2.jpg',
  sideImageAlt: 'Guide side card',
  sideImageTitle: 'The Best Way To Get A Mobile App Your Restaurant'
}

const orderingCtaProps = {
  title: 'Keep guests coming back with loyalty and rewards',
  imageSrc: '/images/product/branded/product_branded_4_1.jpg',
  linkTo: '/product/loyalty',
  cardTitle: 'Rewards for regulars',
  cardDescription: 'Give your customers loyalty points, just like the big brands'
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