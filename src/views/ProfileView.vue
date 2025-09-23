<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none"><span>{{ t('profile.title') }}</span>
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
        <span>{{ t('actions.back') }}</span>
      </a>
    </div>
  </section>

  <div class="w-full lg:min-h-[300px]">
    <section class="py-6 px-[5%]">
      <div class="w-full max-w-wrap mx-auto">
        <section class="grid grid-cols-2 gap-6 lg:gap-x-8">
          <dl class="col-span-2 md:col-span-1 border-b border-default block">
            <dt class="text-sm block"><span>{{ t('profile.fields.username') }}</span></dt>
            <dd class="w-full h-9 text-base leading-none flex items-center">
              <div class="flex-1 overflow-hidden">
                <p>{{ userInfo['username'] }}</p>
              </div>
            </dd>
          </dl>
          <dl class="col-span-2 md:col-span-1 border-b border-default block">
            <dt class="text-sm block"><span>{{ t('profile.fields.phone_number') }}</span></dt>
            <dd class="w-full h-9 text-base leading-none flex items-center">
              <div class="flex-1 overflow-hidden">
                <p>{{ userInfo['tel'] }}</p>
              </div>
            </dd>
          </dl>
          <dl class="col-span-2 md:col-span-1 border-b border-default block">
            <dt class="text-sm block"><span>{{ t('profile.fields.password') }}</span></dt>
            <dd class="w-full h-9 text-base leading-none cursor-pointer flex items-center"
              @click="router.push('/password/change')">
              <div class="flex-1 overflow-hidden">
                <p>******</p>
              </div>
              <svg stroke="currentColor" stroke-width="3" width="20" height="20" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 shrink-0">
                <path d="M7 42H43" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z" fill="none" stroke-linejoin="round">
                </path>
              </svg>
            </dd>
          </dl>
          <dl class="col-span-2 md:col-span-1 border-b border-default block">
            <dt class="text-sm block"><span>{{ t('profile.fields.fund_password') }}</span></dt>
            <dd class="w-full h-9 text-base leading-none cursor-pointer flex items-center"
              @click="router.push('/cashword/change')">
              <div class="flex-1 overflow-hidden">
                <p><span>******</span></p>
              </div>
              <svg stroke="currentColor" stroke-width="3" width="20" height="20" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 shrink-0">
                <path d="M7 42H43" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z" fill="none" stroke-linejoin="round">
                </path>
              </svg>
            </dd>
          </dl>
          <dl class="col-span-2 md:col-span-1 border-b border-default block">
            <dt class="text-sm block"><span>{{ t('profile.fields.wallet_address') }}</span></dt>
            <dd class="w-full h-9 text-base leading-none cursor-pointer flex items-center"
              @click="router.push('/bindcard?type=usdt')">
              <div class="flex-1 overflow-hidden">
                <p><span class="text-gray-default">{{ t('profile.fields.bind_withdrawal_address') }}</span></p>
              </div>
              <svg stroke="currentColor" stroke-width="3" width="20" height="20" viewBox="0 0 48 48" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 shrink-0">
                <path d="M7 42H43" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z" fill="none" stroke-linejoin="round">
                </path>
              </svg>
            </dd>
          </dl>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user';
const router = useRouter()
const { t } = useI18n()
const user = useUserStore();
user.fetchIndex();
const userInfo = computed(() => user.userInfo);
const goBack = () => router.back()
</script>

<style scoped></style>
