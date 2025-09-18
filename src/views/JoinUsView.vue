<template>
  <section class="w-full max-w-wrap  mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none"><span>Invite friends</span></h1>
    </div>
    <div class="px-[5%] lg:px-0 flex">
      <a href="javascript:;" class="py-3 flex items-center" @click.prevent="goBack">
        <em class="w-8 h-8 mr-2 bg-minor/20 text-minor rounded-full flex items-center justify-center">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z" />
          </svg>
        </em>
        <span>Return to previous page</span>
      </a>
    </div>
  </section>

  <div class="w-full lg:min-h-[300px]">
    <section class="pt-5 pb-20 px-[5%]">
      <div class="w-full max-w-wrap mx-auto">
        <section class="w-full max-w-3xl mx-auto">
          <img src="/images/dashboard/join-us/card-invite.svg" class="w-auto max-w-full h-60 mx-auto block object-contain" alt="Invite Friends">
          <div class="w-full py-4 text-sm">
            <h5 class="mb-4 text-lg text-theme text-center">Invite friends to earn commission</h5>
            <div class="pt-2 mt-2 text-sm text-center">
              <span>Referral code: </span>
              <span class="text-theme">4742190</span>
              <svg class="w-4 h-4 ml-1 text-theme inline-block align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" />
              </svg>
            </div>
            <div class="w-[160px] h-[160px] mt-3 mx-auto rounded-md bg-gray-100 flex items-center justify-center">
              <img src="/images/dashboard/join-us/download.png" alt="Download" width="150" height="150" style="width: 150px; height: 150px;" />
            </div>
            <button class="mt-5 bg-black flex w-full items-center px-1 py-2 capitalize text-white text-center justify-center"><span>Copy invitation link</span></button>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
</script>

<style scoped>
</style>