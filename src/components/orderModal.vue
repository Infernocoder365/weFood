    <template>
        <div v-if="showModal" class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 p-4">
            <div role="dialog" tabindex="0"
                class="van-popup van-popup--center w-[calc(100%-32px)] max-w-[800px] max-h-[90%] bg-white text-popup rounded-xl overflow-auto">
                <!-- Changed bg-popup to bg-white -->
                <div class="flex items-center">
                    <div class="p-4 flex-1 overflow-hidden">
                        <h5>{{ t('access.modal.title') }}</h5>
                    </div>
                    <button class="p-4 flex shrink-0" @click="closeModal" aria-label="Close">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="p-4">
                    <dl class="grid grid-cols-5 gap-6">
                        <dt class="col-span-5 md:col-span-2">
                            <div class="van-image w-full aspect-[1/1] rounded-md overflow-hidden shrink-0">
                                <img class="van-image__img" style="object-fit: contain;"
                                    :src="order['goods_pic']"
                                    alt="Product" />
                            </div>
                        </dt>
                        <dd class="col-span-5 md:col-span-3">
                            <h5 class="mb-2 text-2xl md:text-3xl font-bold line-clamp-2"><span>{{ order['goods_name']}}</span></h5>
                            <p class="text-gray-deep font-medium"><span>USD {{ order['goods_price'] }} </span></p>
                            <p class="text-gray-deep"><span>Qty: {{ order['goods_count']}}</span></p>
                            <ol class="p-3 mt-3 bg-gray-light border border-popup rounded-xl leading-7 block">
                                <li class="flex justify-between">
                                    <div class="max-w-[50%] text-gray-deep"><span>{{ t('access.modal.date_created') }}</span>
                                    </div>
                                    <div class="max-w-[50%] text-right"><span>{{ order['addtime'] }} </span></div>
                                </li>
                                <li class="flex justify-between">
                                    <div class="max-w-[50%] text-gray-deep"><span> {{ t('access.modal.total_amount') }}</span>
                                    </div>
                                    <div class="max-w-[50%] text-right"><span>USD {{ order['goods_price'] }}</span></div>
                                </li>
                                <li class="flex justify-between">
                                    <div class="max-w-[50%] text-gray-deep"><span> {{ t('access.modal.commission') }}</span>
                                    </div>
                                    <div class="max-w-[50%] text-right text-minor"><span> USD {{ order['commission'] }}</span></div>
                                </li>
                            </ol>
                            <div class="p-3 mt-3 bg-gray-light border border-popup rounded-xl leading-7 block">
                                <h6 class="text-center"><span>{{ t('access.modal.rate_your_experience') }}</span></h6>
                                <div class="mt-3 flex justify-center">
                                    <van-rate v-model="rating" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
                                </div>
                            </div>
                            <button class="btn-minor mt-5" @click="submitOrder"><span>{{ t('actions.submit') }}</span></button>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </template>
    
    <script setup lang="ts">
    import { ref, computed } from 'vue'
    import { defineProps, defineEmits } from 'vue';
    import { useI18n } from 'vue-i18n';

    const props = defineProps({
        showModal: {
            type: Boolean,
            required: true,
        },
        order: {
            type: Object as () => Record<string, any>,
            default: () => ({}), // Default to an empty object
        },
    });

    const emit = defineEmits(); // Define emit

    const { t } = useI18n();
    // Define the rating property
    const rating = ref(5); // Default rating can be set here

    const submitOrder = () => {
        emit('submit');
    };
    const closeModal = () => {
        emit('close'); // Emit the close event to the parent
    };
    </script>
    
    <style scoped>
    /* Add any necessary styles here */
    .btn-minor {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        --tw-bg-opacity: 1;
        background-color: rgb(6 38 131 / var(--tw-bg-opacity, 1));
        padding: .5rem .75rem;
        font-size: .9375rem;
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }

    .van-rate {
        display: inline-flex;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        flex-wrap: wrap;
    }

    .justify-center {
        justify-content: center;
    }

    .flex {
        display: flex;
    }

    .mt-3 {
        margin-top: 0.75rem;
    }
    </style>
    
