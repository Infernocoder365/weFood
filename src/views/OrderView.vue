<template>
  <div class="w-full">
    <!-- Header -->
    <section>
      <div class="w-full max-w-wrap mx-auto">
        <div class="pt-3 pb-5 border-b border-black">
          <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
            <span>Orders</span>
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

    <div class="w-full lg:min-h-[300px]">
      <section class="px-[5%]">
        <div class="w-full max-w-wrap mx-auto">
          <section class="py-5">
            <!-- Tabs: Tailwind implementation -->
            <div class="py-2 bg-default text-default">
              <div role="tablist" aria-orientation="horizontal" class="w-full flex items-center justify-around gap-6">
                <button v-for="(tab, idx) in tabs" :key="tab" type="button" @click="activeTab = idx"
                  class="relative -mb-px pb-2 text-sm sm:text-base whitespace-nowrap w-full"
                  :class="activeTab === idx ? 'border-black text-black font-medium' : 'border-transparent text-gray-500 hover:text-black'">
                  <span>{{ tab }}</span>
                </button>
              </div>
            </div>
          </section>

          <div role="feed" class="van-list">
            <div v-if="loading" class="text-center">Loading orders...</div>
            <div v-else>
              <dl v-for="order in orderList" :key="order['id']" class="flex border-b border-gray-300 py-4">
                <dt class="py-2 mr-3 lg:mr-6 shrink-0">
                  <div>
                    <div class="van-image w-14 sm:w-20 md:w-[100px] lg:w-[190px] min-h-[3.5rem]">
                      <img class="van-image__img" style="object-fit: cover;" :src="order['goods_pic']" alt="Order Image">
                    </div>
                  </div>
                </dt>
                <dd class="py-2 border-t border-black flex-1 overflow-hidden">
                  <div class="w-full flex flex-wrap">
                    <div class="w-full md:w-1/2 md:pr-3">
                      <h5 class="text-gray-deep line-clamp-2"><span>{{ order['goods_name'] }}</span></h5>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-3">
                      <ul class="text-[15px] block">
                        <li class="w-full flex justify-between">
                          <p class="max-w-[50%]">Total Amount</p>
                          <p class="max-w-[50%] text-theme">{{ order['goods_count'] }}</p>
                        </li>
                        <li class="w-full flex justify-between">
                          <p class="max-w-[50%]">Commission</p>
                          <p class="max-w-[50%] text-green-500">{{ order['commission'] }}</p>
                        </li>
                        <li class="w-full flex justify-between">
                          <p class="max-w-[50%]">Status</p>
                          <p class="max-w-[50%] text-green-500">{{ getStatusString(order['status'], order['c_status']) }}
                          </p>
                        </li>
                      </ul>
                      <button class="w-full bg-black text-white py-2 mt-6" v-if="order['status'] == 0"
                        @click="showOrderInfo(order)"><span>{{
                          t('actions.submit') }}</span></button>
                    </div>
                  </div>
                </dd>
              </dl>
              <div class="w-full text-center text-gray-600">{{ t('wallet.no_more_data') }}</div>
            </div>
          </div>
        </div>
      </section>
      <div class="h-10 md:h-20"></div>
    </div>
  </div>
  <!-- Modal Component -->
  <orderModal :showModal="showModal" :order="selectedOrder" @submit="submitOrder(selectedOrder)"
    @close="showModal = false" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { OrderAPI } from '@/services/api';
import orderModal from '@/components/orderModal.vue'; // Import your modal component

const { t } = useI18n();

const tabs = ['All Orders', 'Pending', 'Freezing', 'Completed'];
const activeTab = ref(0);
const orderList = ref([]); // Reactive variable to hold the order list
const loading = ref(true); // Loading state
const showModal = ref(false)
const selectedOrder = ref([]);



enum OrderStatus {
  Pending = 0,
  Freezing = 1,
  Completed = 2
}

const getStatusString = (status: number, c_status: number): string => {
  if (status == 0) {
    return "Pending";
  } else {
    if (c_status == 0) {
      return "Freezing";
    } else {
      return "Completed";
    }
  }
};

const submitOrder = async (order: any) => {
  const oid = order.id;
  try {
    const response = await OrderAPI.doOrder(oid);
    alert(response.info);
    fetchOrderList();
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false; // Set loading to false regardless of success or failure
  }


  showModal.value = false;
};

const showOrderInfo = (order: any) => {
  selectedOrder.value = order; // Set the selected order
  showModal.value = true; // Show the modal
};

// Function to fetch the order list based on the active tab
const fetchOrderList = async () => {
  loading.value = true; // Set loading to true before fetching
  const tabNames = ['all', 'pending', 'freezing', 'completed'];

  try {
    const response = await OrderAPI.orderList(1, tabNames[activeTab.value]); // Fetching the order list based on the active tab
    orderList.value = response.data.data || []; // Assigning the order data to the reactive variable
   
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false; // Set loading to false regardless of success or failure
  }
};

// Fetch the order list when the component is mounted
onMounted(fetchOrderList);

// Watch for changes in activeTab and fetch the order list accordingly
watch(activeTab, fetchOrderList);
</script>
