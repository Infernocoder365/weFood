<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none"><span>{{ t('account.privacy_policy') }}</span></h1>
    </div>
    <div class="px-[5%] lg:px-0 flex">
      <a href="javascript:;" class="py-3 flex items-center" @click.prevent="goBack">
        <em class="w-8 h-8 mr-2 bg-minor/20 text-minor rounded-full flex items-center justify-center">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z">
            </path>
          </svg>
        </em>
        <span>{{ t('actions.back') }}</span>
      </a>
    </div>
  </section>
  <div class="w-full lg:min-h-[300px]">
    <section class="py-10 lg:py-20 px-[5%]">
      <div class="w-full max-w-wrap mx-auto">
        <article class="ctx-article" v-if="privacy">
          <h2><strong>{{privacy['title']}}</strong></h2>
          <div v-html="privacy['content']"></div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
const common = useCommonStore();
const privacy = computed(() => common.agree );
const goBack = () => router.back()
</script>

<style scoped></style>