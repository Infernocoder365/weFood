<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: String,
  imageSrc: String,
  linkTo: String,
  cardTitle: String,
  cardDescription: String
})

const { t } = useI18n()

// Helper: return default when translation key is missing
const tr = (key, def) => {
  const val = t(key)
  return val && val !== key ? val : def
}

const titleText = computed(() => props.title ?? tr('product.ordering_cta.title', 'Grow your sales with our online ordering platform'))
const imageSrcData = computed(() => props.imageSrc ?? tr('product.ordering_cta.image_src', '/images/product/product/product_pro_4_1.jpg'))
const cardTitleText = computed(() => props.cardTitle ?? tr('product.ordering_cta.card_title', 'Online Ordering'))
const cardDescText = computed(() => props.cardDescription ?? tr('product.ordering_cta.card_desc', 'Thousands of restaurants use WeFood to increase their direct online sales'))
const linkToData = computed(() => props.linkTo ?? '/product/ordering')
const imageAltText = computed(() => tr('product.ordering_cta.image_alt', cardTitleText.value))
</script>

<template>
  <section class="py-32 lg:pt-40 -mt-10 px-[5%] bg-footer text-footer">
    <div class="w-full max-w-wrap mx-auto">
      <h3 class="mb-12 text-[38px] lg:text-[48px] text-center font-medium leading-none"><span>{{ titleText }}</span></h3>
      <dl class="w-[720px] max-w-full mx-auto bg-white/[0.122] rounded-2xl overflow-hidden flex">
        <dt class="w-full md:w-[262px] h-[295px] shrink-0 flex"><img class="w-full h-full object-cover" :src="imageSrcData" :alt="imageAltText"></dt>
        <dd class="w-full md:flex-1 md:overflow-hidden"><RouterLink :to="linkToData"
            class="w-full h-full p-6 md:pt-5 md:pr-5 md:pl-8 md:pb-8 hover:text-minor hover:underline grid gap-4 place-content-between"><em
              class="w-10 h-10 text-footer rounded-full md:place-self-end flex items-center justify-center"
              style="background-image: linear-gradient(rgba(247, 247, 247, 0.15) 11%, rgba(255, 255, 255, 0.15) 32%, rgba(255, 255, 255, 0.15) 60%, rgba(247, 247, 247, 0.15) 81%);"><svg
                class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                </path>
              </svg></em>
            <div class="col-span-1">
              <h5 class="text-2xl font-medium text-white"><span>{{ cardTitleText }}</span></h5>
              <p class="text-lg text-white/60 font-medium"><span>{{ cardDescText }}</span></p>
            </div>
          </RouterLink></dd>
      </dl>
    </div>
  </section>
</template>