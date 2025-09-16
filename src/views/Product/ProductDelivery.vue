<script setup lang="ts">
import ProductHero from '@/components/Product/ProductHero.vue'
import ProductSalesFeatures from '@/components/Product/ProductSalesFeatures.vue'
import ProductProvenDesign from '@/components/Product/ProductProvenDesign.vue'
import ProductFAQs from '@/components/Product/ProductFAQs.vue'
import ProductTestimonial from '@/components/Product/ProductTestimonial.vue'
import ProductGuides from '@/components/Product/ProductGuides.vue'
import ProductOrderingCTA from '@/components/Product/ProductOrderingCTA.vue'

const heroProps = {
  title: 'Profitable delivery and a great guest experience.',
  description: 'Get food to your customers on time, by top-rated drivers, at a fair price.',
  primaryCtaText: 'Get Started',
  primaryCtaHref: '/dashboard',
  secondaryCtaText: 'View Pricing',
  secondaryCtaHref: '/pricing',
  videoSrc: '/images/product/delivery/video_3.mp4',
  videoPoster: '/images/product/delivery/video_3.jpg',
  overlayText: 'See why Gia from The Modern Vegan loves working with WeFood for delivery'
}

const salesFeaturesProps = {
  title: "Delivery that's better for you and your guests",
  leftImageSrc: '/images/product/delivery/product_delivery_1.jpg',
  leftImageAlt: 'Delivery hero image',
  features: [
    { title: 'Pay a flat rate for delivery', description: 'Use third-party drivers at fixed rates. Guests pay delivery on small orders, you chip in for larger ones.' },
    { title: 'Get the best drivers, commission free', description: 'We only use drivers rated 4.5 stars or higher to deliver your food.' },
    { title: 'A direct line to your customers', description: "You can call customers directly. We'll cover refunds for any delivery issues." }
  ],
  icons: [
    `<svg width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3040_23709)"><path d="M35.2314 23.9999C35.4016 24.2941 35.499 24.6356 35.499 24.9999C35.499 26.1045 34.6035 26.9999 33.499 26.9999C33.0646 26.9999 32.6625 26.8614 32.3346 26.6262M32.3346 26.6262C32.2385 26.5573 32.1487 26.4801 32.0664 26.3956L32.3346 26.6262ZM21 22.75C21 22.8881 20.8881 23 20.75 23M21 22.75C21 22.6119 20.8881 22.5 20.75 22.5M21 22.75H20.5M20.75 23C20.6119 23 20.5 22.8881 20.5 22.75M20.75 23V22.5M20.5 22.75C20.5 22.6119 20.6119 22.5 20.75 22.5M20.9665 22.625C21.0356 22.7446 20.9946 22.8974 20.875 22.9665M20.9665 22.625C20.8975 22.5054 20.7446 22.4644 20.625 22.5335M20.9665 22.625L20.5335 22.875M20.875 22.9665C20.7555 23.0355 20.6026 22.9946 20.5335 22.875M20.875 22.9665L20.625 22.5335M20.5335 22.875C20.4645 22.7554 20.5055 22.6025 20.625 22.5335M20.8751 22.5335C20.9947 22.6025 21.0356 22.7554 20.9666 22.875M20.8751 22.5335C20.7555 22.4645 20.6026 22.5054 20.5336 22.625M20.8751 22.5335L20.6251 22.9665M20.9666 22.875C20.8976 22.9946 20.7447 23.0355 20.6251 22.9665M20.9666 22.875L20.5336 22.625M20.6251 22.9665C20.5055 22.8975 20.4645 22.7446 20.5336 22.625M18 19.4999V16.9999C18 16.4476 18.4517 15.9885 18.9964 16.0797C21.2202 16.4521 21.974 17.9999 21.974 17.9999H26.5C29.814 17.9999 32.5 20.6859 32.5 23.9999C32.5 25.7749 31.725 27.3639 30.5 28.4629V30.9999C30.5 31.5522 30.0523 31.9999 29.5 31.9999H27.5C26.9477 31.9999 26.5 31.5522 26.5 30.9999C26.5 30.4477 26.0523 29.9999 25.5 29.9999H23.5C22.9477 29.9999 22.5 30.4477 22.5 30.9999C22.5 31.5522 22.0523 31.9999 21.5 31.9999H19.5C18.9477 31.9999 18.5 31.5522 18.5 30.9999V28.9999C17.594 28.4729 17.025 27.9079 16.5 26.9999H15.5C14.9477 26.9999 14.5 26.5522 14.5 25.9999V22.9349C14.5 22.3827 14.9477 21.9349 15.5 21.9349H16.5C16.838 21.0099 17.282 20.1479 18 19.4999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3040_23715)"><path d="M14.5 22.5L18.2005 17.4118C18.3887 17.1531 18.6893 17 19.0092 17H29.9808C30.3063 17 30.6114 17.1584 30.7987 17.4246L34.5 22.6857M14.5 22.5H13.5M14.5 22.5V30C14.5 30.5523 14.9477 31 15.5 31H17.5C18.0523 31 18.5 30.5523 18.5 30V29H30.5V30C30.5 30.5523 30.9477 31 31.5 31H33.5C34.0523 31 34.5 30.5523 34.5 30V22.6857M34.5 22.6857H35.5M18.5 25H20.5M28.5 25H30.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
    `<svg width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3695 21.2929C21.0916 22.7221 22.0497 24.0627 23.2436 25.2566C24.4376 26.4506 25.7781 27.4086 27.2073 28.1307L28.6668 26.6712C28.9906 26.3474 29.493 26.2849 29.8862 26.5195L32.3975 28.0176C32.9571 28.3515 33.053 29.1228 32.5923 29.5835L29.9915 32.1842C29.4867 32.6891 28.7484 32.8943 28.0709 32.6692C26.7899 32.2437 25.5447 31.6805 24.3582 30.9798C22.9842 30.1683 21.689 29.1723 20.5085 27.9917C19.328 26.8112 18.332 25.516 17.5205 24.142C16.8197 22.9555 16.2566 21.7103 15.831 20.4294C15.6059 19.7519 15.8112 19.0135 16.316 18.5087L18.9167 15.908C19.3775 15.4472 20.1488 15.5431 20.4826 16.1028L21.9807 18.614C22.2153 19.0072 22.1528 19.5096 21.829 19.8334L20.3695 21.2929Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
  ]
}

