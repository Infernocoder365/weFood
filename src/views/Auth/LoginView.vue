<template>
  <section class="pt-6 pb-16">
    <!-- Top bar: close button (left) and language chip (right) -->
    <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <button type="button" aria-label="Close" class="p-1" @click="onClose">
        <svg stroke="currentColor" stroke-width="3" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
          <path d="M8 8L40 40" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8 40L40 8" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <button type="button" class="px-3 py-1.5 bg-white text-black rounded-full border border-gray-200 flex items-center shadow-sm">
        <svg fill="currentColor" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4.5 h-4.5">
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"></path>
        </svg>
        <span class="ml-2 text-sm">English</span>
      </button>
    </div>

    <!-- Title row with bottom border -->
    <div class="w-full max-w-4xl mx-auto px-6">
      <div class="pt-3 pb-5 border-b border-black">
        <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">Login</h1>
      </div>
    </div>

    <!-- Body -->
    <div class="w-full max-w-[500px] mx-auto box-border px-6">
      <p class="mt-5 text-center text-sm">
        <b class="opacity-60">Don't have an account?&nbsp;</b>
        <RouterLink class="text-black underline" :to="{ name: 'register', query: { next } }">Create an account</RouterLink>
      </p>

      <form class="pt-10" @submit.prevent="onSubmit">
        <p class="text-sm capitalize">Username / Phone Number</p>
        <dl class="h-12 mb-5 border-b border-gray-300 flex items-center">
          <dd class="px-3 cursor-pointer flex-shrink-0 flex items-center text-sm">
            <span class="min-w-[40px] pr-1 inline-block">🇸🇬 +65</span>
            <svg class="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
          </dd>
          <dt class="flex-1 overflow-hidden">
            <input v-model="username" type="text" placeholder="Type here" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
        </dl>

        <p class="text-sm capitalize">Password</p>
        <dl class="h-12 mb-2 border-b border-gray-300 flex items-center">
          <dt class="flex-1 overflow-hidden">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Type here" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
          <dd class="h-8 pl-3 pr-2 flex-shrink-0 flex items-center">
            <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="showPassword = !showPassword">
              <span v-if="!showPassword" class="inline-flex items-center">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path></svg>
              </span>
              <span v-else class="inline-flex items-center">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
              </span>
            </button>
          </dd>
        </dl>

        <div class="flex justify-end">
          <a href="javascript:;" class="text-sm underline">Forgot Password?</a>
        </div>

        <button type="submit" class="mt-5 w-full py-2.5 bg-black text-white rounded-none">Login</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const next = computed(() => (route.query.next as string) || '/dashboard')

const username = ref('')
const password = ref('')
const showPassword = ref(false)

function onSubmit() {
  const ok = auth.login({ username: username.value, password: password.value })
  if (ok) {
    router.replace(next.value)
  }
}

function onClose() {
  if (window.history.length > 1) router.back()
  else router.replace('/')
}
</script>