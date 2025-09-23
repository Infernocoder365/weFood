<template>
    <section class="py-10 md:py-20 ctx-minor">
        <div class="w-full max-w-wrap mx-auto">
            <h5 class="text-2xl md:text-3xl lg:text-[42px] text-center leading-none"><span>{{ t('dashboard.welcome') }}, {{ userInfo['username'] }}</span>
            </h5>
        </div>
    </section>
    <section class="pb-10 lg:pb-20 px-[5%] mt-10">
        <div class="w-full max-w-wrap mx-auto">
            <section class="w-[970px] max-w-full mx-auto">
                <dl
                    class="w-full p-3 text-sm md:text-base lg:text-lg bg-default text-default rounded-lg relative cursor-pointer select-none flex items-center justify-between">
                    <dt class="max-w-2/5 p-2 flex items-center justify-between">
                        <span class="align-middle">{{ t('dashboard.rank') }}</span>
                        <div class="van-image w-8 h-8 ml-2 align-middle">
                            <img class="van-image__img" data-src="/imgs/vip-1.jpeg" :src="userInfo['level_pic']"
                                lazy="loaded">
                        </div>
                    </dt>
                    <dd class="max-w-3/5 p-2 uppercase"><b>{{ userInfo['score'] }}&nbsp;</b><span>{{ t('dashboard.credibility') }}</span></dd>
                </dl>
                <ul class="mt-10 grid grid-cols-12 gap-4 sm:gap-6 uppercase">
                    <li class="col-span-12 sm:col-span-6 md:col-span-4 px-8 py-4 bg-black text-white rounded-lg">
                        <h5 class="mb-1 text-base opacity-60"><span>Account Balance</span><span>&nbsp;(USD)</span></h5>
                        <p class="text-3xl break-all"><b>{{ userInfo['balance']}}</b></p>
                    </li>
                    <li class="col-span-12 sm:col-span-6 md:col-span-4 px-8 py-4 bg-black text-white rounded-lg">
                        <h5 class="mb-1 text-base opacity-60"><span>Frozen Amount</span><span>&nbsp;(USD)</span></h5>
                        <p class="text-3xl break-all"><b>{{ userInfo['freeze_balance'] }}</b></p>
                    </li>
                    <li
                        class="col-span-12 sm:col-span-6 md:col-span-4 px-8 py-4 bg-black text-white rounded-lg cursor-pointer relative">
                        <h5 class="mb-1 text-base opacity-60"><span>Referral code</span></h5>
                        <p class="text-3xl break-all"><b> {{ userInfo['invite_code'] }} </b></p><em class="p-2 absolute right-0 top-0 flex"><svg
                                stroke="currentColor" stroke-width="3" width="20" height="20" viewBox="0 0 48 48"
                                fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                                <path
                                    d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path
                                    d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"
                                    fill="none" stroke-linejoin="round"></path>
                            </svg></em>
                    </li>
                </ul>
                <ol class="mt-10 grid grid-cols-12 gap-4 sm:gap-6 uppercase">
                    <li class="col-span-6 lg:col-span-3">
                        <div class="w-full">
                            <h6 class="text-xs"><span>{{ t('dashboard.today_earnings') }}</span><span>&nbsp;(USD)</span></h6>
                            <p class="text-3xl break-all"><span>{{ userInfo['daily_earnings'] }}</span></p>
                        </div>
                    </li>
                    <li class="col-span-6 lg:col-span-3">
                        <div class="w-full">
                            <h6 class="text-xs"><span>{{ t('dashboard.total_earnings') }}</span><span>&nbsp;(USD)</span></h6>
                            <p class="text-3xl break-all"><span>{{ userInfo['earnings_history'] }}</span></p>
                        </div>
                    </li>
                    <li class="col-span-6 lg:col-span-3">
                        <div class="w-full">
                            <h6 class="text-xs"><span>{{ t('dashboard.data') }}</span></h6>
                            <p class="text-3xl break-all"><span>{{ userInfo['order_num']}}</span></p>
                        </div>
                    </li>
                    <li class="col-span-6 lg:col-span-3">
                        <div class="w-full">
                            <h6 class="text-xs"><span>{{ t('dashboard.profit_orders') }}</span></h6>
                            <p class="text-3xl break-all"><span>{{ userInfo['ratio']}}%</span></p>
                        </div>
                    </li>
                </ol>
                <div class="mt-10 grid grid-cols-12 gap-6">
                    <dl class="col-span-12 sm:col-span-6 lg:col-span-4">
                        <dt class="w-full pb-2.5 mb-2.5 border-b border-default block">
                            <h5 class="text-xs font-bold text-gray-deep"><span>Asset</span></h5>
                        </dt>
                        <dd class="w-full pb-2.5 mb-2.5 border-b border-default block"><RouterLink to="/access"
                                class="w-full hover:translate-x-5 transition-all duration-500 flex"><em
                                    class="w-7 h-7 mr-2.5 flex shrink-0"><img src="/images/dashboard/icon-access.svg"
                                        class="w-full h-full object-contain"></em>
                                <div class="flex-1 overflow-hidden">
                                    <h6 class="mb-1"><span>Evaluate</span></h6>
                                    <p class="text-gray-default"><span>Explore your loyalty rewards &amp; track your
                                            progress</span></p>
                                </div>
                            </RouterLink></dd>
                        <dd class="w-full pb-2.5 mb-2.5 border-b border-default block"><RouterLink to="/withdraw"
                                class="w-full hover:translate-x-5 transition-all duration-500 flex"><em
                                    class="w-7 h-7 mr-2.5 flex shrink-0"><img src="/images/dashboard/icon-withdraw.svg"
                                        class="w-full h-full object-contain"></em>
                                <div class="flex-1 overflow-hidden">
                                    <h6 class="mb-1"><span>Withdrawal</span></h6>
                                    <p class="text-gray-default"><span>Cash out your funds​</span></p>
                                </div>
                            </RouterLink></dd>
                    </dl>
                    <dl class="col-span-12 sm:col-span-6 lg:col-span-4">
                        <dt class="w-full pb-2.5 mb-2.5 border-b border-default block">
                            <h5 class="text-xs font-bold text-gray-deep"><span>History</span></h5>
                        </dt>
                        <dd class="w-full pb-2.5 mb-2.5 border-b border-default block"><RouterLink to="/order"
                                class="w-full hover:translate-x-5 transition-all duration-500 flex"><em
                                    class="w-7 h-7 mr-2.5 flex shrink-0"><img src="/images/dashboard/icon-order.svg"
                                        class="w-full h-full object-contain"></em>
                                <div class="flex-1 overflow-hidden">
                                    <h6 class="mb-1"><span>Orders</span></h6>
                                    <p class="text-gray-default"><span>Track your order status​​</span></p>
                                </div>
                            </RouterLink></dd>
                        <dd class="w-full pb-2.5 mb-2.5 border-b border-default block"><RouterLink to="/wallet/record"
                                class="w-full hover:translate-x-5 transition-all duration-500 flex"><em
                                    class="w-7 h-7 mr-2.5 flex shrink-0"><img src="/images/dashboard/icon-logs.svg"
                                        class="w-full h-full object-contain"></em>
                                <div class="flex-1 overflow-hidden">
                                    <h6 class="mb-1"><span>Funds</span></h6>
                                    <p class="text-gray-default"><span>Track your recharges, withdrawals, and earnings
                                            history</span></p>
                                </div>
                            </RouterLink></dd>
                    </dl>
                    <dl class="col-span-12 sm:col-span-6 lg:col-span-4">
                        <dt class="w-full pb-2.5 mb-2.5 border-b border-default block">
                            <h5 class="text-xs font-bold text-gray-deep"><span>Profile</span></h5>
                        </dt>
                        <dd class="w-full pb-2.5 mb-2.5 border-b border-default block"><RouterLink to="/profile"
                                class="w-full hover:translate-x-5 transition-all duration-500 flex"><em
                                    class="w-7 h-7 mr-2.5 flex shrink-0"><img src="/images/dashboard/icon-profile.svg"
                                        class="w-full h-full object-contain"></em>
                                <div class="flex-1 overflow-hidden">
                                    <h6 class="mb-1"><span>{{ t('dashboard.profile_details') }}</span></h6>
                                    <p class="text-gray-default"><span>{{ t('dashboard.profile_desc') }}</span></p>
                                   
                                </div>
                            </RouterLink></dd>
                        <dd class="w-full pb-2.5 mb-2.5 border-b border-default block"><RouterLink to="/invite"
                                class="w-full hover:translate-x-5 transition-all duration-500 flex"><em
                                    class="w-7 h-7 mr-2.5 flex shrink-0"><img src="/images/dashboard/icon-invite.svg"
                                        class="w-full h-full object-contain"></em>
                                <div class="flex-1 overflow-hidden">
                                    <h6 class="mb-1"><span>{{ t('dashboard.referral_code') }}</span></h6>
                                    <p class="text-gray-default"><span>Get your amazing rewards</span></p>
                                </div>
                            </RouterLink></dd>
                    </dl>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
const { t } = useI18n()

const auth = useAuthStore()
const user = useUserStore()
user.fetchIndex()
const userInfo = computed(() => user.userInfo);

function decodeTokenName(token: string | null): string | null {
  if (!token) return null
  try {
    // try JWT payload decoding
    const parts = token.split('.')
    const payloadB64 = parts.length >= 2 ? parts[1] : parts[0]
    const base64 = payloadB64.replace(/-/g, '+').replace(/_/g, '/')
    const pad = base64.length % 4
    const normalized = pad ? base64 + '='.repeat(4 - pad) : base64
    const json = atob(normalized)
    const obj = JSON.parse(json)
    return (
      obj.name || obj.username || obj.nickname || obj.nick || obj.realname || obj.phone || obj.mobile || null
    ) as string | null
  } catch (e) {
    return null
  }
}

const displayName = computed(() => {
  const nameFromToken = decodeTokenName(auth.token)
  return (nameFromToken || auth.phone || (auth.userid ? String(auth.userid) : 'User')) as string
})
</script>

<style scoped>
:deep(.ctx-minor) {
    color: #0ea5e9
}
</style>