const provenDesignProps = {
  title: 'Third-party delivery, no third-party commissions',
  cards: [
    {
      src: '/images/product/delivery/product_delivery_2_1.png',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-top',
      alt: 'Third party drivers',
      wrapperClass: 'flex flex-col items-center justify-end',
      textWrapperClass: 'w-[65%] relative',
      textColorClass: 'text-black',
      label: 'Third party drivers',
      headingClass: 'text-[24px] md:text-[26px] lg:text-[30px]',
      heading: 'Top third-party drivers deliver for you. One flat fee. No markup from us.'
    },
    {
      src: '/images/product/delivery/product_delivery_2_2.jpg',
      imgClass: 'w-full h-full rounded-[24px] lg:rounded-[32px] object-contain object-right-bottom',
      alt: 'Control delivery options',
      wrapperClass: '',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Control delivery options',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: 'Use your in-house delivery drivers, third-party, or both.'
    },
    {
      src: '/images/product/delivery/product_delivery_2_3.jpg',
      imgClass: 'w-full h-full object-cover rounded-[24px] lg:rounded-[32px]',
      alt: 'Better for your guests',
      wrapperClass: 'flex flex-col justify-end',
      textWrapperClass: 'w-full relative',
      textColorClass: 'text-black',
      label: 'Better for your guests',
      headingClass: 'text-[22px] md:text-[26px] lg:text-[28px]',
      heading: "Call your customers if needed. We'll pay for any delivery problems."
    }
  ]
}

const faqsProps = {
  title: 'FAQs',
  faqs: [
    { question: 'Why would customers order from my app instead of the third parties?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>First, it’s cheaper for them. You may be marking up your prices on the<br>delivery apps in order to cover their commissions. There are also sometimes platform<br>fees and delivery fees that can inflate their order total.<br><br>Second, you can<br>incentivize them with a rewards program. With WeFood, you can reward them with a<br>points-based loyalty program, giving away low food cost items like mozzarella sticks and<br>fries every few orders to reward people for ordering directly.<br><br>Finally,<br>supporting local. Customers know how unfair the third party delivery apps are to<br>restaurants, so when we give them a way that’s just as easy to support you while still<br>getting delivery, they take us up on it.</p></div></article>` },
    { question: 'Who pays for delivery, the guest or the restaurant?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>For orders under $30, you can let the guest pay for delivery. You may<br>consider covering some of the cost to get more orders.<br><br>For orders over $30, you<br>should cover about $3 in delivery fees. Our research shows that you get the most orders<br>when customers pay a maximum of $3.99 in delivery.<br><br>Doing this can encourage your<br>customers to increase their order size. <br><br>Cheaper delivery for them, more sales<br>for you.</p></div></article>` },
    { question: 'Why would the third-party apps go for this?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>We negotiated in bulk with our thousands of restaurants to get the best<br>possible deal. Even though the third parties make less revenue on these orders, they<br>make more profit on each order because they don’t have to spend money to get people to<br>use their apps. <br><br>They charge us about $7 to help you offer delivery, which we<br>charge directly to you at no markup from us. But to the third parties, this is almost<br>pure profit for them. It helps keep their drivers more busy and active on their<br>platform.</p></div></article>` }
  ],
  sideCard: {
    imageSrc: '/images/product/delivery/faq_manager_5.jpg',
    imageAlt: 'Manager',
    quote: 'There’s not a week that goes by where I don’t hear from our guests how much they love our website and app because it makes their experience so much easier.',
    name: 'Rahul Bhatia',
    role: 'WeFood of Saffron Indian Kitchen'
  }
}

const testimonialProps = {
  imageSrc: '/images/product/delivery/in_how_1.jpg',
  imageAlt: 'Customer story',
  headline: 'How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com',
  metrics: [
    { value: '+$150,000', label: 'Online sales' },
    { value: '+377%', label: 'Growth' }
  ]
}

const guidesProps = {
  sectionTitle: 'See our guides on getting more delivery orders',
  blogHref: '/resources/blog',
  mainVideoSrc: '/images/product/delivery/new_video_2.mp4',
  mainVideoTitle: 'Get More Delivery Orders (Without Paying More Commissions)',
  sideImageSrc: '/images/product/delivery/product_delivery_3_2.jpg',
  sideImageAlt: 'Guide side card',
  sideImageTitle: 'Get More Delivery Orders (Without Paying More Commissions)'
}

const orderingCtaProps = {
  title: 'Grow re-orders with a mobile app',
  imageSrc: '/images/product/delivery/product_delivery_4_1.jpg',
  linkTo: '/product/branded',
  cardTitle: 'Your own mobile app',
  cardDescription: 'WeFood grows your repeat orders with your branded mobile app'
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