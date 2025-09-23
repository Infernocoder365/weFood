<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none"><span>Withdrawal Account</span></h1>
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
    <section class="py-10 px-[5%] text-sm">
      <div class="w-full max-w-wrap mx-auto">
        <section class="w-full max-w-3xl mx-auto">
          <!-- Saved addresses list -->
          <div class="mb-5 bg-white/60 rounded-xl border border-default overflow-hidden">
            <div v-for="(addr, idx) in savedAddresses" :key="addr['wallet_id']"
              class="px-3 py-3 flex items-center border-b border-default last:border-b-0">
              <div class="flex-1 overflow-hidden">
                <p class="text-[11px] uppercase tracking-wider text-gray-500">{{ addr['networkLabel'] }}</p>
                <p class="truncate text-[13px]">{{ addr['address'] }}</p>
              </div>
              <button class="ml-3 text-red-500 hover:text-red-600" title="Delete" @click="removeAddress(addr['wallet_id'])">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H15V5H20V7H4V5H9V3ZM6 9H8V19H6V9ZM10 9H12V19H10V9ZM14 9H16V19H14V9Z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Address type selector -->
          <div class="mb-5">
            <p class="text-xs font-medium mb-1">Address type</p>
            <div
              class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid border-b-[var(--input-border-color)] focus-within:!border-black">
              <select v-model="network"
                class="bg-transparent flex-1 h-9 text-base text-inherit appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent">
                <option value="erc20">ERC-20</option>
                <option value="trc20">TRC-20</option>
              </select>
            </div>
          </div>

          <!-- Wallet address input -->
          <div class="mb-5">
            <p class="text-xs font-medium mb-1">Wallet address</p>
            <div
              class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input v-model.trim="wallet" type="text" placeholder="Type here"
                class="bg-transparent flex-1 h-9 text-base placeholder:text-sm text-inherit appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
            </div>
          </div>

          <!-- Notes -->
          <div class="mb-6">
            <p class="text-xs font-medium mb-1">Notes</p>
            <div
              class="w-full px-2 transition-all duration-300 relative border-b border-solid focus-within:!border-black">
              <textarea v-model.trim="notes" rows="2" placeholder="Type here"
                class="w-full py-2 bg-transparent text-base placeholder:text-sm text-inherit appearance-none outline-none resize-none ring-0 focus:ring-0 focus:border-transparent"></textarea>
            </div>
          </div>

          <div>
            <button class="h-11 w-full bg-black text-white rounded-lg mx-auto" @click="submit">
              {{ t('actions.submit') }}
            </button>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { WalletAPI } from '@/services/api';
import { circleProps } from 'vant';
import { useWalletStore } from '@/stores/wallet';

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

// Query parameter to determine default network
const defaultNetwork = computed(() => (route.query.type === 'usdt' ? 'trc20' : 'erc20'))
const network = ref<'erc20' | 'trc20'>(defaultNetwork.value as 'erc20' | 'trc20')
const wallet = ref('')
const notes = ref('')

// State for saved addresses
const savedAddresses = computed(() => useWalletStore().wallets);

// Fetch saved addresses on mount
onMounted(async () => {
  useWalletStore().fetchWallets();
})

// Function to remove an address
const removeAddress = (idx: string) => {
 
  if (confirm(`Are you sure you want to delete ${idx}?`)) {
   
    WalletAPI.deleteWallet(idx).catch(err => {
      console.error('Failed to delete wallet:', err)
    })
    useWalletStore().fetchWallets();
  }
}

// Function to handle form submission
const submit = async () => {
  if (!wallet.value) {
    alert('Please enter wallet address')
    return
  }
  try {
    const response = await WalletAPI.addWallet(
      wallet.value,
      network.value,
      notes.value,
    );
    useWalletStore().fetchWallets();
    wallet.value = ''; // Clear the input field after submission
    notes.value = ''; // Clear notes field
  } catch (error) {
    alert(error)
  }
}

// Function to navigate back
const goBack = () => router.back()
</script>

<style scoped></style>
