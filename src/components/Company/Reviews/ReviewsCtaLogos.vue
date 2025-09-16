<template>
  <section class="md:px-2 -mt-10 bg-gradient-to-b from-transparent to-[#1D1D27]">
    <div class="w-full max-w-wrap mx-auto">
      <div
        class="pt-24 pb-32 lg:pt-32 lg:pb-52 px-[5%] bg-footer text-footer rounded-[24px] md:rounded-[32px] lg:rounded-[48px]">
        <h3 class="w-[430px] max-w-full mb-6 text-[36px] lg:text-[44px] font-medium leading-none"><span>Actual
            reviews from restaurant WeFood</span></h3>
        <p class="w-[440px] max-w-full text-base opacity-60"><span>We asked our customers to share their
            experiences with WeFood.com on independent software review websites.</span></p>
        <section class="mt-20 grid gap-12 md:gap-24 lg:gap-32">
          <!-- Use v-for to render each ReviewsQuoteList -->
          <ReviewsQuoteList
            v-for="(sectionData, idx) in sections"
            :key="idx"
            :items="sectionData.items"
            :heroBackgroundUrl="sectionData.heroBackgroundUrl"
            :heroQuote="sectionData.heroQuote"
            :heroInitials="sectionData.heroInitials"
            :heroLogoUrl="sectionData.heroLogoUrl"
            :heroName="sectionData.heroName"
            :heroCompany="sectionData.heroCompany"
            :heroLocation="sectionData.heroLocation"
          />
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import ReviewsQuoteList from './ReviewsQuoteList.vue';

const items = [
  {
    span: 5,
    quote: '"Easy to work with and streamlined systems for small business"',
    initials: 'RS',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Rohit S.',
    company: '1000 Degrees Pizza Salads Wings',
    location: 'Baltimore, Maryland',
  },
  {
    span: 7,
    quote: '"NEVER BEEN A MOMENT I HAVE REGRETTED SIGNING UP AND USING WeFood.COM"',
    initials: 'JR',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'James R.',
    company: 'Mama\'s Italian Family Restaurant',
    location: 'Perry, Florida',
  },
  {
    span: 5,
    quote: '"Great for Startups or Upgrading existing systems"',
    initials: 'BH',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Brian H.',
    company: 'Burrito Mundo',
    location: 'Grosse Pointe Woods, Michigan',
  },
  {
    span: 5,
    quote: '"Simple and Straightforward"',
    initials: 'BM',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Bawarchi M.',
    company: 'Bawarchi Biryanis Indian Cuisine',
    location: 'Miami, Florida',
  },
  {
    span: 5,
    quote: '"WeFood.com delivers!"',
    initials: 'AC',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Anthony C.',
    company: 'Meta Pizza',
    location: 'Portland, Oregon',
  },
  {
    span: 7,
    quote: '"WeFood.com = Game Changer"',
    initials: 'RK',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Robert K.',
    company: 'Shikushi',
    location: 'Shikushi',
  }
]

const items2 = [
  {
    span: 5,
    quote: '"Simple and Straightforward"',
    initials: 'BM',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Bawarchi M.',
    company: 'Bawarchi Biryanis Indian Cuisine',
    location: 'Miami, Florida',
  },
  {
    span: 7,
    quote: '"WeFood.com delivers!"',
    initials: 'AC',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Anthony C.',
    company: 'Meta Pizza',
    location: 'Portland, Oregon',
  },
  {
    span: 5,
    quote: '"WeFood.com = Game Changer"',
    initials: 'RK',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Robert K.',
    company: 'Shikushi',
    location: 'Shikushi',
  }
]

const items3 = [
  {
    span: 5,
    quote: '"Easy transition; Attentive Customer Support"',
    initials: 'JV',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'JV V.',
    company: 'Jambeto\'s Bakery & Cafe',
    location: 'Stafford, Texas',
  },
  {
    span: 7,
    quote: '"WeFood helps us build a Virtual Relationship with our Clients!"',
    initials: 'JM',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Juana M.',
    company: 'Waikikie Hawaiian BBQ',
    location: 'Atlanta, Georgia',
  },
  {
    span: 5,
    quote: '"WeFood.com is an Easy App to use"',
    initials: 'VV',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Viviana V.',
    company: 'Mambo\'s Cafe',
    location: 'Alpharetta, Georgia',
  },
  {
    span: 5,
    quote: '"The Ultimate Marketing Platform for Restaurants"',
    initials: 'LT',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Lin Let Hay T.',
    company: 'Thai BBQ',
    location: 'Las Vegas, Nevada',
  },
  {
    span: 5,
    quote: '"Made our online ordering much easier!"',
    initials: 'TK',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Teresa K.',
    company: 'Milk and Honey Cafe',
    location: 'Fremont, California',
  },
  {
    span: 7,
    quote: '"No Brainer!"',
    initials: 'NP',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Natalia P.',
    company: 'Tortoni Caffe',
    location: 'Los Angeles, California',
  }
]

