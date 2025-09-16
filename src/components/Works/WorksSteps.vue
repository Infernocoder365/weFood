<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
   <section
            class="pt-16 pb-10 lg:pt-24 lg:pb-32 lg:mx-2 px-[5%] -my-10 rounded-3xl md:rounded-[48px] bg-default text-default">
            <div class="w-full max-w-wrap mx-auto">
              <ul class="grid grid-cols-1 gap-20">
                <li class="col-span-1 grid grid-cols-2 gap-10 lg:gap-6">
                  <div class="col-span-2 lg:col-span-1"></div>
                  <div class="col-span-2 lg:col-span-1">
                    <div class="w-[530px] max-w-full"></div>
                  </div>
                </li>
                <li class="col-span-1 grid grid-cols-2 gap-10 lg:gap-6">
                  <div class="col-span-2 lg:col-span-1 flex flex-wrap">
                    <div class="w-full lg:w-11 mb-5 lg:mb-0 mr-5 relative"><em
                        class="w-full text-[32px] lg:text-4xl text-center font-medium not-italic block"><span>01.</span></em><i
                        class="h-full -ml-px border-l-2 border-default border-dashed absolute top-14 left-1/2 hidden lg:block"></i>
                    </div>
                    <div class="w-full lg:flex-1 lg:overflow-hidden">
                      <h5 class="mb-2 text-4xl font-medium"><span>Show up at the top of Google</span></h5>
                      <p class="text-gray-deep"><span>Beat your competition with a website perfectly optimized for
                          Google. Get more orders from people in your area.</span></p>
                      <div class="pt-5 flex"><a href="/product/product"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">Learn more</span><svg stroke="currentColor" stroke-width="5"
                            width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 opacity-60">
                            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></a></div>
                    </div>
                  </div>
                  <div class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
                    <div class="w-[530px] max-w-full"><img src="/images/works/work_step_1.jpg"
                        class="w-full rounded-[32px] object-cover" style="height: 511px;"></div>
                  </div>
                </li>
                <li class="col-span-1 grid grid-cols-2 gap-10 lg:gap-6">
                  <div class="col-span-2 lg:col-span-1 flex flex-wrap">
                    <div class="w-full lg:w-11 mb-5 lg:mb-0 mr-5 relative"><em
                        class="w-full text-[32px] lg:text-4xl text-center font-medium not-italic block"><span>02.</span></em><i
                        class="h-full -ml-px border-l-2 border-default border-dashed absolute top-14 left-1/2 hidden lg:block"></i>
                    </div>
                    <div class="w-full lg:flex-1 lg:overflow-hidden">
                      <h5 class="mb-2 text-4xl font-medium"><span>Grow your sales with our online ordering
                          platform</span></h5>
                      <p class="text-gray-deep"><span>Guests order more from you when your online ordering experience
                          feels as good as WeFood.</span></p>
                      <div class="pt-5 flex"><a href="/product/ordering"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">Learn more</span><svg stroke="currentColor" stroke-width="5"
                            width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 opacity-60">
                            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></a></div>
                    </div>
                  </div>
                  <div class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
                    <div class="w-[530px] max-w-full"><img src="/images/works/work_step_2.jpg"
                        class="w-full rounded-[32px] object-cover" style="height: 511px;"></div>
                  </div>
                </li>
                <li class="col-span-1 grid grid-cols-2 gap-10 lg:gap-6">
                  <div class="col-span-2 lg:col-span-1 flex flex-wrap">
                    <div class="w-full lg:w-11 mb-5 lg:mb-0 mr-5 relative"><em
                        class="w-full text-[32px] lg:text-4xl text-center font-medium not-italic block"><span>03.</span></em><i
                        class="h-full -ml-px border-l-2 border-default border-dashed absolute top-14 left-1/2 hidden lg:block"></i>
                    </div>
                    <div class="w-full lg:flex-1 lg:overflow-hidden">
                      <h5 class="mb-2 text-4xl font-medium"><span>Drive re-orders with your mobile app and
                          rewards</span></h5>
                      <p class="text-gray-deep"><span>Mobile app with rewards</span></p>
                      <div class="pt-5 flex"><a href="/product/branded"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">Learn more</span><svg stroke="currentColor" stroke-width="5"
                            width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 opacity-60">
                            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></a></div>
                    </div>
                  </div>
                  <div class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
                    <div class="w-[530px] max-w-full"><img src="/images/works/work_step_3.jpg"
                        class="w-full rounded-[32px] object-cover" style="height: 511px;"></div>
                  </div>
                </li>
                <li class="col-span-1 grid grid-cols-2 gap-10 lg:gap-6">
                  <div class="col-span-2 lg:col-span-1 flex flex-wrap">
                    <div class="w-full lg:w-11 mb-5 lg:mb-0 mr-5 relative"><em
                        class="w-full text-[32px] lg:text-4xl text-center font-medium not-italic block"><span>04.</span></em><i
                        class="h-full -ml-px border-l-2 border-default border-dashed absolute top-14 left-1/2 hidden lg:block"></i>
                    </div>
                    <div class="w-full lg:flex-1 lg:overflow-hidden">
                      <h5 class="mb-2 text-4xl font-medium"><span>Keep guests engaged with auto-marketing</span></h5>
                      <p class="text-gray-deep"><span>Boost sales with proven, automated marketing campaigns. Send
                          money-making emails and texts without writing a word.</span></p>
                      <div class="pt-5 flex"><a href="/product/marketing"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">Learn more</span><svg stroke="currentColor" stroke-width="5"
                            width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 opacity-60">
                            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></a></div>
                    </div>
                  </div>
                  <div class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
                    <div class="w-[530px] max-w-full"><img src="/images/works/work_step_4.jpg"
                        class="w-full rounded-[32px] object-cover" style="height: 511px;"></div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
</template>

<style scoped>
</style>