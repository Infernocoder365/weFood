<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<{
  title: string
  imageSrc: string
  linkTo: string
  cardTitle: string
  cardDescription: string
}>(), {
  title: 'Grow your sales with our online ordering platform',
  imageSrc: '/images/product/product/product_pro_4_1.jpg',
  linkTo: '/product/ordering',
  cardTitle: 'Online Ordering',
  cardDescription: 'Thousands of restaurants use WeFood to increase their direct online sales'
})
</script>

<template>
  <section class="py-32 lg:pt-40 -mt-10 px-[5%] bg-footer text-footer">
    <div class="w-full max-w-wrap mx-auto">
      <h3 class="mb-12 text-[38px] lg:text-[48px] text-center font-medium leading-none"><span>{{ props.title }}</span></h3>
      <dl class="w-[720px] max-w-full mx-auto bg-white/[0.122] rounded-2xl overflow-hidden flex">
        <dt class="w-full md:w-[262px] h-[295px] shrink-0 flex"><img class="w-full h-full object-cover" :src="props.imageSrc" :alt="props.cardTitle"></dt>
        <dd class="w-full md:flex-1 md:overflow-hidden"><RouterLink :to="props.linkTo"
            class="w-full h-full p-6 md:pt-5 md:pr-5 md:pl-8 md:pb-8 hover:text-minor hover:underline grid gap-4 place-content-between"><em
              class="w-10 h-10 text-footer rounded-full md:place-self-end flex items-center justify-center"
              style="background-image: linear-gradient(rgba(247, 247, 247, 0.15) 11%, rgba(255, 255, 255, 0.15) 32%, rgba(255, 255, 255, 0.15) 60%, rgba(247, 247, 247, 0.15) 81%);"><svg
                class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                </path>
              </svg></em>
            <div class="col-span-1">
              <h5 class="text-2xl font-medium text-white"><span>{{ props.cardTitle }}</span></h5>
              <p class="text-lg text-white/60 font-medium"><span>{{ props.cardDescription }}</span></p>
            </div>
          </RouterLink></dd>
      </dl>
    </div>
  </section>
</template>