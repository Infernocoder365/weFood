// stores/commonStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { CommonAPI } from '@/services/api';
import {useToast} from 'vue-toast-notification';

export const useTermStore = defineStore('term', () => {
  const termConent = ref('');
  const loading = ref(false);
  const error = ref(null);

  const fetchCommonData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const termResponse = await CommonAPI.getTermsAndConditions();
      termConent.value = termResponse.data;
    } catch (err) {
        alert(err);
    } finally {
      loading.value = false;
    }
  };

  const isLoading = computed(() => loading.value);
  const hasError = computed(() => error.value);
  return {
    termConent,
    loading,
    error,
    fetchCommonData,
    isLoading,
    hasError,
  };
});
