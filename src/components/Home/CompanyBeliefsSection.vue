<template>
  <section class="pt-20 pb-12 lg:py-32 px-ctx lg:px-16 bg-[#F7F6F5] text-gray-900">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="grid grid-cols-3 gap-14 lg:gap-16">
        <!-- Header -->
        <dt class="col-span-3 lg:col-span-1">
          <h3 class="max-w-[560px] mx-auto mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
            <span>{{ t('home.company_beliefs.title') }}</span>
          </h3>
          <p class="max-w-[400px] mx-auto text-lg text-gray-600">
            <span>{{ t('home.company_beliefs.subtitle') }}</span>
          </p>
        </dt>
        
        <!-- Beliefs List -->
        <dd class="col-span-3 lg:col-span-2 lg:row-span-2">
          <ul class="grid grid-cols-1 gap-6">
            <li 
              v-for="belief in beliefs" 
              :key="belief.id" 
              class="pb-8 grid grid-cols-2 gap-4 lg:gap-14 border-b border-gray-300"
            >
              <div class="col-span-1 text-lg font-medium">
                <span>{{ t(belief.titleKey) }}</span>
              </div>
              <div class="col-span-1 text-sm text-gray-600 font-medium">
                <span>{{ t(belief.descKey) }}</span>
              </div>
            </li>
          </ul>
        </dd>
        
        <!-- CEO Info -->
        <dd class="col-span-3 lg:col-span-1">
          <div class="w-full flex items-center lg:items-end">
            <div class="w-32 mr-6 relative flex shrink-0">
              <img 
                class="w-full h-auto rounded-xl hidden lg:block" 
                :src="ceo.image"
                :alt="t('home.company_beliefs.ceo.name')"
              >
              <div class="w-full lg:w-[138px] lg:absolute lg:-left-6 lg:top-24">
                <svg
                  class="w-full h-auto text-red-600 lg:text-white" 
                  viewBox="0 0 140 102" 
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style="mix-blend-mode: exclusion;">
                    <path
                      d="M1 36.7974C4.57502 29.2946 12.8025 22.5437 17.9105 15.421C21.1656 10.882 23.7482 6.07952 27.6362 1.74469C30.008 -0.899685 31.7909 4.26813 32.28 5.30742C40.4514 22.6707 39.4574 43.4536 32.8057 60.9032C28.1203 73.1945 20.5623 85.8376 9.89333 96.4731C8.65323 97.7093 6.69263 100.033 4.68 100.869C2.9609 101.583 2.93705 99.1477 2.92762 99.0877C2.63618 97.2309 2.55931 90.6551 2.57714 89.3189C2.81632 71.3977 5.34785 53.2022 10.4629 35.5906C11.5609 31.8098 12.8836 28.0386 14.2743 24.2991C14.701 23.1517 15.6116 19.9417 16.3333 21.0237C17.1697 22.2774 16.8152 24.393 16.9467 25.6495C17.3739 29.7322 18.0501 33.7909 19.9257 37.7168C23.2489 44.6724 29.3705 51.1576 41.3924 51.508C54.5593 51.8918 65.5949 48.097 74.5124 42.0265C77.1995 40.1973 80.028 38.2575 82.1352 36.1078C83.3546 34.8638 83.8991 33.0758 80.9962 34.9585C79.6535 35.8293 70.078 42.2001 73.1981 43.8079C75.8662 45.1828 82.3048 43.0831 84.4133 42.515C90.8284 40.7864 96.8845 38.5545 102.77 36.1653C104.405 35.5014 108.402 33.0935 109.385 35.3033C112.843 43.079 129.123 43.0068 139 45.0721"
                      stroke="currentColor" 
                      stroke-width="1.5" 
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="text-xs text-gray-600 flex-1 overflow-hidden">
              <p>{{ t('home.company_beliefs.ceo.name') }}</p>
              <p>{{ t('home.company_beliefs.ceo.title') }}</p>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const beliefs = ref([
  { id: 1, titleKey: 'home.company_beliefs.items[0].title', descKey: 'home.company_beliefs.items[0].description' },
  { id: 2, titleKey: 'home.company_beliefs.items[1].title', descKey: 'home.company_beliefs.items[1].description' },
  { id: 3, titleKey: 'home.company_beliefs.items[2].title', descKey: 'home.company_beliefs.items[2].description' }
])

const ceo = ref({
  image: '/images/home/in_guide_1.jpg'
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