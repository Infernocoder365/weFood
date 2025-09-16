<script setup lang="ts">
import ProductHero from '@/components/Product/ProductHero.vue'
import ProductSalesFeatures from '@/components/Product/ProductSalesFeatures.vue'
import ProductProvenDesign from '@/components/Product/ProductProvenDesign.vue'
import ProductFAQs from '@/components/Product/ProductFAQs.vue'
import ProductTestimonial from '@/components/Product/ProductTestimonial.vue'
import ProductGuides from '@/components/Product/ProductGuides.vue'
import ProductOrderingCTA from '@/components/Product/ProductOrderingCTA.vue'

const heroProps = {
  title: 'Never miss another marketing opportunity again.',
  description: 'Grow sales with automated campaigns. Drive repeat orders with proven email and text marketing on autopilot.',
  primaryCtaText: 'Get Started',
  primaryCtaHref: '/dashboard',
  secondaryCtaText: 'View Pricing',
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/market/video_2.mp4',
  videoPoster: '/images/product/market/video_2.jpg',
  overlayText: "See how automated marketing boosts sales for Phillip and Karen from Sushi Me Roll'n"
}

const salesFeaturesProps = {
  title: 'Money-making marketing, powered by customer data',
  leftImageSrc: '/images/product/market/product_market_1.jpg',
  leftImageAlt: 'Marketing hero image',
  features: [
    { title: 'Grow your sales with proven campaigns', description: 'Run automated marketing that grow orders.' },
    { title: 'Grow your customer list', description: 'Every direct order grows your list, giving you more data to drive more sales.' },
    { title: 'Write faster with AI', description: 'Sending your own campaign? Use our AI assistant to write email blasts in seconds.' }
  ],
  icons: [
    '<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.5 17.0625H34.5V16.0625H33.5V17.0625ZM33.5 31.0625V32.0625H34.5V31.0625H33.5ZM15.5 31.0625H14.5V32.0625H15.5V31.0625ZM15.5 17.0625V16.0625H14.5V17.0625H15.5ZM24.5 25.0625L24.0528 25.9569L24.5 26.1805L24.9472 25.9569L24.5 25.0625ZM32.5 17.0625V31.0625H34.5V17.0625H32.5ZM33.5 30.0625H15.5V32.0625H33.5V30.0625ZM16.5 31.0625V17.0625H14.5V31.0625H16.5ZM15.5 18.0625H33.5V16.0625H15.5V18.0625ZM24.9472 24.1681L16.2354 19.8122L15.341 21.601L24.0528 25.9569L24.9472 24.1681ZM32.7646 19.8122L24.0528 24.1681L24.9472 25.9569L33.6591 21.601L32.7646 19.8122Z" fill="currentColor"></path></svg>',
    '<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 32.0625L13.5025 31.9922L13.427 33.0625H14.5V32.0625ZM26.5 32.0625V33.0625H27.573L27.4975 31.9922L26.5 32.0625ZM34.6457 31.0625V32.0625H35.7187L35.6432 30.9922L34.6457 31.0625ZM22.5 19.0625C22.5 20.1671 21.6046 21.0625 20.5 21.0625V23.0625C22.7091 23.0625 24.5 21.2716 24.5 19.0625H22.5ZM20.5 21.0625C19.3954 21.0625 18.5 20.1671 18.5 19.0625H16.5C16.5 21.2716 18.2909 23.0625 20.5 23.0625V21.0625ZM18.5 19.0625C18.5 17.9579 19.3954 17.0625 20.5 17.0625V15.0625C18.2909 15.0625 16.5 16.8534 16.5 19.0625H18.5ZM20.5 17.0625C21.6046 17.0625 22.5 17.9579 22.5 19.0625H24.5C24.5 16.8534 22.7091 15.0625 20.5 15.0625V17.0625ZM31 19.5625C31 20.3909 30.3284 21.0625 29.5 21.0625V23.0625C31.433 23.0625 33 21.4955 33 19.5625H31ZM29.5 21.0625C28.6716 21.0625 28 20.3909 28 19.5625H26C26 21.4955 27.567 23.0625 29.5 23.0625V21.0625ZM28 19.5625C28 18.7341 28.6716 18.0625 29.5 18.0625V16.0625C27.567 16.0625 26 17.6295 26 19.5625H28ZM29.5 18.0625C30.3284 18.0625 31 18.7341 31 19.5625H33C33 17.6295 31.433 16.0625 29.5 16.0625V18.0625ZM14.5 33.0625H26.5V31.0625H14.5V33.0625ZM15.4975 32.1328C15.7979 27.8723 18.2996 26.0625 20.5 26.0625C22.7004 26.0625 25.2021 27.8723 25.5025 32.1328L27.4975 31.9922C27.1399 26.9193 23.9707 24.0625 20.5 24.0625C17.0293 24.0625 13.8601 26.9193 13.5025 31.9922L15.4975 32.1328ZM27.9456 26.4323C29.0717 25.8719 30.3861 25.9465 31.4682 26.6691C32.5432 27.3868 33.485 28.8176 33.6482 31.1328L35.6432 30.9922C35.4452 28.1825 34.2623 26.1299 32.5788 25.0058C30.9026 23.8866 28.8248 23.7609 27.0546 24.6417L27.9456 26.4323ZM29.5001 32.0625H34.6457V30.0625H29.5001V32.0625Z" fill="currentColor"></path></svg>',
    '<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 18.0625L29 15.0625L33.5 19.5625L30.5 22.5625M26 18.0625L15.5 28.5625V33.0625H20L30.5 22.5625M26 18.0625L30.5 22.5625" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>'
  ]
}

