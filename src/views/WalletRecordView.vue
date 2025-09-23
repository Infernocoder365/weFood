<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>{{ t('wallet.fund_history') }}</span>
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
            <span>{{ t('actions.back') }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Main -->
    <div data-v-27315d28="" class="w-full lg:min-h-[300px]">
      <section class="px-[5%] py-5 lg:py-6">
        <div class="w-full max-w-wrap mx-auto">
          <div role="feed" class="van-list" aria-busy="false">
            <ol>
              <!-- v-for list -->
              <li v-for="(rec, idx) in financialLog" :key="idx" class="py-3 border-b border-default">
                <div class="mb-2 flex items-center justify-between">
                  <p class="break-all flex-shrink-0"><small class="text-xs">{{ rec['currency'] || 'USD' }}&nbsp;</small><span
                      class="text-xl">{{ rec['num'] }}</span></p>
                  <div class="pl-2 flex-1 overflow-hidden flex justify-end">
                    <div class="max-w-full text-sm text-theme"><span>{{ rec['transaction_type']['name'] }}</span></div>
                  </div>
                </div>
                <p class="text-xs font-light">{{ rec['formatted_time'] }}</p>
              </li>
            </ol><!---->
            <div class="w-full text-center text-gray-600 pt-5">{{ t('wallet.no_more_data') }}</div>
            <div class="van-list__placeholder"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user';
const { t } = useI18n()
const user = useUserStore();
user.fetchFinancialLog();
const financialLog = computed(() => user.financialLog);



// // Map record labels to i18n keys under wallet_record.labels, fallback to original label
// const labelKey = (raw: string) => {
//   const map: Record<string, string> = {
//     'Reserved order': 'wallet_record.labels.reserved_order',
//     'Task commission': 'wallet_record.labels.task_commission',
//     'Principal Refund': 'wallet_record.labels.principal_refund',
//     'Recharge': 'wallet_record.labels.recharge',
//     'Give': 'wallet_record.labels.give'
//   }
//   return map[raw] || raw
// }
</script>
