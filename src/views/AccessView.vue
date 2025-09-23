<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>{{ t('access.title') }}</span>
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
    <div class="w-full lg:min-h-[300px]">
      <section class="py-10 lg:py-20 px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <section class="w-ful max-w-[970px] mx-auto">
            <!-- Account Balance card -->
            <div class="p-3 mb-4 bg-[#ebebeb] text-body">
              <h6 class="text-gray-deep"><span>{{ t('wallet.account_balance') }}</span></h6>
              <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <p class="text-3xl font-bold"><span> {{ userInfo['balance'] }} </span></p>
                <RouterLink to="/recharge" class="px-3 py-2 bg-black text-white text-sm flex items-center rounded">
                  <img
                        src="/images/access/icon-recharge-w.svg" class="w-5 h-5 mr-1">
                  <span>{{ t('recharge.actions.deposit') }}</span>
                </RouterLink>
              </div>
            </div>

            <!-- Stats -->
            <ul class="mb-8 grid grid-cols-12 gap-4 md:gap-6">
              <li class="lg:col-span-4 col-span-6 px-3 py-2 md:border-l border-black first:border-l-0">
                <h6 class="mb-2 text-xs text-gray-default"><span>{{ t('access.stats.date') }}</span></h6>
                <p class="text-xl text-gray-deep"><span>{{ userInfo['order_num']}}</span></p>
              </li>
              <li class="lg:col-span-4 col-span-6 px-3 py-2 md:border-l border-black first:border-l-0">
                <h6 class="mb-2 text-xs text-gray-default"><span>{{ t('access.stats.today_earnings_usd') }}</span></h6>
                <p class="text-xl text-gray-deep"><span>{{ userInfo['daily_earnings'] }}</span></p>
              </li>
              <li class="lg:col-span-4 col-span-6 px-3 py-2 md:border-l border-black first:border-l-0">
                <h6 class="mb-2 text-xs text-gray-default"><span>{{ t('access.stats.frozen_amount_usd') }}</span></h6>
                <p class="text-xl text-gray-deep"><span> {{ userInfo['freeze_balance'] }}</span></p>
              </li>
            </ul>

            <!-- Begin button -->
            <div class="mb-8 flex justify-center">
              <div>
                <button class="min-w-[330px] h-9 bg-black text-white uppercase"  @click="CheckAndStartOrder">
                  <span>{{ t('access.actions.begin') }}</span>
                </button>
              </div>
            </div>

            <!-- Tips -->
            <div class="w-full max-w-[670px] mx-auto">
              <p>{{ t('access.tips.tip1') }}</p>
              <p>
                {{ t('access.tips.tip2') }}
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>

    <!-- Modal Component -->
    <orderModal :showModal="showModal" :order="selectedOrder" @submit="submitOrder(selectedOrder)"
    @close="showModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user';
import { OrderAPI } from '@/services/api';
import orderModal from '@/components/orderModal.vue'; // Import your modal component
import { getContainingBlock } from 'vant/lib/utils';
const user = useUserStore();
user.fetchIndex();

const userInfo = computed(() => user.userInfo);
const { t } = useI18n()

const showModal = ref(false)
const selectedOrder = ref([]);
const router = useRouter();
const goBack = () => router.back()
const CheckAndStartOrder = async () => {
    try {
        const payload = {
            // Include necessary payload data here
            // e.g., order details, user info, etc.
        };
        const response = await OrderAPI.checkAndStartOrder(payload);
        const oid = response.data.oid;
        const orderResponse = await OrderAPI.orderInfo(oid);
        selectedOrder.value = orderResponse.data;
        showModal.value = true;
    } catch (error) {
        alert(error);
        showModal.value = false; // Ensure modal is hidden on error
    }
};
const submitOrder = async (order: any) => {
  const oid = order.oid;
  
  try {
    const response = await OrderAPI.doOrder(oid);
    alert(response.info);
    goBack();
  } catch (error) {
    alert(error);
  } 
  showModal.value = false;
};
</script>
