<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>Withdrawal</span>
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
                  <p class="ui-input__title">Withdrawal amount</p>
                  <div class="ui-input w-full h-11 px-2 transition-all duration-300 relative flex items-center">
                    <div class="h-full flex items-center flex-shrink-0"></div>
                    <div
                      class="px-1 flex-1 overflow-hidden flex items-center border-b border-solid focus-within:!border-black">
                      <input type="number" placeholder="Type here"
                        class="w-full h-8 bg-transparent text-base placeholder:text-sm text-inherit outline-none">
                    </div>
                    <div class="h-full flex items-center flex-shrink-0"></div>
                  </div>
                </div>

                <div class="mb-1 text-sm flex">
                  <span>Wallet address</span>
                  <button class="h-6 px-2 ml-2 text-xs bg-black text-white rounded-sm align-middle flex items-center">
                    <!-- Plus icon -->
                    <svg class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                    </svg>
                    <span>New</span>
                  </button>
                </div>

                <div class="mb-5">
                  <div class="ui-input w-full h-11 px-2 transition-all duration-300 relative flex items-center">
                    <div class="h-full flex items-center flex-shrink-0"></div>
                    <div class="px-1 flex-1 overflow-hidden flex items-center border-b border-solid focus-within:!border-black">
                      <select v-model="walletAddress" class="w-full h-8 bg-transparent text-base text-inherit outline-none">
                        <option value="" disabled>Select here</option>
                        <option value="trc20:Te6eL1pn">TRC20 • Te6eL1pn…</option>
                        <option value="erc20:0xA7c9">ERC20 • 0xA7c9…</option>
                      </select>
                    </div>
                    <div class="h-full flex items-center flex-shrink-0"></div>
                  </div>
                </div>

                <div class="mb-5">
                  <p class="ui-input__title">Fund password</p>
                  <div class="ui-input w-full h-11 px-2 transition-all duration-300 relative flex items-center">
                    <div class="h-full flex items-center flex-shrink-0"></div>
                    <div
                      class="px-1 flex-1 overflow-hidden flex items-center border-b border-solid focus-within:!border-black">
                      <input type="password" placeholder="Type here"
                             class="w-full h-8 bg-transparent text-base placeholder:text-sm text-inherit outline-none">
                    </div>
                    <button class="px-1 h-full opacity-70 bg-transparent flex items-center flex-shrink-0" aria-label="toggle password">
                      <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z" />
                      </svg>
                    </button>
                    <div class="h-full flex items-center flex-shrink-0"></div>
                  </div>
                </div>

                <div class="pt-3">
                  <button class="bg-black text-white py-2 w-full">Submit</button>
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

const walletAddress = ref('')
</script>