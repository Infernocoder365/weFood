<script setup lang="ts">
interface Leader { name: string; title: string; image: string; logo?: string }

const leaders: Leader[] = [
  { name: 'Kyle Norton', title: 'CRO', image: '/images/company/careers/company_careers_2_1.jpg', logo: '/images/company/careers/company_careers_2_logo1.svg' },
  { name: 'Alexis Bernstein', title: 'Head of Talent', image: '/images/company/careers/company_careers_2_2.jpg', logo: '/images/company/careers/company_careers_2_logo2.svg' },
  { name: 'Dean Bloembergen', title: 'Co-Founder & CTO', image: '/images/company/careers/company_careers_2_3.jpg', logo: '/images/company/careers/company_careers_2_logo3.svg' },
  { name: 'Venkat Jonnadula', title: 'VP Engineering', image: '/images/company/careers/company_careers_2_4.jpeg', logo: '/images/company/careers/company_careers_2_logo4.svg' },
  { name: 'Maria Paula Soto', title: 'Director of Launch', image: '/images/company/careers/company_careers_2_5.jpg', logo: '/images/company/careers/company_careers_2_logo5.svg' },
  { name: 'Adam Guild', title: 'Co-Founder & CEO', image: '/images/company/careers/company_careers_2_6.jpg', logo: '/images/company/careers/company_careers_2_logo6.svg' },
  { name: 'Tina Glickman', title: 'VP Partnerships', image: '/images/company/careers/company_careers_2_7.jpg', logo: '/images/company/careers/company_careers_2_logo7.svg' },
  { name: 'David Fallarme', title: 'VP Marketing', image: '/images/company/careers/company_careers_2_8.jpg', logo: '/images/company/careers/company_careers_2_logo8.svg' },
  { name: 'Rob Lehman', title: 'President & COO', image: '/images/company/careers/company_careers_2_9.jpg', logo: '/images/company/careers/company_careers_2_logo9.svg' },
  { name: 'Bret Baumbach', title: 'VP Sales', image: '/images/company/careers/company_careers_2_10.jpg', logo: '/images/company/careers/company_careers_2_logo10.svg' },
  { name: 'Noah Yoseloff', title: 'Head of Growth', image: '/images/company/careers/company_careers_2_11.jpg', logo: '/images/company/careers/company_careers_2_logo11.svg' },
  { name: 'Gracie Binder', title: 'VP Customer Success', image: '/images/company/careers/company_careers_2_12.jpg', logo: '/images/company/careers/company_careers_2_logo12.svg' },
  { name: 'Andrew Dopp', title: 'VP Finance', image: '/images/company/careers/company_careers_2_13.jpeg', logo: '/images/company/careers/company_careers_2_logo13.png' },
  { name: 'Quenton Cook', title: 'CPO', image: '/images/company/careers/company_careers_2_14.jpeg', logo: '/images/company/careers/company_careers_2_logo14.svg' },
  { name: 'Jonathan Shenkman', title: 'Director of Business Operations', image: '/images/company/careers/company_careers_2_15.jpeg', logo: '/images/company/careers/company_careers_2_logo15.svg' }
]
</script>

<template>
  <section class="pt-14 pb-20 lg:pt-32 lg:pb-40 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <div class="w-[480px] max-w-full mx-auto mb-10 lg:mb-16">
        <h3 class="mb-4 text-[38px] lg:text-[48px] text-center font-medium leading-none">Our leadership team</h3>
        <p class="text-gray-deep text-center">Experienced leaders passionate about small business, with backgrounds from the best companies in the industry.</p>
      </div>
      <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-6">
        <li v-for="(p, idx) in leaders" :key="idx" class="col-span-1 bg-default text-default rounded-xl flex flex-col">
          <img :src="p.image" class="w-full rounded-t-xl object-cover block" style="aspect-ratio: 1 / 1 !important;">
          <div class="px-4 pt-3.5 pb-2.5 flex-1 grid grid-cols-1 gap-5 place-content-between">
            <div class="col-span-1">
              <h5 class="font-medium">{{ p.name }}</h5>
              <p class="text-gray-default font-medium">{{ p.title }}</p>
            </div>
            <div class="col-span-1" v-if="p.logo">
              <img :src="p.logo" class="w-auto max-w-full h-10 object-contain object-left block">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>