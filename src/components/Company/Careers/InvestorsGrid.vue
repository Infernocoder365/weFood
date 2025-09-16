<script setup lang="ts">
interface Investor { name: string; company: string; image: string }
const investors: Investor[] = [
  { name: 'Arash Ferdowsi', company: 'Dropbox', image: '/images/company/careers/company_careers_5_1.jpeg' },
  { name: 'Jack Altman', company: 'Lattice', image: '/images/company/careers/company_careers_5_2.webp' },
  { name: 'Jason Lemkin', company: 'SaaStr', image: '/images/company/careers/company_careers_5_3.jpeg' },
  { name: 'Claire Hughes Johnson', company: 'Stripe', image: '/images/company/careers/company_careers_5_4.jpeg' },
  { name: 'Guillermo Rauch', company: 'Vercel', image: '/images/company/careers/company_careers_5_5.jpeg' },
  { name: 'Dylan Field', company: 'Figma', image: '/images/company/careers/company_careers_5_6.webp' },
  { name: 'Kimbal Musk', company: 'The Kitchen Restaurant Group', image: '/images/company/careers/company_careers_5_7.jpeg' },
  { name: 'Alex Bard', company: 'Redpoint', image: '/images/company/careers/company_careers_5_8.jpeg' },
  { name: 'Geoff Donaker', company: 'Yelp', image: '/images/company/careers/company_careers_5_9.jpeg' },
  { name: 'Marcus Lemonis', company: 'The Profit', image: '/images/company/careers/company_careers_5_10.jpeg' },
  { name: 'Sean Rad', company: 'Tinder', image: '/images/company/careers/company_careers_5_11.jpeg' },
  { name: 'Parker Conrad', company: 'Rippling', image: '/images/company/careers/company_careers_5_12.png' },
  { name: 'Ryan Petersen', company: 'Flexport', image: '/images/company/careers/company_careers_5_13.jpeg' },
  { name: 'Max Mullen', company: 'Instacart', image: '/images/company/careers/company_careers_5_14.png' }
]

// Logo strip sources
const investorLogos: string[] = [
  '/images/company/careers/company_careers_5_logo1.svg',
  '/images/company/careers/company_careers_5_logo2.svg',
  '/images/company/careers/company_careers_5_logo3.svg',
  '/images/company/careers/company_careers_5_logo4.svg',
  '/images/company/careers/company_careers_5_logo5.svg',
  '/images/company/careers/company_careers_5_logo6.svg',
  '/images/company/careers/company_careers_5_logo7.svg',
  '/images/company/careers/company_careers_5_logo8.svg'
]
</script>

<template>
  <section class="pt-20 pb-32 lg:pb-44 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <div class="w-[480px] max-w-full mb-10 lg:mb-20">
        <h3 class="text-[36px] lg:text-[44px] font-medium leading-none">We’re backed by some of the best in business</h3>
      </div>
      <dl class="mb-10 lg:mb-16 flex flex-wrap items-center">
        <dt class="w-[170px] text-sm text-gray-deep">Our investors built companies like</dt>
        <dd class="w-full lg:flex-1 overflow-hidden relative">
          <div class="h-[34px] flex gap-8 items-center">
            <!-- v-for logo items -->
            <img v-for="(logo, idx) in investorLogos" :key="idx" :src="logo" class="w-auto h-full shrink-0" />
          </div>
          
      <em class="w-1/5 h-full absolute left-0 top-0 block" style="background-image: linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));"></em>
      <em class="w-1/5 h-full absolute right-0 top-0 block" style="background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255));"></em>
        </dd>
      </dl>
      <ul class="grid grid-cols-12 gap-4 lg:gap-x-6 lg:gap-y-12">
        <li v-for="(inv, idx) in investors" :key="idx" class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <img :src="inv.image" class="w-[112px] h-[112px] mx-auto mb-3 rounded-full object-cover block" />
          <h6 class="text-sm font-medium text-center">{{ inv.name }}</h6>
          <p class="text-xs text-gray-default text-center">{{ inv.company }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>