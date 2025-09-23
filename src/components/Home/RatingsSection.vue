<template>
  <section class="py-[100px] lg:py-[160px] px-ctx overflow-hidden  bg-[#F7F6F5]">
    <div class="w-full max-w-wrap mx-auto">
      <div class="lg:text-center">
        <h3 class="max-w-[600px] mx-auto mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
          <span>{{ $t('home.ratings.title') }}</span>
        </h3>
      </div>
      
      <!-- Award Badges -->
      <div class="flex justify-center">
        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <li class="w-[190px] py-2 pl-2 pr-3 bg-gray-body rounded-xl flex items-center">
            <em class="w-10 h-10 mr-2 shrink-0 flex">
              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="white"></rect>
                <g clip-path="url(#clip0_3003_13801)">
                  <path d="M5 15.2389H12.605H17.2288V10.6658L5 15.2389Z" fill="#FF9D28"></path>
                  <path d="M17.2266 10.6656V26.8375L22.9978 8.5L17.2266 10.6656Z" fill="#68C5ED"></path>
                  <path d="M17.2253 15.2444H12.6016L17.2253 26.8375V15.2444Z" fill="#044D80"></path>
                  <path d="M5 15.2388L13.7919 18.2144L12.605 15.2388H5Z" fill="#E54747"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3003_13801">
                    <rect width="18" height="18.3375" fill="white" transform="translate(5 8.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </em>
            <div class="text-xs flex-1 overflow-hidden">
              <span>{{ $t('home.ratings.badge1') }}</span>
            </div>
          </li>
          <li class="w-[190px] py-2 pl-2 pr-3 bg-gray-body rounded-xl flex items-center">
            <em class="w-10 h-10 mr-2 shrink-0 flex">
              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3003_13808)">
                  <circle cx="16" cy="16" r="16" fill="white"></circle>
                  <path d="M16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM16.1627 6.85733C16.7627 6.85733 17.3627 6.916 17.952 7.03333L16.1627 10.7747C13.2827 10.7733 10.9373 13.12 10.9373 16C10.9373 18.88 13.284 21.2267 16.164 21.2267C17.4133 21.2267 18.6227 20.776 19.568 19.9587L21.5453 23.388C20.182 24.3812 18.5703 24.9779 16.8888 25.1119C15.2073 25.2459 13.5216 24.912 12.0181 24.1472C10.5146 23.3824 9.25205 22.2165 8.37016 20.7787C7.48827 19.3407 7.02144 17.6868 7.02133 16C7.02133 13.5756 7.98444 11.2504 9.69877 9.53611C11.4131 7.82177 13.7383 6.85733 16.1627 6.85733ZM20.8267 7.51067C20.8383 7.51055 20.8497 7.51055 20.8613 7.51067C21.4307 7.51067 21.9173 7.66133 22.3293 7.964C22.7427 8.26933 22.9507 8.692 22.9507 9.22533C22.9507 10.0773 22.4707 10.5987 21.5707 11.06L21.068 11.3147C20.5307 11.5867 20.2653 11.828 20.192 12.256H22.9253V13.3893H18.7907V13.1973C18.7907 12.496 18.928 11.9173 19.2093 11.456C19.4907 10.996 19.9773 10.5893 20.6787 10.2333L21.0013 10.0773C21.5707 9.78933 21.7187 9.54267 21.7187 9.244C21.7187 8.88933 21.4147 8.63333 20.9187 8.63333C20.332 8.63333 19.888 8.93733 19.58 9.55867L18.7907 8.76533C18.964 8.39333 19.2413 8.096 19.616 7.86533C19.9779 7.63493 20.3977 7.51195 20.8267 7.51067ZM18.0347 14.6947H22.56L24.8227 18.6107L22.56 22.5307L20.2973 18.6107H15.7733L18.0347 14.6947Z" fill="#FF492C"></path>
                </g>
                <defs>
                  <clipPath id="clip0_3003_13808">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </em>
            <div class="text-xs flex-1 overflow-hidden">
              <span>{{ $t('home.ratings.badge2') }}</span>
            </div>
          </li>
        </ul>
      </div>
      
      <!-- Customer Reviews Columns -->
      <dl class="w-full mt-8 md:mt-16 flex justify-center">
        <dd class="w-0 max-w-full relative">
          <div class="w-[334px] pt-10 absolute right-2 top-0" style="mask-image: linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 90%);">
            <ul>
              <li v-for="review in leftColumnReviews" :key="review.id" class="w-full py-5 pl-5 pr-8 mb-2 bg-default text-default rounded-2xl">
                <div class="mb-2 flex">
                  <svg v-for="star in 5" :key="star" class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                </div>
                <p class="mb-2"><span>{{ review.text }}</span></p>
                <div class="flex items-center">
                  <div class="van-image van-image--round w-6 h-6 mr-2">
                    <img v-if="review.avatar" class="van-image__img" style="object-fit: cover;" :src="review.avatar" :alt="review.name" />
                  </div>
                  <span class="text-xd">{{ review.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </dd>
        <dd class="w-[334px] max-w-full relative">
          <div class="w-full" style="mask-image: linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 90%);">
            <ul>
              <li v-for="review in centerColumnReviews" :key="review.id" class="w-full py-5 pl-5 pr-8 mb-2 bg-default text-default rounded-2xl">
                <div class="mb-2 flex">
                  <svg v-for="star in 5" :key="star" class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                </div>
                <p class="mb-2"><span>{{ review.text }}</span></p>
                <div class="flex items-center">
                  <div class="van-image van-image--round w-6 h-6 mr-2">
                    <img v-if="review.avatar" class="van-image__img" style="object-fit: cover;" :src="review.avatar" :alt="review.name" />
                  </div>
                  <span class="text-xd">{{ review.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </dd>
        <dd class="w-0 max-w-full relative">
          <div class="w-[334px] pt-10 absolute left-2 top-0" style="mask-image: linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 90%);">
            <ul>
              <li v-for="review in rightColumnReviews" :key="review.id" class="w-full py-5 pl-5 pr-8 mb-2 bg-default text-default rounded-2xl">
                <div class="mb-2 flex">
                  <svg v-for="star in 5" :key="star" class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                </div>
                <p class="mb-2"><span>{{ review.text }}</span></p>
                <div class="flex items-center">
                  <div class="van-image van-image--round w-6 h-6 mr-2">
                    <img v-if="review.avatar" class="van-image__img" style="object-fit: cover;" :src="review.avatar" :alt="review.name" />
                  </div>
                  <span class="text-xd">{{ review.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
      
      <!-- See More Reviews Button -->
      <div class="pt-6 flex justify-center">
        <a href="#" class="h-12 px-4 ctx-minor rounded-lg flex items-center">
          <span>{{ $t('home.ratings.see_more_reviews') }}</span>
          <svg stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const leftColumnReviews = computed(() => {
  const items = tm('home.ratings.reviews.left') ?? []
  return [
    { id: 1, text: items?.[0]?.text ?? '', name: items?.[0]?.name ?? '', avatar: '/images/home/in_review_l1.jpeg' },
    { id: 2, text: items?.[1]?.text ?? '', name: items?.[1]?.name ?? '', avatar: '/images/home/in_review_l2.jpeg' },
    { id: 3, text: items?.[2]?.text ?? '', name: items?.[2]?.name ?? '', avatar: '/images/home/in_review_l3.jpeg' },
  ]
})

const centerColumnReviews = computed(() => {
  const items = tm('home.ratings.reviews.center') ?? []
  return [
    { id: 4, text: items?.[0]?.text ?? '', name: items?.[0]?.name ?? '', avatar: '/images/home/in_review_c1.jpeg' },
    { id: 5, text: items?.[1]?.text ?? '', name: items?.[1]?.name ?? '', avatar: '/images/home/in_review_c2.jpeg' },
    { id: 6, text: items?.[2]?.text ?? '', name: items?.[2]?.name ?? '', avatar: '/images/home/in_review_c3.jpeg' },
  ]
})

const rightColumnReviews = computed(() => {
  const items = tm('home.ratings.reviews.right') ?? []
  return [
    { id: 7, text: items?.[0]?.text ?? '', name: items?.[0]?.name ?? '', avatar: '/images/home/in_review_r1.jpeg' },
    { id: 8, text: items?.[1]?.text ?? '', name: items?.[1]?.name ?? '', avatar: '/images/home/in_review_r2.jpeg' },
    { id: 9, text: items?.[2]?.text ?? '', name: items?.[2]?.name ?? '', avatar: '/images/home/in_review_r3.jpeg' },
  ]
})
</script>

<style scoped>
.max-w-wrap {
  max-width: 1200px;
}

.px-ctx {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .px-ctx {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .px-ctx {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
</style>