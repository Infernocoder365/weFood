<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="pt-36 pb-24 lg:py-60 px-[5%]">
            <div class="w-full max-w-wrap mx-auto">
              <div class="grid grid-cols-1 gap-8 lg:gap-16">
                <div class="w-[600px] max-w-full text-center place-self-center grid grid-cols-1 gap-4">
                  <h3 class="text-[42px] lg:text-[56px] font-medium leading-none"><span>{{ t('works.hero.title') }}</span></h3>
                  <p class="text-gray-deep font-medium"><span>{{ t('works.hero.description') }}</span>
                  </p>
                  <div class="flex justify-center"><RouterLink to="/dashboard"
                      class="h-12 px-4 ctx-minor rounded-lg flex items-center"><span>{{ $t('actions.get_started') }}</span><svg
                        stroke="currentColor" stroke-width="5" width="20" height="20" viewBox="0 0 48 48" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-60">
                        <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg></RouterLink></div>
                </div>
                <div class="col-span-1">
                  <div class="w-full flex"><img src="/images/works/work_banner_1.webp"
                      class="w-full h-auto rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>
</template>

<style scoped>
</style>