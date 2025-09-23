<template>
  <section class="md:mx-2 -my-10 pt-20 pb-8 lg:py-32 bg-white rounded-[24px] md:rounded-[48px]">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="w-full px-ctx md:px-10 lg:px-20 grid grid-cols-2 gap-10">
        <!-- Content -->
        <dd class="col-span-2 md:col-span-1 grid grid-cols-1 gap-8 md:gap-20">
          <div class="col-span-1">
            <h3 class="mb-6 text-[36px] lg:text-[44px] font-medium leading-tight">
              <span>{{ content.title }}</span>
            </h3>
            <div class="flex">
              <a 
                :href="content.learnMoreLink" 
                class="h-12 px-4 text-white rounded-lg flex items-center ctx-minor transition-colors"
              >
                <span>{{ t('actions.learn_more') }}</span>
                <svg 
                  stroke="currentColor" 
                  stroke-width="4" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-5 h-5 ml-2"
                >
                  <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Features List -->
          <ul class="col-span-1 grid flex-nowrap gap-6">
            <li 
              v-for="feature in features" 
              :key="feature.id" 
              class="w-[330px] max-w-full flex shrink-0"
            >
              <em class="w-8 h-8 mr-4 bg-gray-200 rounded-md flex shrink-0 items-center justify-center">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 49 49" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-gray-600"
                >
                  <g clip-path="url(#clip0_1546_21642)">
                    <path 
                      :d="feature.iconPath" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </em>
              <div class="flex-1 overflow-hidden">
                <p class="text-lg font-medium leading-tight">
                  <span>{{ feature.title }}</span>
                  <span class="text-gray-500">{{ feature.description }}</span>
                </p>
              </div>
            </li>
          </ul>
        </dd>
        
        <!-- Image -->
        <dd class="col-span-2 md:col-span-1">
          <div class="w-full bg-gray-100 rounded-[32px] overflow-hidden" style="height: 386px;">
            <img 
              :src="content.image" 
              :alt="content.imageAlt"
              class="w-full h-full object-cover rounded-[32px]"
            >
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

const content = ref({
  title: 'Delivery without the unfair commissions',
  learnMoreLink: '#',
  image: '/images/home/home_delivery_1.jpg',
  imageAlt: 'Delivery service illustration'
})

const features = ref([
  {
    id: 1,
    title: 'Flat delivery fees. ',
    description: 'Pay a simple flat fee for delivery.',
    iconPath: 'M35.2314 24.4375C35.4016 24.7317 35.499 25.0732 35.499 25.4375C35.499 26.5421 34.6035 27.4375 33.499 27.4375C33.0646 27.4375 32.6625 27.299 32.3346 27.0638M32.3346 27.0638C32.2385 26.9949 32.1487 26.9176 32.0664 26.8331L32.3346 27.0638ZM21 23.1875C21 23.3256 20.8881 23.4375 20.75 23.4375M21 23.1875C21 23.0495 20.8881 22.9375 20.75 22.9375M21 23.1875H20.5M20.75 23.4375C20.6119 23.4375 20.5 23.3256 20.5 23.1875M20.75 23.4375V22.9375M20.5 23.1875C20.5 23.0495 20.6119 22.9375 20.75 22.9375M20.9665 23.0625C21.0356 23.1821 20.9946 23.335 20.875 23.404M20.9665 23.0625C20.8975 22.943 20.7446 22.902 20.625 22.971M20.9665 23.0625L20.5335 23.3125M20.875 23.404C20.7555 23.4731 20.6026 23.4321 20.5335 23.3125M20.875 23.404L20.625 22.971M20.5335 23.3125C20.4645 23.193 20.5055 23.0401 20.625 22.971M20.8751 22.971C20.9947 23.0401 21.0356 23.193 20.9666 23.3126M20.8751 22.971C20.7555 22.902 20.6026 22.943 20.5336 23.0626M20.8751 22.971L20.6251 23.4041M20.9666 23.3126C20.8976 23.4321 20.7447 23.4731 20.6251 23.4041M20.9666 23.3126L20.5336 23.0626M20.6251 23.4041C20.5055 23.335 20.4645 23.1821 20.5336 23.0626M18 19.9375V17.4375C18 16.8852 18.4517 16.4261 18.9964 16.5173C21.2202 16.8896 21.974 18.4375 21.974 18.4375H26.5C29.814 18.4375 32.5 21.1235 32.5 24.4375C32.5 26.2125 31.725 27.8015 30.5 28.9005V31.4375C30.5 31.9898 30.0523 32.4375 29.5 32.4375H27.5C26.9477 32.4375 26.5 31.9898 26.5 31.4375C26.5 30.8852 26.0523 30.4375 25.5 30.4375H23.5C22.9477 30.4375 22.5 30.8852 22.5 31.4375C22.5 31.9898 22.0523 32.4375 21.5 32.4375H19.5C18.9477 32.4375 18.5 31.9898 18.5 31.4375V29.4375C17.594 28.9105 17.025 28.3455 16.5 27.4375H15.5C14.9477 27.4375 14.5 26.9898 14.5 26.4375V23.3725C14.5 22.8202 14.9477 22.3725 15.5 22.3725H16.5C16.838 21.4475 17.282 20.5855 18 19.9375Z'
  },
  {
    id: 2,
    title: '4.5+ star drivers. ',
    description: 'We only send you top-rated WeFood and Uber Eats drivers.',
    iconPath: 'M21.5 25.9375L23.5 27.6875L27 22.6875M21.5 17.9375L24.5 14.9375L27.5 17.9375H31.5V21.9375L34.5 24.9375L31.5 27.9375V31.9375H27.5L24.5 34.9375L21.5 31.9375H17.5V27.9375L14.5 24.9375L17.5 21.9375V17.9375H21.5Z'
  },
  {
    id: 3,
    title: 'Control who delivers.',
    description: 'Use third-party drivers, your own drivers, or both.',
    iconPath: 'M14.5 22.9375L18.2005 17.8493C18.3887 17.5906 18.6893 17.4375 19.0092 17.4375H29.9808C30.3063 17.4375 30.6114 17.5959 30.7987 17.8621L34.5 23.1232M14.5 22.9375H13.5M14.5 22.9375V30.4375C14.5 30.9898 14.9477 31.4375 15.5 31.4375H17.5C18.0523 31.4375 18.5 30.9898 18.5 30.4375V29.4375H30.5V30.4375C30.5 30.9898 30.9477 31.4375 31.5 31.4375H33.5C34.0523 31.4375 34.5 30.9898 34.5 30.4375V23.1232M34.5 23.1232H35.5M18.5 25.4375H20.5M28.5 25.4375H30.5'
  }
])
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