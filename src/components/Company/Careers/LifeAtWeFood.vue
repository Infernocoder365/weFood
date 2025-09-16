<script setup lang="ts">
interface Testimonial { name: string; title: string; image: string }
const people: Testimonial[] = [
  { name: 'Alexis Bernstein', title: 'Director of Launch', image: '/images/company/careers/company_careers_3_1.jpg' },
  { name: 'Maria Paula Soto', title: 'Director of Launch', image: '/images/company/careers/company_careers_3_2.jpg' },
  { name: 'Phillip Hang', title: 'Success Manager', image: '/images/company/careers/company_careers_3_3.jpg' }
]
</script>

<template>
  <section class="pt-20 pb-32 lg:pt-32 lg:pb-48 px-[5%] bg-[#171F1F] text-white">
    <div class="w-full max-w-wrap mx-auto">
      <div class="grid grid-cols-1 gap-10 lg:gap-16">
        <div>
          <h3 class="mb-3 lg:mb-4 text-[42px] lg:text-[56px] font-medium leading-none">Life at WeFood</h3>
          <p class="opacity-50">What's it like to work at WeFood? Hear from our teammates.</p>
        </div>
        <ul class="w-full overflow-x-auto flex lg:grid lg:grid-cols-3 gap-3">
          <li v-for="(p, idx) in people" :key="idx" class="flex-shrink-0 w-3/4 md:w-1/3 lg:w-auto lg:col-span-1 relative">
            <img :src="p.image" class="w-full aspect-[2/3] rounded-[40px] object-cover block" />
            <div class="w-full p-5 lg:p-8 absolute left-0 bottom-0 flex">
              <div class="flex-1 overflow-hidden">
                <h5 class="font-medium">{{ p.name }}</h5>
                <p class="font-medium opacity-50">{{ p.title }}</p>
              </div>
              <em class="w-10 h-10 ml-4 bg-white text-black rounded-full flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>
              </em>
            </div>
          </li>
        </ul>
        <div class="w-[600px] max-w-full mx-auto pt-12 text-center">
          <h3 class="mb-8 text-[32px] font-medium">"I joined WeFood because small mom and pop restaurants are the core of our communities."</h3>
          <p class="opacity-50">Phillip Hang, Success Manager</p>
        </div>
      </div>
    </div>
  </section>
</template>