<script setup lang="ts">
import ProductHero from '@/components/Product/ProductHero.vue'
import ProductSalesFeatures from '@/components/Product/ProductSalesFeatures.vue'
import ProductProvenDesign from '@/components/Product/ProductProvenDesign.vue'
import ProductFAQs from '@/components/Product/ProductFAQs.vue'
import ProductTestimonial from '@/components/Product/ProductTestimonial.vue'
import ProductGuides from '@/components/Product/ProductGuides.vue'
import ProductOrderingCTA from '@/components/Product/ProductOrderingCTA.vue'

const heroProps = {
  title: 'Make your online ordering as good as the big brands.',
  description: "WeFood's online ordering feels familiar and easy, so more customers order directly from you.",
  primaryCtaText: 'Get Started',
  primaryCtaHref: '/dashboard',
  secondaryCtaText: 'View Pricing',
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/ordering/video_1.mp4',
  videoPoster: '/images/product/ordering/video_1.jpg',
  overlayText: 'See how Mo from Talkin Tacos gets more direct online orders with WeFood'
}

const salesFeaturesProps = {
  title: 'Online ordering that feels like the delivery apps',
  leftImageSrc: '/images/product/ordering/product_ordering_1.jpg',
  leftImageAlt: 'Ordering hero image',
  features: [
    { title: 'Easy for your guests to make the switch', description: 'Both your website and mobile online ordering are easy for customers, since they feel familiar.' },
    { title: 'Start owning your customer data', description: 'Direct orders mean you get customer data, not third parties. Build more connections with your guests.' },
    { title: 'Cheaper and better for your guests', description: "Ordering directly means that guests avoid third-party fees, so they'll go to you first." }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3040_24308)"><path d="M32.0657 21.0625H26C25.7239 21.0625 25.5 20.8386 25.5 20.5625V14.4639C25.5 13.9692 24.8584 13.7749 24.584 14.1865L16.5182 26.2851C16.2967 26.6174 16.5349 27.0625 16.9343 27.0625H23C23.2761 27.0625 23.5 27.2864 23.5 27.5625V33.6611C23.5 34.1558 24.1416 34.3501 24.416 33.9385L32.4818 21.8399C32.7033 21.5076 32.4651 21.0625 32.0657 21.0625Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></g></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 31.0625V16.0625C17.5 15.5102 17.9477 15.0625 18.5 15.0625H30.5C31.0523 15.0625 31.5 15.5102 31.5 16.0625V30.0625H18.5C17.9477 30.0625 17.5 30.5102 17.5 31.0625ZM17.5 31.0625V32.0625C17.5 32.6148 17.9477 33.0625 18.5 33.0625H31.5M25.25 20.8125C25.25 21.2267 24.9142 21.5625 24.5 21.5625C24.0858 21.5625 23.75 21.2267 23.75 20.8125M25.25 20.8125C25.25 20.3983 24.9142 20.0625 24.5 20.0625C24.0858 20.0625 23.75 20.3983 23.75 20.8125M25.25 20.8125H23.75M24.5 24.0625C22.9851 24.0625 22.6145 24.6982 22.5265 24.9559C22.5074 25.0119 22.5513 25.0625 22.6105 25.0625H26.3895C26.4487 25.0625 26.4926 25.0119 26.4735 24.9559C26.3855 24.6982 26.0149 24.0625 24.5 24.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5 15.0625H17.5V32.6625L19.8333 31.0625L22.1667 33.0625L24.5 31.0625L26.8333 33.0625L29.1667 31.0625L31.5 32.6625V15.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"></path> <path d="M21.5 20.0625H21.51M21.75 20.0625C21.75 20.2006 21.6381 20.3125 21.5 20.3125C21.3619 20.3125 21.25 20.2006 21.25 20.0625C21.25 19.9244 21.3619 19.8125 21.5 19.8125C21.6381 19.8125 21.75 19.9244 21.75 20.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> <path d="M27.5 26.0625H27.51M27.75 26.0625C27.75 26.2006 27.6381 26.3125 27.5 26.3125C27.3619 26.3125 27.25 26.2006 27.25 26.0625C27.25 25.9244 27.3619 25.8125 27.5 25.8125C27.6381 25.8125 27.75 25.9244 27.75 26.0625Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path> <path d="M28.4571 20.5196L29.1642 19.8125L27.75 18.3983L27.0429 19.1054L28.4571 20.5196ZM27.0429 19.1054L20.5429 25.6054L21.9571 27.0196L28.4571 20.5196L27.0429 19.1054Z" fill="currentColor"></path></svg>`
  ]
}

