<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none"><span>Change login password</span>
      </h1>
    </div>
    <div class="px-[5%] lg:px-0 flex">
      <a href="javascript:;" class="py-3 flex items-center" @click.prevent="goBack">
        <em class="w-8 h-8 mr-2 bg-minor/20 text-minor rounded-full flex items-center justify-center">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z" />
          </svg>
        </em>
        <span>Return to previous page</span>
      </a>
    </div>
  </section>

  <div class="w-full lg:min-h-[300px]">
    <section class="py-10 px-[5%] text-sm">
      <div class="w-full max-w-wrap mx-auto">
        <section class="w-full max-w-3xl mx-auto">
          <div class="mb-5">
            <p class="text-xs mb-1">Old password</p>
            <div
              class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input :type="oldPwdVisible ? 'text' : 'password'" placeholder="Type here"
                class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
              <button type="button" class="text-sm opacity-80 hover:opacity-100"
                @click="oldPwdVisible = !oldPwdVisible">
                <span v-if="!oldPwdVisible" class="inline-flex items-center">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z">
                    </path>
                  </svg>
                </span>
                <span v-else class="inline-flex items-center">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z">
                    </path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div class="mb-5">
            <p class="text-xs mb-1">New password</p>
            <div
              class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input :type="newPwdVisible ? 'text' : 'password'" placeholder="Type here"
                class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
              <button type="button" class="text-sm opacity-80 hover:opacity-100"
                @click="newPwdVisible = !newPwdVisible">
                <span v-if="!newPwdVisible" class="inline-flex items-center">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z">
                    </path>
                  </svg>
                </span>
                <span v-else class="inline-flex items-center">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z">
                    </path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div class="mb-5">
            <p class="text-xs mb-1">Confirm password</p>
            <div
              class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input :type="confirmPwdVisible ? 'text' : 'password'" placeholder="Type here"
                class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
              <button type="button" class="text-sm opacity-80 hover:opacity-100"
                @click="confirmPwdVisible = !confirmPwdVisible">
                <span v-if="!confirmPwdVisible" class="inline-flex items-center">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z">
                    </path>
                  </svg>
                </span>
                <span v-else class="inline-flex items-center">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z">
                    </path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div>
            <button class="w-full text-center h-11 px-6 bg-black text-white rounded-lg">Submit</button>
          </div>
          <p class="mt-6 text-center text-red-400">Forgot old password, please contact customer service to retrieve it
          </p>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const goBack = () => router.back()

const oldPwdVisible = ref(false)
const newPwdVisible = ref(false)
const confirmPwdVisible = ref(false)
</script>

<style scoped></style>