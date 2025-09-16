<template>
  <section class="pt-32 pb-16 lg:py-40 px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <div class="mb-10 lg:mb-24 text-center flex flex-col items-center">
            <h3 class="w-[450px] max-w-full mb-3 lg:mb-4 text-[42px] lg:text-[56px] font-medium leading-none">
              <span>How does WeFood compare?</span>
        </h3>
        <p class="w-[500px] max-w-full text-base text-gray-deep font-medium">
              <span>There's a lot of restaurant tech out there. We know that choosing the right partners is an important choice. We want you to help you choose what's best for your restaurant, even if it’s not us.</span>
        </p>
      </div>
      <ul class="grid grid-cols-12 gap-6">
            <li v-for="item in items" :key="item.name" class="col-span-12 sm:col-span-6 lg:col-span-4 p-4 bg-default text-default rounded-2xl flex items-center">
          <em class="w-14 h-14 mr-4 flex shrink-0">
            <img :src="item.icon" class="w-14 h-14 object-contain rounded-xl" />
          </em>
          <div class="flex-1 overflow-hidden">
            <p class="text-xd text-gray-default"><span>WeFood vs</span></p>
            <h5 class="text-xl font-medium"><span>{{ item.name }}</span></h5>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
interface CompareItem { name: string; icon: string }
const base = '/images/resources/owner/'
const items: CompareItem[] = [
  { name: 'BentoBox', icon: base + 'resources_owner_1_1.svg' },
  { name: 'ChowNow', icon: base + 'resources_owner_1_2.svg' },
  { name: 'Clover', icon: base + 'resources_owner_1_3.svg' },
  { name: 'WeFood', icon: base + 'resources_owner_1_4.svg' },
  { name: 'Grubhub', icon: base + 'resources_owner_1_5.svg' },
  { name: 'Menufy', icon: base + 'resources_owner_1_6.svg' },
  { name: 'Popmenu', icon: base + 'resources_owner_1_7.svg' },
  { name: 'Slice', icon: base + 'resources_owner_1_8.png' },
  { name: 'SpotHopper', icon: base + 'resources_owner_1_9.png' },
  { name: 'Square', icon: base + 'resources_owner_1_10.png' },
  { name: 'Toast', icon: base + 'resources_owner_1_11.png' },
  { name: 'Uber Eats', icon: base + 'resources_owner_1_12.png' },
]
</script>
