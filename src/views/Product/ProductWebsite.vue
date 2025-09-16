<script setup lang="ts">
import ProductHero from '@/components/Product/ProductHero.vue'
import ProductSalesFeatures from '@/components/Product/ProductSalesFeatures.vue'
import ProductProvenDesign from '@/components/Product/ProductProvenDesign.vue'
import ProductFAQs from '@/components/Product/ProductFAQs.vue'
import ProductTestimonial from '@/components/Product/ProductTestimonial.vue'
import ProductGuides from '@/components/Product/ProductGuides.vue'
import ProductOrderingCTA from '@/components/Product/ProductOrderingCTA.vue'

const heroProps = {
  title: "Restaurant websites built for sales first, style second.",
  description:
    "WeFood builds your website to drive sales. Our proven design grows Google traffic, outranks delivery apps, and beats your competition.",
  primaryCtaText: 'Get Started',
  primaryCtaHref: '/dashboard',
  secondaryCtaText: 'View Pricing',
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/product/video_1.mp4',
  videoPoster: '/images/product/product/video_1.jpg',
  overlayText:
    "See how the WeFood of Mr M's Sandwich Shop use WeFood to get 'more clicks, more traffic, more sales'"
}

const salesFeaturesProps = {
  title: "Get more sales from your restaurant's website",
  leftImageSrc: '/images/product/product/product_pro_1.jpg',
  leftImageAlt: 'Website preview',
  features: [
    {
      title: 'We build websites that Google loves',
      description: 'AI-optimized websites that boost your SEO and get you more Google traffic.'
    },
    {
      title: 'Drive online sales like the big brands',
      description: 'Easy online ordering right on your website. Grow your traffic, grow your orders.'
    },
    {
      title: "Your new website in days, not months",
      description: "Add your branding to our proven design, then you're ready to grow online."
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
  title: 'A proven design that drives more traffic',
  cards: [
    {
      src: '/images/product/product/product_pro_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: 'SEO boost',
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: '',
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: 'AI-optimized sites boost SEO and Google traffic.'
    },
    {
      src: '/images/product/product/product_pro_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-right-bottom',
      alt: 'Ordering built-in',
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Online ordering built-in',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Great ordering experience that increases sales.'
    },
    {
      src: '/images/product/product/product_pro_2_3.png',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: 'Fast launch',
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-white',
      label: 'Fast launch',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Add your branding, then go live ASAP.'
    }
  ]
}

const faqsProps = {
  title: 'FAQs',
  faqs: [
    {
      question: 'What happens to my current website?',
      answer:
        `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>When you sign up with WeFood, you'll get a new restaurant website optimized for traffic and sales. It will replace your current website.<br><br> Your domain and website URL will stay the same.<br><br> We won't delete your current website. If you ever decide to cancel your subscription with us, we will restore your website to how it was before you signed up.</p></div></article>`
    },
    {
      question: 'How much can I customize my design?',
      answer:
        `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>We believe sales is the most important thing. So we give you a proven design that you can personalize with your branding.<br><br>It's why restaurant websites with WeFood look a certain way. We've studied the best online brands. We've driven over $100 million in sales for restaurants. We've helped thousands of restaurant WeFood grow their customer base with our websites.<br><br>If you're looking for a lot of design freedom, WeFood is not the right fit for your business.</p></div></article>`
    },
    {
      question: 'How long will this take?',
      answer:
        `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>If you have everything ready to go, a few days.<br><br>Most customers get their new online presence set up within about a week.<br><br>We'll need some information about your business when you sign up.<br><br>This includes your website domain information, along with Google Business and Yelp details. The more of those you have on hand, the faster we can launch.</p></div></article>`
    }
  ],
  sideCard: {
    imageSrc: '/images/product/product/faq_manager_3.jpg',
    imageAlt: 'Manager',
    quote:
      "We're getting more clicks, and we're getting more traffic. And those clicks are turning into sales.",
    name: 'Matthew Miller',
    role: "Co-WeFood of Mr M's Sandwich Shop"
  }
}

const testimonialProps = {
  imageSrc: '/images/product/product/in_how_1.jpg',
  imageAlt: 'Customer story',
  headline: "How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com",
  metrics: [
    { value: '+$150,000', label: 'Online sales' },
    { value: '+377%', label: 'Growth' }
  ]
}

const guidesProps = {
  sectionTitle: "Improve your restaurant's website with our guides",
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/product/new_video_2.mp4',
  mainVideoTitle: "I Reviewed The Best Website Builders For Restaurants, Here's What I Found",
  sideImageSrc: '/images/product/product/product_pro_3_2.jpg',
  sideImageAlt: 'Guide side card',
  sideImageTitle: "Buyer's Guide: The Best Website Builders for Restaurants"
}

const orderingCtaProps = {
  title: 'Grow your sales with our online ordering platform',
  imageSrc: '/images/product/product/product_pro_4_1.jpg',
  linkTo: '/product/ordering',
  cardTitle: 'Online Ordering',
  cardDescription: 'Thousands of restaurants use WeFood to increase their direct online sales'
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