<template>
  <footer class="w-full px-1.5 md:px-2.5 pt-8 md:pt-14 pb-1.5 bg-footer text-white">
    <section class="max-w-7xl w-full px-4 py-8 lg:p-[38px] mx-auto">
      <div class="w-full max-w-wrap mx-auto">
        <dl class="grid grid-cols-1 gap-14 lg:gap-24">
          <dt class="col-span-1 flex">
            <img src="/images/home/logo.png" class="w-auto h-12" :alt="$t('app.name')" />
          </dt>
          <dd class="col-span-1 grid grid-cols-8 gap-10">
            <div class="col-span-8 lg:col-span-2">
              <h5 class="mb-6 text-xs text-[#787A7D]"><span>{{ $t('nav.product') }}</span></h5>
              <ul class="text-lg font-medium grid gap-3">
                <li><RouterLink to="/product/product">{{ $t('product.restaurant_website') }}</RouterLink></li>
                <li><RouterLink to="/product/ordering">{{ $t('product.online_ordering') }}</RouterLink></li>
                <li><RouterLink to="/product/branded">{{ $t('product.custom_mobile_app') }}</RouterLink></li>
                <li><RouterLink to="/product/delivery">{{ $t('product.zero_commission_delivery') }}</RouterLink></li>
                <li><RouterLink to="/product/loyalty">{{ $t('product.loyalty_program') }}</RouterLink></li>
                <li><RouterLink to="/product/marketing">{{ $t('product.automated_marketing') }}</RouterLink></li>
                <li><RouterLink to="/company/releases">{{ $t('company.see_whats_new') }}</RouterLink></li>
              </ul>
            </div>
            <div class="col-span-8 md:col-span-4 lg:col-span-1">
              <h5 class="mb-6 text-xs text-[#787A7D]"><span>{{ $t('nav.resources') }}</span></h5>
              <ul class="text-sm text-[#A1A3A5] font-medium grid gap-3">
                <li><RouterLink to="/resources/case">{{ $t('resources.case_studies') }}</RouterLink></li>
                <li><RouterLink to="/resources/owner">{{ $t('resources.compare_wefood') }}</RouterLink></li>
              </ul>
            </div>
            <div class="col-span-8 md:col-span-4 lg:col-span-1">
              <h5 class="mb-6 text-xs text-[#787A7D]"><span>{{ $t('nav.company') }}</span></h5>
              <ul class="text-sm text-[#A1A3A5] font-medium grid gap-3">
                <li><RouterLink to="/company/story">{{ $t('company.about') }}</RouterLink></li>
                <li><RouterLink to="/company/careers">{{ $t('company.careers') }}</RouterLink></li>
                <li><RouterLink to="/company/press">{{ $t('company.press') }}</RouterLink></li>
              </ul>
            </div>
          </dd>
          <dd class="text-xs text-[#6C6F75] col-span-1 flex flex-col lg:flex-row-reverse lg:justify-between">
            <div class="w-full lg:w-auto lg:max-w-[70%] pb-2 lg:pb-0 overflow-auto">
              <ul class="grid grid-flow-col auto-cols-max gap-2.5">
                <li><RouterLink to="/">{{ $t('footer.legal.cookie_settings') }}</RouterLink></li>
                <li><RouterLink to="/privacy-policy">{{ $t('footer.legal.privacy') }}</RouterLink></li>
                <li><RouterLink to="/license">{{ $t('footer.legal.website_terms') }}</RouterLink></li>
                <li><RouterLink to="/">{{ $t('footer.legal.disclaimer') }}</RouterLink></li>
                <li><RouterLink to="/license">{{ $t('footer.legal.restaurant_agreements') }}</RouterLink></li>
                <li><RouterLink to="/">{{ $t('footer.legal.platform_terms') }}</RouterLink></li>
                <li><RouterLink to="/">{{ $t('footer.legal.accessibility') }}</RouterLink></li>
              </ul>
            </div>
            <div>
              <p>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
            </div>
          </dd>
        </dl>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Footer uses Tailwind classes, minimal custom styles needed */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>