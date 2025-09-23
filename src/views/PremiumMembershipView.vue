<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
        <span>{{ t('premium.title') }}</span>
      </h1>
    </div>
    <div class="px-[5%] lg:px-0 flex">
      <a href="javascript:;" class="py-3 flex items-center" @click.prevent="goBack">
        <em class="w-8 h-8 mr-2 bg-minor/20 text-minor rounded-full flex items-center justify-center">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z" />
          </svg>
        </em>
        <span>{{ t('actions.back') }}</span>
      </a>
    </div>
  </section>

  <div class="w-full lg:min-h-[300px]">
    <section class="px-[5%]">
      <div class="w-full max-w-wrap mx-auto">
        <section class="w-[800px] max-w-full min-h-[300px] mx-auto py-10 lg:py-20">
          <dl class="grid grid-cols-12 md:gap-8">
            <dt class="col-span-12 md:col-span-5 mb-8 flex">
              <div>
                <img :src="imageSrc" class="w-full aspect-[1/1] object-cover" alt="Membership">
              </div>
            </dt>
            <dd class="col-span-12 md:col-span-7">
              <div class="w-full mb-8">
                <select v-model="selectedTier" class="w-full h-8 border-b border-black bg-transparent outline-none">
                  <option v-for="(level, index) in vipList" :key="index" :value="index">{{ level['title'] }}</option>
                </select>
              </div>
              <div>
                <p>{{ t('premium.commission_rate') }}: {{ tierInfo['bili'] }}</p>
                <p>{{ t('premium.task_rounds_per_day') }}: {{ tierInfo['order_num'] }}</p>
              </div>
              <button 
                :class="['flex w-full items-center justify-center px-1 py-2 text-white bg-black', 'mt-10', selectedTier === '0' ? 'opacity-60 cursor-not-allowed' : '']" 
                :disabled="selectedTier === '0'" 
                @click="onUpgrade">
                <span>{{ selectedTier === '0' ? t('premium.current') : t('premium.upgrade') }}</span>
              </button>
            </dd>
          </dl>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/stores/user';

const { t } = useI18n();
const router = useRouter();
const user = useUserStore();
const goBack = () => router.back();

const selectedTier = ref('0');
user.fetchVipList();
const vipList = computed(() => user.vipList);
const imageSrc = computed(() => `${vipList.value[Number(selectedTier.value) || 0]['pic']}`);
// Computed property to get tier information based on selected tier
const tierInfo = computed(() => vipList.value[Number(selectedTier.value)]);


const onUpgrade = () => {
  if (selectedTier.value === '0') return;
  // TODO: implement upgrade flow
};
</script>

<style scoped>
</style>