const provenDesignProps = {
  title: 'Reach more customers with automated marketing',
  cards: [
    {
      src: '/images/product/market/product_market_2_1.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: 'Proven marketing',
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: 'Proven marketing',
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: 'Boost sales with smart, automated campaigns.'
    },
    {
      src: '/images/product/market/product_market_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-right-bottom',
      alt: 'Own customer data',
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Own customer data',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Your orders, your data. Grow your list, grow your sales.'
    },
    {
      src: '/images/product/market/product_market_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: 'AI marketing',
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'AI marketing',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Write emails instantly with AI.'
    }
  ]
}

const faqsProps = {
  title: 'FAQs',
  faqs: [
    { question: 'What are some examples of your proven campaigns?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>We automate campaigns that we know drive sales. For example, 'abandoned cart' emails. When a customer adds food to their cart but doesn't complete their order, we'll send them an email or text to come back.<br><br>This is a best practice in eCommerce, and it works great for online ordering too.<br><br>Another example is holiday email campaigns. For example, we'll send a Mother's Day email with a limited-time coupon code.<br><br>Since these types of emails work across all restaurants, we've automated them for you. You'll grow sales without having to write dozens of email or text blast campaigns.</p></div></article>` },
    { question: 'Can I run my own marketing campaigns?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Absolutely. You can use our pre-built marketing campaigns, or you can build your own. It’s easy to send your own emails, and we make it easier with our AI writing assistant.</p></div></article>` },
    { question: 'Should I stop using third party apps?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Many of our customers stay on the apps, as they can be a good way to get new customers.<br><br>We'll help you to convert those customers to order directly from you, using your new online ordering system.</p></div></article>` }
  ],
  sideCard: {
    imageSrc: '/images/product/market/faq_manager_4.jpg',
    imageAlt: 'Manager',
    quote: 'Now that we’ve used WeFood for 1 year, I can say confidently that it is the best technology in our restaurant.',
    name: 'Phillip Hang',
    role: "WeFood of Sushi Me Roll'n"
  }
}

const testimonialProps = {
  imageSrc: '/images/product/market/in_how_1.jpg',
  imageAlt: 'Customer story',
  headline: 'How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com',
  metrics: [
    { value: '+$150,000', label: 'Online sales' },
    { value: '+377%', label: 'Growth' }
  ]
}

const guidesProps = {
  sectionTitle: 'Grow your customer base with our marketing guides',
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/market/new_video_2.mp4',
  mainVideoTitle: 'How A.I. Will Transform Your Restaurant',
  sideImageSrc: '/images/product/market/product_market_3_2.jpg',
  sideImageAlt: 'Guide side card',
  sideImageTitle: 'The 8 Money-Making Email Campaigns Every Restaurant Must Send'
}

const orderingCtaProps = {
  title: 'See what restaurant WeFood say about WeFood',
  imageSrc: '/images/product/market/product_market_4_1.jpg',
  linkTo: '/resources/case',
  cardTitle: 'WeFood stories',
  cardDescription: 'See how WeFood helped these restaurants grow online'
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