<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
                      <h5 class="mb-2 text-4xl font-medium"><span>{{ t('works.steps.step1.title') }}</span></h5>
                      <p class="text-gray-deep"><span>{{ t('works.steps.step1.desc') }}</span></p>
                      <div class="pt-5 flex"><a href="/product/product"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">{{ t('actions.learn_more') }}</span><svg stroke="currentColor" stroke-width="5"
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
                      <h5 class="mb-2 text-4xl font-medium"><span>{{ t('works.steps.step2.title') }}</span></h5>
                      <p class="text-gray-deep"><span>{{ t('works.steps.step2.desc') }}</span></p>
                      <div class="pt-5 flex"><a href="/product/ordering"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">{{ t('actions.learn_more') }}</span><svg stroke="currentColor" stroke-width="5"
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
                      <h5 class="mb-2 text-4xl font-medium"><span>{{ t('works.steps.step3.title') }}</span></h5>
                      <p class="text-gray-deep"><span>{{ t('works.steps.step3.desc') }}</span></p>
                      <div class="pt-5 flex"><a href="/product/branded"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">{{ t('actions.learn_more') }}</span><svg stroke="currentColor" stroke-width="5"
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
                      <h5 class="mb-2 text-4xl font-medium"><span>{{ t('works.steps.step4.title') }}</span></h5>
                      <p class="text-gray-deep"><span>{{ t('works.steps.step4.desc') }}</span></p>
                      <div class="pt-5 flex"><a href="/product/marketing"
                          class="h-12 px-4 bg-[#eaeaea] rounded-lg flex items-center"><span
                            class="text-sm font-medium">{{ t('actions.learn_more') }}</span><svg stroke="currentColor" stroke-width="5"
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