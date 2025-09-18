<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>Evaluate</span>
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
            <span>Return to previous page</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Main -->
    <div class="w-full lg:min-h-[300px]">
      <section class="py-10 lg:py-20 px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <section class="w-ful max-w-[970px] mx-auto">
            <!-- Account Balance card -->
            <div class="p-3 mb-4 bg-[#ebebeb] text-body">
              <h6 class="text-gray-deep"><span>Account Balance</span></h6>
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <p class="text-3xl font-bold"><span>1,032.72</span></p>
                <RouterLink to="/recharge" class="px-3 py-2 bg-black text-white text-sm flex items-center rounded">
                  <img
                        src="/images/access/icon-recharge-w.svg" class="w-5 h-5 mr-1">
                  <span>Deposit</span>
                </RouterLink>
              </div>
            </div>

            <!-- Stats -->
            <ul class="mb-8 grid grid-cols-12 gap-4 md:gap-6">
              <li class="lg:col-span-4 col-span-6 px-3 py-2 md:border-l border-black first:border-l-0">
                <h6 class="mb-2 text-xs text-gray-default"><span>Data</span></h6>
                <p class="text-xl text-gray-deep"><span>1/30</span></p>
              </li>
              <li class="lg:col-span-4 col-span-6 px-3 py-2 md:border-l border-black first:border-l-0">
                <h6 class="mb-2 text-xs text-gray-default"><span>Today's earnings (USD)</span></h6>
                <p class="text-xl text-gray-deep"><span>2.72</span></p>
              </li>
              <li class="lg:col-span-4 col-span-6 px-3 py-2 md:border-l border-black first:border-l-0">
                <h6 class="mb-2 text-xs text-gray-default"><span>Frozen Amount (USD)</span></h6>
                <p class="text-xl text-gray-deep"><span>0.00</span></p>
              </li>
            </ul>

            <!-- Begin button -->
            <div class="mb-8 flex justify-center">
              <div>
                <button class="min-w-[330px] h-9 bg-black text-white uppercase" @click="showModal = true">
                  <span>Begin</span>
                </button>
              </div>
            </div>

            <!-- Tips -->
            <div class="w-full max-w-[670px] mx-auto">
              <p>1. Please proceed with initiating the withdrawal process upon completion of all your daily orders.</p>
              <p>
                2. Our system algorithm ensures that the distribution of all products is conducted in a completely
                randomized manner, offering an equitable and unbiased process.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>

    <!-- Modal from access-bigin-modal.html -->
    <div v-if="showModal" class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 p-4">
      <div role="dialog" tabindex="0"
           class="van-popup van-popup--center w-[calc(100%-32px)] max-w-[800px] max-h-[90%] bg-popup text-popup rounded-xl overflow-auto">
        <div class="flex items-center">
          <div class="p-4 flex-1 overflow-hidden">
            <h5>Orders</h5>
          </div>
          <button class="p-4 flex shrink-0" @click="showModal = false" aria-label="Close">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z">
              </path>
            </svg>
          </button>
        </div>
        <div class="p-4">
          <dl class="grid grid-cols-5 gap-6">
            <dt class="col-span-5 md:col-span-2">
              <div class="van-image w-full aspect-[1/1] rounded-md overflow-hidden shrink-0">
                <img class="van-image__img" style="object-fit: contain;"
                     src="https://static.uuianxpxp.icu/images/2025/09/03/image_1756869362_GDZInZ8S.jpg"
                     alt="Product" />
              </div>
            </dt>
            <dd class="col-span-5 md:col-span-3">
              <h5 class="mb-2 text-2xl md:text-3xl font-bold line-clamp-2"><span>kitchenman nasi lemak</span></h5>
              <p class="text-gray-deep font-medium"><span>USD 201.99</span></p>
              <p class="text-gray-deep"><span>Qty: 3</span></p>
              <ol class="p-3 mt-3 bg-gray-light border border-popup rounded-xl leading-7 block">
                <li class="flex justify-between">
                  <div class="max-w-[50%] text-gray-deep"><span>Date Created</span></div>
                  <div class="max-w-[50%] text-right"><span>2025-09-18 | 05:31 AM</span></div>
                </li>
                <li class="flex justify-between">
                  <div class="max-w-[50%] text-gray-deep"><span>Total Amount</span></div>
                  <div class="max-w-[50%] text-right"><span>USD 605.97</span></div>
                </li>
                <li class="flex justify-between">
                  <div class="max-w-[50%] text-gray-deep"><span>Commission</span></div>
                  <div class="max-w-[50%] text-right text-minor"><span>USD 3.03</span></div>
                </li>
              </ol>
              <div class="p-3 mt-3 bg-gray-light border border-popup rounded-xl leading-7 block">
                <h6 class="text-center"><span>Rate Your Experience</span></h6>
                <div class="mt-3 flex justify-center">
                  <div role="radiogroup" class="van-rate" tabindex="0" aria-disabled="false" aria-readonly="false">
                    <div role="radio" class="van-rate__item" tabindex="0" aria-setsize="5" aria-posinset="1" aria-checked="true">
                      <i class="van-badge__wrapper van-icon van-icon-star van-rate__icon van-rate__icon--full" style="color: rgb(255, 212, 77); font-size: 46px;"></i>
                    </div>
                    <div role="radio" class="van-rate__item" tabindex="0" aria-setsize="5" aria-posinset="2" aria-checked="true">
                      <i class="van-badge__wrapper van-icon van-icon-star van-rate__icon van-rate__icon--full" style="color: rgb(255, 212, 77); font-size: 46px;"></i>
                    </div>
                    <div role="radio" class="van-rate__item" tabindex="0" aria-setsize="5" aria-posinset="3" aria-checked="true">
                      <i class="van-badge__wrapper van-icon van-icon-star van-rate__icon van-rate__icon--full" style="color: rgb(255, 212, 77); font-size: 46px;"></i>
                    </div>
                    <div role="radio" class="van-rate__item" tabindex="0" aria-setsize="5" aria-posinset="4" aria-checked="true">
                      <i class="van-badge__wrapper van-icon van-icon-star van-rate__icon van-rate__icon--full" style="color: rgb(255, 212, 77); font-size: 46px;"></i>
                    </div>
                    <div role="radio" class="van-rate__item" tabindex="0" aria-setsize="5" aria-posinset="5" aria-checked="true">
                      <i class="van-badge__wrapper van-icon van-icon-star van-rate__icon van-rate__icon--full" style="color: rgb(255, 212, 77); font-size: 46px;"></i>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn-minor mt-5"><span>Submit</span></button>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const showModal = ref(false)
</script>