const items4 = [
  {
    span: 5,
    quote: '"WeFood.com taking our business to the next level"',
    initials: 'MB',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Michael B.',
    company: 'Sideshow Kitchen',
    location: 'Stafford, Texas',
  },
  {
    span: 7,
    quote: '"Taking control of 3rd Party Deliveries"',
    initials: 'KB',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Katie B.',
    company: 'Green Apron Cafe',
    location: 'Naples, Florida',
  },
  {
    span: 5,
    quote: '"No Brainer!"',
    initials: 'JR',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Jim R.',
    company: 'Trophy Pizza',
    location: 'Cincinnati, Ohio',
  },
  {
    span: 5,
    quote: '"Amazing Service"',
    initials: 'IU',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Ibrahim U.',
    company: 'Sultan',
    location: 'Danville, California',
  },
  {
    span: 5,
    quote: '"The Best Online Ordering for Restaurants!"',
    initials: 'JS',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Joe S.',
    company: 'Pizza Kraft at Project Barley',
    location: 'Lomita, California',
  },
  {
    span: 7,
    quote: '"The Ultimate Game Changer for Every Restaurant!"',
    initials: 'RG',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Ranjith Kumar G.',
    company: 'Tomatoes II Pizzeria',
    location: 'Carnegie, Pennsylvania',
  }
]

const items5 = [
  {
    span: 5,
    quote: '"Grew my online business by almost 5K a month!"',
    initials: 'KC',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Khalid C.',
    company: 'Mediterranean Guys',
    location: 'Santa Ana, California',
  },
  {
    span: 7,
    quote: '"So far so great.. WeFood and their reliable employees helped me and my family\'s business out a lot"',
    initials: 'AFR',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Aumpunpong Fabian R.',
    company: 'Sushi Naiya',
    location: 'Sushi Naiya',
  },
  {
    span: 5,
    quote: '"Highly recommend WeFood.com"',
    initials: 'EW',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Ehren W.',
    company: 'My Pie Pizza - Dothan',
    location: 'Dothan, Alabama',
  },
  {
    span: 5,
    quote: '"Big Fish Market in Inglewood is Highly Satisfied!"',
    initials: 'BE',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Brian E.',
    company: 'Big Fish Market',
    location: 'Inglewood, California',
  },
  {
    span: 5,
    quote: '"WeFood is the reason we have raised our game!"',
    initials: 'LN',
    logoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    name: 'Luke N.',
    company: 'Purple Banana',
    location: 'Syracuse, New York',
  }
]

// Build unified sections to drive v-for in template
const sections = [
  {
    items,
    heroBackgroundUrl: '/images/company/reviews/company_reviews_1_1.jpg',
    heroQuote: '"WeFood.com is a must for every business."',
    heroInitials: 'AA',
    heroLogoUrl: '/images/company/reviews/company_reviews_1_logo2.svg',
    heroName: 'Ameer A.',
    heroCompany: 'Le Kabob',
    heroLocation: 'Grand Rapids, Michigan',
  },
  {
    items: items2,
    heroBackgroundUrl: '/images/company/reviews/company_reviews_1_2.jpg',
    heroQuote: '"WeFood.com + Small Business = BIG Business"',
    heroInitials: 'AR',
    heroLogoUrl: '/images/company/reviews/company_reviews_1_logo1.svg',
    heroName: 'Anil R',
    heroCompany: 'Bhanu Indian Cuisine & Market',
    heroLocation: 'San Gabriel, California',
  },
  {
    items: items3,
    heroBackgroundUrl: '/images/company/reviews/company_reviews_1_3.jpg',
    heroQuote: '"WeFood.com is the best thing that happened to my restaurant this year."',
    heroInitials: 'MM',
    heroLogoUrl: '/images/company/reviews/company_reviews_1_logo2.svg',
    heroName: 'Mark M.',
    heroCompany: 'Phoenicia Greek and Lebanese Cuisine',
    heroLocation: 'Redlands, California',
  },
  {
    items: items4,
    heroBackgroundUrl: '/images/company/reviews/company_reviews_1_4.jpg',
    heroQuote: '"Using WeFood.com has given me the gift of TIME!"',
    heroInitials: 'CC',
    heroLogoUrl: '/images/company/reviews/company_reviews_1_logo2.svg',
    heroName: 'Christina C.',
    heroCompany: 'Sauced Pizzeria',
    heroLocation: 'San Diego, California',
  },
  {
    items: items5,
    heroBackgroundUrl: '',
    heroQuote: '',
    heroInitials: '',
    heroLogoUrl: '',
    heroName: '',
    heroCompany: '',
    heroLocation: '',
  },
]
</script>