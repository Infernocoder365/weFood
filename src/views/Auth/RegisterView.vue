<template>
  <section class="pt-6 pb-16">
    <!-- Title row with bottom border -->
    <div class="w-full max-w-4xl mx-auto px-6">
      <div class="pt-3 pb-5 border-b border-black">
        <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">{{ t('actions.sign_up') }}</h1>
      </div>
    </div>

    <!-- Return to previous page link -->
    <div class="w-full max-w-4xl mx-auto px-6 mt-3">
      <button type="button" class="inline-flex items-center text-sm" @click="onBack">
        <span class="mr-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 6l-6 6 6 6"/></svg>
        </span>
        {{ t('actions.back') }}
      </button>
    </div>

    <!-- Body -->
    <div class="w-full max-w-[520px] mx-auto box-border px-6">
      <p class="mt-5 text-center text-sm">
        <b class="opacity-60">{{ t('auth.already_have', 'Already have an account?') }}&nbsp;</b>
        <RouterLink class="text-black underline" :to="{ name: 'login', query: { next } }">{{ t('auth.login_here', 'Log in here') }}</RouterLink>
      </p>

      <form class="pt-8" @submit.prevent="onSubmit">
        <p class="text-sm">{{ t('profile.fields.phone_number') }}</p>
        <dl class="h-12 mb-5 border-b border-gray-300 flex items-center">
          <dd class="px-3 cursor-pointer flex-shrink-0 flex items-center text-sm">
            <span class="min-w-[40px] pr-1 inline-block">{{ code }}</span>
            <svg class="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
          </dd>
          <dt class="flex-1 overflow-hidden">
            <input v-model="phone" type="tel" :placeholder="t('placeholders.type_here')" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
        </dl>

        <p class="text-sm">{{ t('auth.referral_code', 'Referral Code') }}</p>
        <dl class="h-12 mb-5 border-b border-gray-300 flex items-center">
          <dt class="flex-1 overflow-hidden">
            <input v-model="invite_code" type="text" placeholder="P7UA8N" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
        </dl>

        <p class="text-sm">{{ t('profile.fields.password') }}</p>
        <dl class="h-12 mb-5 border-b border-gray-300 flex items-center">
          <dt class="flex-1 overflow-hidden">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" :placeholder="t('placeholders.type_here')" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
          <dd class="h-8 pl-3 pr-2 flex-shrink-0 flex items-center">
            <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="showPassword = !showPassword">
              <span v-if="!showPassword" class="inline-flex items-center">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"/></svg>
              </span>
              <span v-else class="inline-flex items-center">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"/></svg>
              </span>
            </button>
          </dd>
        </dl>

        <p class="text-sm">Confirm Password</p>
        <dl class="h-12 mb-5 border-b border-gray-300 flex items-center">
          <dt class="flex-1 overflow-hidden">
            <input v-model="confirm" :type="showPassword ? 'text' : 'password'" :placeholder="t('placeholders.type_here')" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
          <dd class="h-8 pl-3 pr-2 flex-shrink-0 flex items-center">
            <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="showPassword = !showPassword">
              <span v-if="!showPassword" class="inline-flex items-center">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"/></svg>
              </span>
              <span v-else class="inline-flex items-center">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"/></svg>
              </span>
            </button>
          </dd>
        </dl>

        <p class="text-sm">Deposit Password</p>
        <dl class="h-12 mb-5 border-b border-gray-300 flex items-center">
          <dt class="flex-1 overflow-hidden">
            <input v-model="deposit_pwd" :type="showDeposit ? 'text' : 'password'" :placeholder="t('placeholders.type_here')" class="w-full h-8 text-base bg-transparent placeholder:text-gray-400 outline-none" />
          </dt>
          <dd class="h-8 pl-3 pr-2 flex-shrink-0 flex items-center">
            <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="showDeposit = !showDeposit">
              <span v-if="!showDeposit" class="inline-flex items-center">🙈</span>
              <span v-else class="inline-flex items-center">👁️</span>
            </button>
          </dd>
        </dl>

        <label class="text-sm inline-flex items-start">
          <input type="checkbox" v-model="agree" class="mr-2 mt-1" />
          <span>
            I have read and agree to <a href="javascript:;" class="underline">{{ t('auth.registration_terms', 'Registration Terms') }}</a>.
          </span>
        </label>

        <button type="submit" :disabled="!agree || !canSubmit || submitting" class="mt-5 w-full py-2.5 bg-black text-white rounded-none disabled:opacity-50">
          <span v-if="submitting">{{ t('auth.submitting') }}</span>
          <span v-else>{{ t('actions.sign_up') }}</span>
        </button>
        <p v-if="error" class="mt-3 text-sm text-red-600">{{ error }}</p>
      </form>
    </div>

    <!-- Success Dialog -->
    <div v-if="successOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div class="w-full md:w-[600px] lg:w-[800px] bg-white text-black rounded-md shadow-lg">
        <div class="w-full flex">
          <div class="p-4 flex-1 overflow-hidden">
            <p class="text-lg font-bold">{{ successTitle }}</p>
          </div>
          <button class="p-4 bg-transparent flex flex-shrink-0" @click="onSuccessClose">
            <svg class="w-5 h-5" stroke="currentColor" stroke-width="3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L40 40" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 40L40 8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
        </div>
        <div class="p-4 text-base">
          <div class="text-blue-500 w-full pb-4 mb-4 border-b border-gray-200">
            <svg class="w-16 h-16 mb-3 mx-auto block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
            <p class="text-center font-medium"><span>{{ t('common.success', 'Success!') }}</span></p>
          </div>
          <article class="ctx-article text-center">{{ successMessage }}</article>
        </div>
        <ul class="!p-2 text-sm md:text-base flex justify-center">
          <li class="w-full md:w-auto p-2"><button class="w-full md:w-auto lg:md:min-w-[80px] px-3 h-9 bg-black text-white md:rounded" @click="onSuccessClose"><span>{{ t('common.confirm', 'Confirm') }}</span></button></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const next = computed(() => (route.query.next as string) || '/dashboard')

const phone = ref('')
const password = ref('')
const confirm = ref('')
const deposit_pwd = ref('')
const invite_code = ref('P7UA8N')
const code = ref('+65')
const agree = ref(false)
const showPassword = ref(false)
const showDeposit = ref(false)

const submitting = ref(false)
const error = ref<string | null>(null)

const successOpen = ref(false)
const successTitle = ref(t('actions.sign_up'))
const successMessage = ref(t('auth.register_success'))

const canSubmit = computed(() => !!phone.value && !!password.value && password.value === confirm.value && !!deposit_pwd.value && !!invite_code.value && !!code.value)

async function onSubmit() {
  if (!canSubmit.value) return
  error.value = null
  submitting.value = true
  const ok = await auth.register({ phone: phone.value, password: password.value, deposit_pwd: deposit_pwd.value, invite_code: invite_code.value, code: code.value })
  submitting.value = false
  if (ok) {
    successTitle.value = t('actions.sign_up')
    successMessage.value = t('auth.register_success')
    successOpen.value = true
  } else {
    error.value = auth.error || t('auth.register_failed')
  }
}

function onSuccessClose() {
  successOpen.value = false
  router.replace({ name: 'login', query: { next: next.value } })
}

function onBack() {
  if (window.history.length > 1) router.back()
  else router.replace('/')
}
</script>

<style scoped>
.btn-theme { @apply bg-black text-white; }
</style>