<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>{{ $t('wallet.title') }}</span>
          </h1>
        </div>
        <div class="px-[5%] lg:px-0 flex">
          <RouterLink to="/dashboard" class="py-3 flex items-center">
            <em class="w-8 h-8 mr-2 bg-minor/20 text-minor rounded-full flex items-center justify-center">
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z" />
              </svg>
            </em>
            <span>{{ $t('common.back') }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Main -->
    <div data-v-27315d28="" class="w-full lg:min-h-[300px]">
      <section class="px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <!-- list -->
          <div class="py-5">
            <div class="w-full bg-default">
              <div class="w-full p-[5%]">
                <!-- v-for list -->
                <dl v-for="(item, idx) in records" :key="idx" class="flex">
                  <dt class="py-2 mr-3 lg:mr-6">
                    <div class="w-10 sm:w-12 md:w-14 lg:w-20 h-10 sm:h-12 md:h-14 lg:h-20 bg-black text-white font-bold flex items-center justify-center rounded">
                      <span>{{ item.currency }}</span>
                    </div>
                  </dt>
                  <dd class="py-2 border-t border-black flex-1">
                    <div class="w-full flex flex-wrap items-center">
                      <div class="w-full md:w-1/2 md:pr-3">
                        <div class="text-gray-deep flex items-center">
                          <div class="pr-2">
                            <div class="w-16 bg-black text-white text-center">
                              <span>{{ item.currency }}</span>
                            </div>
                          </div>
                          <div class="flex-1">
                            <p class="text-gray-500"><span>{{ item.tag }}</span></p>
                            <h5 class="text-gray-deep"><span>{{ formatAmount(item.amount, item.currency) }}</span></h5>
                          </div>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 md:pl-3">
                        <ul class="text-[15px] block">
                          <li class="w-full flex justify-between">
                            <p class="max-w-[50%]">Time</p>
                            <p class="max-w-[50%] text-theme">{{ item.time }}</p>
                          </li>
                          <li class="w-full flex justify-between">
                            <p class="max-w-[50%]">Type</p>
                            <p class="max-w-[50%] text-green-500">{{ item.type }}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </dd>
                </dl>
                <!-- end list -->
              </div>
            </div>
          </div>
          <!-- //list -->
        </div>
      </section>
      <div class="h-10 md:h-20"></div>
      <div>
        <div class="cursor-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

interface WalletRecord {
  amount: number
  tag: string
  time: string
  type: string
  currency?: string
}

const records = ref<WalletRecord[]>([
  { amount: 437.02, tag: 'Withdrawal', time: '2024-03-31 10:25:56', type: 'completed', currency: 'USD' },
  { amount: 99.98, tag: 'Withdrawal', time: '2024-03-31 10:25:56', type: 'completed', currency: 'USD' },
  { amount: 405.62, tag: 'Withdrawal', time: '2024-03-31 10:25:56', type: 'completed', currency: 'USD' },
  { amount: 0.36, tag: 'Withdrawal', time: '2024-03-31 10:25:56', type: 'completed', currency: 'USD' },
  { amount: 190.86, tag: 'Withdrawal', time: '2024-03-31 10:25:56', type: 'completed', currency: 'USD' },
  { amount: 918.76, tag: 'Withdrawal', time: '2024-03-31 10:25:56', type: 'completed', currency: 'USD' },
])

function formatAmount(val: number, currency = 'USD') {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(val)
  } catch (e) {
    return `${currency} ${val.toFixed(2)}`
  }
}
</script>