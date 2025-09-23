<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const cards = computed(() => tm('pricing.why.cards') ?? [])
</script>

<template>
  <section class="pt-32 md:pt-40 lg:pb-20 px-ctx md:px-14">
            <div class="w-full max-w-wrap mx-auto">
              <div class="mb-14 text-center">
                <h3 class="max-w-[650px] mx-auto mb-6 text-[36px] lg:text-[44px] font-medium leading-tight"><span>{{ $t('pricing.why.title') }}</span></h3>
                <p class="max-w-[650px] mx-auto text-xd text-gray-deep"><span>{{ $t('pricing.why.subtitle') }}</span></p>
              </div>
              <ul class="grid grid-cols-4 gap-2">
                <li class="lg:col-span-2 lg:row-span-2 col-span-4">
                  <div
                    class="w-full h-full p-5 bg-default text-default rounded-[24px] grid grid-cols-1 gap-10 place-content-between">
                    <div class="col-span-1 flex">
                      <div class="flex-grow">
                        <h5 class="max-w-[240px] text-xl font-medium"><span>{{ cards[0]?.title }}</span>
                        </h5>
                      </div><em class="w-12 h-12 ml-4 bg-minor/20 text-minor rounded-full flex shrink-0"><svg
                          width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M25.469 15.2981L25.5 15.2361L25.531 15.2981C25.6762 15.5884 25.9116 15.8238 26.2019 15.969L26.2639 16L26.2019 16.031C25.9116 16.1762 25.6762 16.4116 25.531 16.7019L25.5 16.7639L25.469 16.7019C25.3238 16.4116 25.0884 16.1762 24.7981 16.031L24.7361 16L24.7981 15.969C25.0884 15.8238 25.3238 15.5884 25.469 15.2981Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
                          </path>
                          <path
                            d="M20 17.193C20.0857 17.3107 20.1893 17.4143 20.307 17.5C20.1893 17.5857 20.0857 17.6893 20 17.807C19.9143 17.6893 19.8107 17.5857 19.693 17.5C19.8107 17.4143 19.9143 17.3107 20 17.193Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
                          </path>
                          <path
                            d="M17.5 22H31.5V32C31.5 32.5523 31.0523 33 30.5 33H18.5C17.9477 33 17.5 32.5523 17.5 32V22Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                          <path d="M22.5 26H26.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                          <path d="M31.4969 17L28.7969 21.5" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></em>
                    </div>
                    <div class="col-span-1">
                      <p class="text-gray-deep text-base font-medium"><span>{{ cards[0]?.desc }}</span></p>
                    </div>
                  </div>
                </li>
                <li class="lg:col-span-2 col-span-4">
                  <div
                    class="w-full h-full p-5 bg-default text-default rounded-[24px] grid grid-cols-1 gap-10 place-content-between">
                    <div class="col-span-1 flex">
                      <div class="flex-grow">
                        <h5 class="max-w-[240px] text-xl font-medium"><span>{{ cards[1]?.title }}</span></h5>
                      </div><em class="w-12 h-12 ml-4 bg-minor/20 text-minor rounded-full flex shrink-0"><svg
                          width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19.5428 19C20.824 17.7641 22.5895 17 24.5 17C28.366 17 31.5 20.134 31.5 24C31.5 24.5523 31.9477 25 32.5 25C33.0523 25 33.5 24.5523 33.5 24C33.5 19.0294 29.4706 15 24.5 15C22.2235 15 20.1078 15.8463 18.4999 17.2442V16C18.4999 15.4477 18.0522 15 17.4999 15C16.9476 15 16.4999 15.4477 16.4999 16V19.5C16.4999 20.3284 17.1715 21 17.9999 21H21.2499C21.8022 21 22.2499 20.5523 22.2499 20C22.2499 19.4477 21.8022 19 21.2499 19H19.5428Z"
                            fill="currentColor"></path>
                          <path
                            d="M17.5 24C17.5 23.4477 17.0523 23 16.5 23C15.9477 23 15.5 23.4477 15.5 24C15.5 28.9706 19.5294 33 24.5 33C26.782 33 28.9024 32.1496 30.5117 30.7457V32C30.5117 32.5523 30.9594 33 31.5117 33C32.064 33 32.5117 32.5523 32.5117 32V28.5C32.5117 27.6716 31.8401 27 31.0117 27H27.5117C26.9594 27 26.5117 27.4477 26.5117 28C26.5117 28.5523 26.9594 29 27.5117 29H29.4572C28.176 30.2359 26.4105 31 24.5 31C20.634 31 17.5 27.866 17.5 24Z"
                            fill="currentColor"></path>
                        </svg></em>
                    </div>
                    <div class="col-span-1">
                      <p class="text-gray-deep text-base font-medium"><span>{{ cards[1]?.desc }}</span></p>
                    </div>
                  </div>
                </li>
                <li class="lg:col-span-1 col-span-4">
                  <div
                    class="w-full h-full p-5 bg-default text-default rounded-[24px] grid grid-cols-1 gap-10 place-content-between">
                    <div class="col-span-1 flex">
                      <div class="flex-grow">
                        <h5 class="max-w-[240px] text-xl font-medium"><span>{{ cards[2]?.title }}</span></h5>
                      </div><em class="w-12 h-12 ml-4 bg-minor/20 text-minor rounded-full flex shrink-0"><svg
                          width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20.9997 24.9999L22.9997 26.7499L26.4997 21.7499M21.5855 16.4142L22.5855 15.4142C23.3665 14.6331 24.6329 14.6331 25.4139 15.4142L26.4139 16.4142C26.789 16.7892 27.2977 16.9999 27.8281 16.9999H28.9997C30.1043 16.9999 30.9997 17.8954 30.9997 18.9999V20.1715C30.9997 20.7019 31.2104 21.2107 31.5855 21.5857L32.5855 22.5857C33.3665 23.3668 33.3665 24.6331 32.5855 25.4142L31.5855 26.4142C31.2104 26.7892 30.9997 27.2979 30.9997 27.8284V28.9999C30.9997 30.1045 30.1043 30.9999 28.9997 30.9999H27.8281C27.2977 30.9999 26.789 31.2107 26.4139 31.5857L25.4139 32.5857C24.6329 33.3668 23.3665 33.3668 22.5855 32.5857L21.5855 31.5857C21.2104 31.2107 20.7017 30.9999 20.1713 30.9999H18.9997C17.8951 30.9999 16.9997 30.1045 16.9997 28.9999V27.8284C16.9997 27.2979 16.789 26.7892 16.4139 26.4142L15.4139 25.4142C14.6329 24.6331 14.6329 23.3668 15.4139 22.5857L16.4139 21.5857C16.789 21.2107 16.9997 20.7019 16.9997 20.1715V18.9999C16.9997 17.8954 17.8951 16.9999 18.9997 16.9999H20.1713C20.7017 16.9999 21.2104 16.7892 21.5855 16.4142Z"
                            stroke="currentCOlor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                        </svg></em>
                    </div>
                    <div class="col-span-1">
                      <p class="text-gray-deep text-base font-medium"><span>{{ cards[2]?.desc }}</span></p>
                    </div>
                  </div>
                </li>
                <li class="lg:col-span-1 col-span-4">
                  <div
                    class="w-full h-full p-5 bg-default text-default rounded-[24px] grid grid-cols-1 gap-10 place-content-between">
                    <div class="col-span-1 flex">
                      <div class="flex-grow">
                        <h5 class="max-w-[240px] text-xl font-medium"><span>{{ cards[3]?.title }}</span></h5>
                      </div><em class="w-12 h-12 ml-4 bg-minor/20 text-minor rounded-full flex shrink-0"><svg
                          width="100%" height="100%" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.5 23.5C14.5 22.2787 15.3757 21.262 16.5335 21.0435C16.9151 17.0404 20.5084 14 24.75 14C28.9916 14 32.5849 17.0404 32.9665 21.0435C34.1243 21.262 35 22.2787 35 23.5V27C35 28.1467 34.228 29.113 33.1755 29.4077C32.7428 32.0133 30.4784 34 27.75 34H26C24.6193 34 23.5 32.8807 23.5 31.5V31C23.5 30.4477 23.9477 30 24.5 30C25.0523 30 25.5 30.4477 25.5 31V31.5C25.5 31.7761 25.7239 32 26 32H27.75C29.3355 32 30.6748 30.9457 31.1051 29.5H31C30.4477 29.5 30 29.0523 30 28.5V22C30 21.4656 30.4193 21.029 30.9468 21.0014C30.5505 18.2282 27.9838 16 24.75 16C21.5162 16 18.9495 18.2282 18.5532 21.0014C19.0807 21.029 19.5 21.4656 19.5 22V28.5C19.5 29.0523 19.0523 29.5 18.5 29.5H17C15.6193 29.5 14.5 28.3807 14.5 27V23.5Z"
                            fill="currentColor"></path>
                        </svg></em>
                    </div>
                    <div class="col-span-1">
                      <p class="text-gray-deep text-base font-medium"><span>{{ cards[3]?.desc }}</span></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
</template>

<style scoped>
</style>