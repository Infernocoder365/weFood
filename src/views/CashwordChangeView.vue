<template>
  <section class="w-full max-w-wrap mx-auto">
    <div class="pt-3 pb-5 border-b border-black">
      <h1 class="text-[24px] sm:text-[30px] lg:text-[40px] text-center leading-none">
        <span>{{ t('cashword_change.title') }}</span>
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
    <section class="py-10 px-[5%] text-sm">
      <div class="w-full max-w-wrap mx-auto">
        <section class="w-full max-w-3xl mx-auto">
          <div class="mb-5">
            <p class="text-xs mb-1">{{ t('cashword_change.old_password') }}</p>
            <div class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input v-model="oldPassword" :type="oldPwdVisible ? 'text' : 'password'" :placeholder="t('placeholders.type_here')" class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
              <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="oldPwdVisible = !oldPwdVisible">
                <span v-if="!oldPwdVisible">???</span>
                <span v-else>???????</span>
              </button>
            </div>
          </div>
          <div class="mb-5">
            <p class="text-xs mb-1">{{ t('cashword_change.new_password') }}</p>
            <div class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input v-model="newPassword" :type="newPwdVisible ? 'text' : 'password'" :placeholder="t('placeholders.type_here')" class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
              <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="newPwdVisible = !newPwdVisible">
                <span v-if="!newPwdVisible">???</span>
                <span v-else>???????</span>
              </button>
            </div>
          </div>
          <div class="mb-5">
            <p class="text-xs mb-1">{{ t('cashword_change.confirm_password') }}</p>
            <div class="w-full h-11 px-2 transition-all duration-300 relative flex items-center border-b border-solid focus-within:!border-black">
              <input v-model="confirmPassword" :type="confirmPwdVisible ? 'text' : 'password'" :placeholder="t('placeholders.type_here')" class="bg-transparent flex-1 h-9 text-base leading-none appearance-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-transparent" />
              <button type="button" class="text-sm opacity-80 hover:opacity-100" @click="confirmPwdVisible = !confirmPwdVisible">
                <span v-if="!confirmPwdVisible">???</span>
                <span v-else>???????</span>
              </button>
            </div>
          </div>
          <div>
            <button class="w-full text-center h-11 px-6 bg-black text-white rounded-lg" @click="submitChangePayPwd">{{ t('actions.submit') }}</button>
          </div>
          <p class="mt-6 text-center text-red-400">{{ t('cashword_change.forgot_tip') }}</p>
        </section>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { MyAPI } from '@/services/api';

const { t } = useI18n();
const router = useRouter();

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const oldPwdVisible = ref(false);
const newPwdVisible = ref(false);
const confirmPwdVisible = ref(false);

const goBack = () => router.back();

const submitChangePayPwd = async () => {
  // Validate passwords
  if (!oldPassword.value) {
    alert(t('cashword_change.errors.old_password_required'));
    return;
  }
  if (!newPassword.value) {
    alert(t('cashword_change.errors.new_password_required'));
    return;
  }
  if (newPassword.value !== confirmPassword.value) {
    alert(t('cashword_change.errors.password_mismatch'));
    return;
  }

  try {
    await MyAPI.changePayPwd(oldPassword.value, newPassword.value);
    alert(t('cashword_change.success'));
    goBack(); // Navigate back after successful password change
  } catch (error) {
    alert(error);
    console.error(error);
  }
};
</script>


<style scoped>
</style>
