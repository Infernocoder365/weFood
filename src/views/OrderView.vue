<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>Orders</span>
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

    <div data-v-27315d28="" class="w-full lg:min-h-[300px]">
      <section class="px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <section class="py-5">
            <!-- Tabs: Tailwind implementation -->
            <div class="py-2 bg-default text-default">
              <div role="tablist" aria-orientation="horizontal" class="flex items-center gap-6 border-b border-black/10">
                <button
                  v-for="(tab, idx) in tabs"
                  :key="tab"
                  type="button"
                  @click="activeTab = idx"
                  class="relative -mb-px pb-2 text-sm sm:text-base whitespace-nowrap border-b-2"
                  :class="activeTab === idx ? 'border-black text-black font-medium' : 'border-transparent text-gray-500 hover:text-black'"
                >
                  <span>{{ $t(tab) }}</span>
                </button>
              </div>
            </div>
          </section>
          <div role="feed" class="van-list" aria-busy="false">
            <dl class="flex">
              <dt class="py-2 mr-3 lg:mr-6 shrink-0">
                <div>
                  <div class="van-image w-14 sm:w-20 md:w-[100px] lg:w-[190px] min-h-[3.5rem]"><img
                      class="van-image__img" style="object-fit: cover;"
                      data-src="https://static.uuianxpxp.icu/images/2025/09/03/image_1756869362_GDZInZ8S.jpg"
                      src="/images/order/food1.jpg" lazy="loaded"><!----><!----></div>
                </div>
              </dt>
              <dd class="py-2 border-t border-black flex-1 overflow-hidden">
                <div class="w-full flex flex-wrap">
                  <div class="w-full md:w-1/2 md:pr-3">
                    <h5 class="text-gray-deep line-clamp-2"><span>kitchenman nasi lemak</span></h5>
                  </div>
                  <div class="w-full md:w-1/2 md:pl-3">
                    <ul class="text-[15px] block">
                      <li class="w-full flex justify-between">
                        <p class="max-w-[50%]">Total Amount</p>
                        <p class="max-w-[50%] text-theme">USD 605.97</p>
                      </li>
                      <li class="w-full flex justify-between">
                        <p class="max-w-[50%]">Commission</p>
                        <p class="max-w-[50%] text-green-500">USD 3.03</p>
                      </li>
                      <li class="w-full flex justify-between">
                        <p class="max-w-[50%]">Status</p>
                        <p class="max-w-[50%] text-green-500">Pending</p>
                      </li>
                    </ul><button class="w-full bg-black text-white py-2 mt-6"><span>Submit</span></button>
                  </div>
                </div>
              </dd>
            </dl>
            <dl class="flex">
              <dt class="py-2 mr-3 lg:mr-6 shrink-0">
                <div>
                  <div class="van-image w-14 sm:w-20 md:w-[100px] lg:w-[190px] min-h-[3.5rem]"><img
                      class="van-image__img" style="object-fit: cover;"
                      data-src="https://cdn2.mallattachment.link/p001/egrhdo6qaaduaroyypbbk9iy.jpeg"
                      src="/images/order/food2.jpeg" lazy="loaded"><!----><!----></div>
                </div>
              </dt>
              <dd class="py-2 border-t border-black flex-1 overflow-hidden">
                <div class="w-full flex flex-wrap">
                  <div class="w-full md:w-1/2 md:pr-3">
                    <h5 class="text-gray-deep line-clamp-2"><span>荣胜鱼头米粉（Rongsheng Fish Head Bihun）</span></h5>
                  </div>
                  <div class="w-full md:w-1/2 md:pl-3">
                    <ul class="text-[15px] block">
                      <li class="w-full flex justify-between">
                        <p class="max-w-[50%]">Total Amount</p>
                        <p class="max-w-[50%] text-theme">USD 544.00</p>
                      </li>
                      <li class="w-full flex justify-between">
                        <p class="max-w-[50%]">Commission</p>
                        <p class="max-w-[50%] text-green-500">USD 2.72</p>
                      </li>
                      <li class="w-full flex justify-between">
                        <p class="max-w-[50%]">Status</p>
                        <p class="max-w-[50%] text-green-500">Completed</p>
                      </li>
                    </ul><!---->
                  </div>
                </div>
              </dd>
            </dl>
            <div class="w-full text-center text-gray-600">No more data</div><!---->
            <div class="van-list__placeholder"></div>
          </div>
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

const tabs = ['order.tabs.all', 'order.tabs.pending', 'order.tabs.freezing', 'order.tabs.completed']
const activeTab = ref(0)
</script>