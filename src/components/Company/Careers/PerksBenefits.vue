<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Perk { key: string; icon?: string }
const { t } = useI18n()

const perks: Perk[] = [
  { key: 'anywhere', icon: `<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.4375C21 17.4081 16.9706 21.4375 12 21.4375M21 12.4375C21 7.46694 16.9706 3.4375 12 3.4375M21 12.4375H3M12 21.4375C7.02944 21.4375 3 17.4081 3 12.4375M12 21.4375C9.79086 21.4375 8 17.4081 8 12.4375C8 7.46694 9.79086 3.4375 12 3.4375M12 21.4375C14.2091 21.4375 16 17.4081 16 12.4375C16 7.46694 14.2091 3.4375 12 3.4375M3 12.4375C3 7.46694 7.02944 3.4375 12 3.4375" stroke="currentCOlor" stroke-width="2" stroke-linecap="square"></path></svg>` },
  { key: 'equity', icon: `<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.4375H9.5V4.9375C9.5 3.55679 10.6193 2.4375 12 2.4375C13.3807 2.4375 14.5 3.55679 14.5 4.9375V5.4375H18C19.1046 5.4375 20 6.33293 20 7.4375V9.9375H19.5C18.1193 9.9375 17 11.0568 17 12.4375C17 13.8182 18.1193 14.9375 19.5 14.9375H20V17.4375C20 18.5421 19.1046 19.4375 18 19.4375H6C4.89543 19.4375 4 18.5421 4 17.4375V7.4375C4 6.33293 4.89543 5.4375 6 5.4375Z" stroke="currentCOlor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></svg>` },
  { key: 'benefits', icon: `<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.4375V20.4375M4 12.4375H20M8 16.4375C9.64819 15.3738 10.9156 14.0749 12 12.4375M12 12.4375C13.0844 14.0749 14.3518 15.3738 16 16.4375M12 12.4375V11.1042M12 12.4375H10.6667C9.19391 12.4375 8 11.2436 8 9.77083C8 9.03445 8.59695 8.4375 9.33333 8.4375C10.8061 8.4375 12 9.63141 12 11.1042M12 12.4375H13.3333C14.8061 12.4375 16 11.2436 16 9.77083C16 9.03445 15.403 8.4375 14.6667 8.4375C13.1939 8.4375 12 9.63141 12 11.1042M5 20.4375H19C19.5523 20.4375 20 19.9898 20 19.4375V5.4375C20 4.88522 19.5523 4.4375 19 4.4375H5C4.44772 4.4375 4 4.88522 4 5.4375V19.4375C4 19.9898 4.44772 20.4375 5 20.4375Z" stroke="currentCOlor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>` },
  { key: 'healthcare', icon: `<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12.4375H14.5L13 14.4375L10.5 10.4375L9.25 12.4375H8M12 6.20585C18.1619 -0.044337 28.7252 11.5632 12 20.9375C-4.72523 11.5632 5.83803 -0.0443385 12 6.20585Z" stroke="currentCOlor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>` },
  { key: 'pto', icon: `<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2987_15537)"><path d="M16.5013 20.232L11.6263 11.7883M7.50126 4.64355C3.19663 7.12884 1.72175 12.6331 4.20703 16.9378C5.43908 15.0718 7.17113 14.0718 8.97017 14.1878M7.50126 4.64355C11.8059 2.15827 17.3102 3.63315 19.7955 7.93778C17.5634 8.07173 15.8314 9.07176 15.0323 10.6878M7.50126 4.64355C5.82724 5.61005 6.48489 9.88315 8.97017 14.1878M7.50126 4.64355C9.17528 3.67706 12.5471 6.38315 15.0323 10.6878M8.97017 14.1878C9.8027 13.1298 10.652 12.3508 11.6263 11.7883M15.0323 10.6878C13.6998 10.8798 12.6005 11.2258 11.6263 11.7883" stroke="currentCOlor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>` },
  { key: 'retreats', icon: `<svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.4375V2.4375M12 22.4375V21.4375M18.3598 6.07755L19.0698 5.36755M4.93016 19.5075L5.64016 18.7975M21 12.4375H22M2 12.4375H3M18.3598 18.7975L19.0698 19.5075M4.93016 5.36755L5.64016 6.07755M15.5355 8.90197C17.4882 10.8546 17.4882 14.0204 15.5355 15.973C13.5829 17.9257 10.4171 17.9257 8.46447 15.973C6.51185 14.0204 6.51185 10.8546 8.46447 8.90197C10.4171 6.94935 13.5829 6.94935 15.5355 8.90197Z" stroke="currentCOlor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>` }
]
</script>

<template>
  <section class="pt-12 pb-14 lg:py-20 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <dl class="grid grid-cols-6 gap-8 lg:gap-12">
        <dt class="col-span-6 md:col-span-2">
          <h3 class="text-[32px] font-medium">{{ t('careers.perks.title') }}</h3>
          <p class="text-gray-deep">{{ t('careers.perks.subtitle') }}</p>
        </dt>
        <dd class="col-span-6 md:col-span-4 lg:col-span-3">
          <ul class="grid grid-cols-2 gap-x-3 gap-y-10">
            <li v-for="(p, idx) in perks" :key="idx" class="col-span-2 md:col-span-1">
              <div class="w-14 h-14 mb-3 lg:mb-4 flex items-center justify-center">
                <em class="w-6 h-6 flex" v-html="p.icon" />
              </div>
              <h5 class="mb-2 font-medium">{{ t(`careers.perks.items.${p.key}.title`) }}</h5>
              <p class="text-sm text-gray-deep">{{ t(`careers.perks.items.${p.key}.desc`) }}</p>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </section>
</template>