<script setup>
</script>

<template>
  <section class="pt-16 pb-20 lg:pt-52 lg:pb-32 px-ctx lg:px-16">
            <div class="w-full max-w-wrap mx-auto">
              <dl class="w-full bg-default text-default rounded-[32px] flex flex-wrap">
                <dt class="w-full md:w-2/5 md:max-w-[406px] shrink-0">
                  <div class="w-full" style="height: 474px;"><img src="/images/pricing/in_how_1.jpg"
                      class="w-full h-full rounded-[32px] object-cover"></div>
                </dt>
                <dd class="w-full md:flex-1 md:overflow-hidden">
                  <div class="w-full px-6 pt-8 pb-10 md:px-10">
                    <div class="w-full">
                      <h3 class="mb-6 text-[36px] lg:text-[44px] font-medium leading-tight"><span>{{ $t('home.success_story.title') }}</span></h3>
                    </div>
                    <div class="w-full">
                      <ul class="flex justify-between md:justify-start gap-6">
                        <li class="font-medium">
                          <p class="text-lg"><span>{{ $t('home.success_story.stats.sales') }}</span></p>
                          <p class="text-sm text-gray-default"><span>{{ $t('home.success_story.stats.sales_label') }}</span></p>
                        </li>
                        <li class="font-medium">
                          <p class="text-lg"><span>{{ $t('home.success_story.stats.growth') }}</span></p>
                          <p class="text-sm text-gray-default"><span>{{ $t('home.success_story.stats.growth_label') }}</span></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </dd>
              </dl>
              <div class="w-full pt-10 md:pt-20 flex justify-center"><em
                  class="w-3 h-3 flex items-center justify-center"><i
                    class="w-2 h-2 bg-gray-body rounded-full"></i></em><em
                  class="w-3 h-3 flex items-center justify-center"><i
                    class="w-2 h-2 bg-gray-body rounded-full"></i></em><em
                  class="w-3 h-3 flex items-center justify-center"><i
                    class="w-2 h-2 bg-gray-body rounded-full"></i></em></div>
            </div>
          </section>
</template>

<style scoped>
</style>