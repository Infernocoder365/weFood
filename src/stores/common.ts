// stores/commonStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { CommonAPI } from '@/services/api';

export const useCommonStore = defineStore('common', () => {
  const lang = ref([]);
  const faqList = ref([]);
  const supportList = ref([]);
  const agree = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchCommonData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const langResponse = await CommonAPI.getLang();
      lang.value = langResponse.data.lang;

      const faqResponse = await CommonAPI.getFaqList();
      const supportResponse = await CommonAPI.getSupportList();
      const getagreeResponse = await CommonAPI.getAgree();
     
      faqList.value = faqResponse.data;
      supportList.value = supportResponse.data;
      agree.value = getagreeResponse.data;
   
    } catch (err) {
       alert(err);
    } finally {
      loading.value = false;
    }
  };

  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value);

  return {
    lang,
    faqList,
    supportList,
    agree,
    loading,
    error,
    fetchCommonData,
    isLoading,
    hasError,
  };
});