const provenDesignProps = {
  title: 'Online ordering that helps you grow',
  cards: [
    {
      src: '/images/product/ordering/product_ordering_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: 'Built like the best',
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: 'Built like the best',
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: 'Feels like the apps your customers use daily.'
    },
    {
      src: '/images/product/ordering/product_ordering_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-bottom',
      alt: 'Grow your customer list',
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Grow your customer list',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Own your data. Grow your list. Connect with your customers.'
    },
    {
      src: '/images/product/ordering/product_ordering_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: 'Save on fees',
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: 'Save on fees',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Direct orders: cheaper for guests, better for you.'
    }
  ]
}

const faqsProps = {
  title: 'FAQs',
  faqs: [
    { question: 'How can I get my customers to order directly?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Always remind customers to order from your website or app.<br><br>We'll help by giving you flyers that have a QR code. You can put these in takeout bags, or hand them to customers in-store.<br><br>We'll also pay for promotions to help you get customers on your email list.<br><br>Once you get more customers ordering through your website, we'll keep them coming back. When they visit your website on their phone, we'll promote your mobile app. These drive 85% more repeat orders for you.</p></div></article>` },
    { question: 'What POS systems do you integrate with?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>We have native integrations with Square and Clover. We also connect to many POS systems through Otter.<br><br>We can also send you a tablet or printer (at no extra fee) if that's what you'd prefer.</p></div></article>` },
    { question: 'I already use another OLO, why should I switch to WeFood?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Many restaurants switch to WeFood because they know they can get more online sales. Their current OLO either doesn't drive enough orders, or their customers don't like using it.<br><br>Everything we do is based on growing your online orders.<br><br>Our online ordering system drives orders at 2-4X more than the average restaurant website. That's because we've based our OLO on the best restaurant and food apps.<br><br>With WeFood, your OLO also comes with a mobile app. Your app is modeled after the best apps in the industry. It's how we've helped our customers get thousands of 5-star reviews on app stores.</p></div></article>` }
  ],
  sideCard: {
    imageSrc: '/images/product/ordering/faq_manager_7.jpg',
    imageAlt: 'Manager',
    quote: 'Since we started using WeFood 3 years ago, we’ve done over $2 million in direct online sales. It gives restaurants superpowers to succeed online.',
    name: 'Mo Farraj',
    role: 'WeFood of Talkin’ Tacos'
  }
}

const testimonialProps = {
  imageSrc: '/images/product/ordering/in_how_1.jpg',
  imageAlt: 'Customer story',
  headline: 'How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com',
  metrics: [
    { value: '+$150,000', label: 'Online sales' },
    { value: '+377%', label: 'Growth' }
  ]
}

const guidesProps = {
  sectionTitle: 'Drive more direct online orders with our best guides',
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/ordering/new_video_2.mp4',
  mainVideoTitle: `Avoid The 7 Online Mistakes That Hurt Your Restaurant's Sales`,
  sideImageSrc: '/images/product/ordering/product_ordering_3_2.jpg',
  sideImageAlt: 'Guide side card',
  sideImageTitle: "How To Get More Results From Your Online Ordering System"
}

const orderingCtaProps = {
  title: 'Offer delivery for your customers with flat, fair fees',
  imageSrc: '/images/product/ordering/product_ordering_4_1.jpg',
  linkTo: '/product/delivery',
  cardTitle: 'Delivery for restaurants',
  cardDescription: "Simple delivery pricing that's better for you and cheaper for your guests"
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