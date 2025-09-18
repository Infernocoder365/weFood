<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none"><span>Withdrawal Account</span></h1>
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
    <section class="py-10 px-[5%] text-sm">
      <div class="w-full max-w-wrap mx-auto">
        <section class="w-full max-w-3xl mx-auto">
          <!-- Saved addresses list -->
          <div class="mb-5 bg-white/60 rounded-xl border border-default overflow-hidden">
            <div v-for="(addr, idx) in savedAddresses" :key="addr.id"
                 class="px-3 py-3 flex items-center border-b border-default last:border-b-0">
              <div class="flex-1 overflow-hidden">
                <p class="text-[11px] uppercase tracking-wider text-gray-500">{{ addr.networkLabel }}</p>
                <p class="truncate text-[13px]">{{ addr.masked }}</p>
              </div>
              <button class="ml-3 text-red-500 hover:text-red-600" title="Delete" @click="removeAddress(idx)">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3H15V5H20V7H4V5H9V3ZM6 9H8V19H6V9ZM10 9H12V19H10V9ZM14 9H16V19H14V9Z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Address type selector -->
          <div class="mb-5">
            <p class="text-xs font-medium mb-1">Address type</p>
            <div class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid border-b-[var(--input-border-color)] focus-within:!border-black">
              <select v-model="network" class="bg-transparent flex-1 h-9 text-base text-inherit appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent">
                <option value="erc20">ERC-20</option>
                <option value="trc20">TRC-20</option>
              </select>
            </div>
          </div>

          <!-- Wallet address input -->
          <div class="mb-5">
            <p class="text-xs font-medium mb-1">Wallet address</p>
            <div class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input v-model.trim="wallet" type="text" placeholder="Type here" class="bg-transparent flex-1 h-9 text-base placeholder:text-sm text-inherit appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
            </div>
          </div>

          <!-- Notes -->
          <div class="mb-6">
            <p class="text-xs font-medium mb-1">Notes</p>
            <div class="w-full px-2 transition-all duration-300 relative border-b border-solid focus-within:!border-black">
              <textarea v-model.trim="notes" rows="2" placeholder="Type here" class="w-full py-2 bg-transparent text-base placeholder:text-sm text-inherit appearance-none outline-none resize-none ring-0 focus:ring-0 focus:border-transparent"></textarea>
            </div>
          </div>

          <div>
            <button class="h-11 w-full bg-black text-white rounded-lg mx-auto" @click="submit">
              Submit
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

const router = useRouter()
const route = useRoute()

// query.type=usdt -> default to TRC-20 (common for USDT), otherwise default ERC-20
const defaultNetwork = computed(() => (route.query.type === 'usdt' ? 'trc20' : 'erc20'))
const network = ref<'erc20' | 'trc20'>(defaultNetwork.value as 'erc20' | 'trc20')
const wallet = ref('')
const notes = ref('')

// Example saved addresses list (UI only)
const savedAddresses = ref([
  { id: '1', network: 'trc20', networkLabel: 'TRC-20', masked: 'Teb*** ***j33' },
  { id: '2', network: 'erc20', networkLabel: 'ERC-20', masked: '0x8d*** ***a0f' }
])

onMounted(() => {
  // If query.type changes before mount, ensure initial selection aligns
  network.value = (defaultNetwork.value as 'erc20' | 'trc20')
})

const removeAddress = (idx: number) => {
  savedAddresses.value.splice(idx, 1)
}

const submit = () => {
  // Placeholder: replace with real API integration
  if (!wallet.value) {
    alert('Please enter wallet address')
    return
  }
  alert(`Submitted: network=${network.value}, wallet=${wallet.value}, notes=${notes.value || ''}`)
}

const goBack = () => router.back()
</script>

<style scoped>
</style>