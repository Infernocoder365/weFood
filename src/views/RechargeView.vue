<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>Recharge</span>
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
      <section class="px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <section class="w-full max-w-3xl mx-auto py-10 lg:py-20">
            <section class="mx-ctx bg-default text-default rounded-xl mt-4 p-4 rounded-lg">
              <p class="text-sm">Account Balance</p>
              <p class="mt-2 font-bold">
                <span class="text-2xl">426.75</span>
                <small class="text-sm">&nbsp;USD</small>
              </p>
            </section>

            <div class="px-ctx py-4">
              <div class="text-sm">
                <div class="mb-5">
                  <p class="ui-input__title">Recharge channels</p>
                  <div class="ui-input w-full h-11 px-2 transition-all duration-300 relative flex items-center">
                    <div class="h-full flex items-center flex-shrink-0"></div>
                    <div
                      class="px-1 flex-1 overflow-hidden  transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
                      <select v-model="channel"
                        class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent w-full">
                        <option value="" disabled>Select here</option>
                        <option value="usdt_trc20">USDT (TRC20)</option>
                        <option value="usdt_erc20">USDT (ERC20)</option>
                        <option value="card">Credit Card</option>
                        <option value="bank">Bank Transfer</option>
                      </select>
                    </div>
                    <div class="h-full flex items-center flex-shrink-0"></div>
                  </div>
                </div>
                <div class="mb-5">
                  <p class="ui-input__title">Recharge amount</p>
                  <div class="ui-input w-full h-11 px-2 transition-all duration-300 relative flex items-center">
                    <div class="h-full flex items-center flex-shrink-0"></div>
                    <div
                      class="px-1 flex-1 overflow-hidden  transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
                      <input type="number" placeholder="Type here"
                        class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent w-full" />
                    </div>
                    <div class="h-full flex items-center flex-shrink-0"></div>
                  </div>
                </div>
                <div class="mb-5">
                  <p class="ui-input__title">Recharge voucher</p>
                  <div class="van-uploader bg-transparent text-default rounded-md">
                    <div class="van-uploader__wrapper">
                      <div class="w-[120px] h-[120px] bg-white flex items-center justify-center">
                        <svg class="w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M4 6a2 2 0 0 1 2-2h2l1-1h6l1 1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                        </svg>
                      </div>
                      <div class="pt-3">
                        <button class="w-full bg-black text-white px-1 py-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const channel = ref('')
</script>