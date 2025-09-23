// useServiceStore.js
import { ref, onMounted } from 'vue';
import { CommonAPI } from '@/services/api';



export const useServiceStore = () => {
    const supportList = ref([]);
    const customerServiceTime = ref<string | null>(null);
    const loading = ref<boolean>(true);
    const error = ref<Error | null>(null);

    const fetchData = async () => {
        try {
            const supportResponse = await CommonAPI.getSupportList();
            const serviceTimeResponse = await CommonAPI.getCustomerServiceTime();
            supportList.value = supportResponse.data;
            customerServiceTime.value = serviceTimeResponse.data['customer_service_time'] || null; // Adjust based on your API response structure
        } catch (err) {
            alert(err);
        } finally {
            loading.value = false;
        }
    };

    // Optionally call fetchData on component mount
    onMounted(fetchData);

    return {
        supportList,
        customerServiceTime,
        fetchData,
        loading,
        error,
    };
};
