<template>
  <footer class="w-full px-1.5 md:px-2.5 pt-8 md:pt-14 pb-1.5 bg-footer text-white">
    <section class="max-w-7xl w-full px-4 py-8 lg:p-[38px] mx-auto">
      <div class="w-full max-w-wrap mx-auto">
        <dl class="grid grid-cols-1 gap-14 lg:gap-24">
          <dt class="col-span-1 flex">
            <img src="/images/home/logo.png" class="w-auto h-12" alt="WeFood" />
          </dt>
          <dd class="col-span-1 grid grid-cols-8 gap-10">
            <div class="col-span-8 lg:col-span-2">
              <h5 class="mb-6 text-xs text-[#787A7D]"><span>Product</span></h5>
              <ul class="text-lg font-medium grid gap-3">
                <li><RouterLink to="/product/product">Restaurant Website</RouterLink></li>
                <li><RouterLink to="/product/ordering">Online Ordering</RouterLink></li>
                <li><RouterLink to="/product/branded">Custom Mobile App</RouterLink></li>
                <li><RouterLink to="/product/delivery">Zero-Commission Delivery</RouterLink></li>
                <li><RouterLink to="/product/loyalty">Loyalty Program</RouterLink></li>
                <li><RouterLink to="/product/marketing">Automated Marketing</RouterLink></li>
                <li><RouterLink to="/company/releases">See What's New</RouterLink></li>
              </ul>
            </div>
            <div class="col-span-8 md:col-span-4 lg:col-span-1">
              <h5 class="mb-6 text-xs text-[#787A7D]"><span>Resources</span></h5>
              <ul class="text-sm text-[#A1A3A5] font-medium grid gap-3">
                <li><RouterLink to="/resources/case">Case Studies</RouterLink></li>
                <li><RouterLink to="/resources/owner">Compare WeFood</RouterLink></li>
              </ul>
            </div>
            <div class="col-span-8 md:col-span-4 lg:col-span-1">
              <h5 class="mb-6 text-xs text-[#787A7D]"><span>Company</span></h5>
              <ul class="text-sm text-[#A1A3A5] font-medium grid gap-3">
                <li><RouterLink to="/company/story">About</RouterLink></li>
                <li><RouterLink to="/company/careers">Careers</RouterLink></li>
                <li><RouterLink to="/company/press">Press</RouterLink></li>
              </ul>
            </div>
          </dd>
          <dd class="text-xs text-[#6C6F75] col-span-1 flex flex-col lg:flex-row-reverse lg:justify-between">
            <div class="w-full lg:w-auto lg:max-w-[70%] pb-2 lg:pb-0 overflow-auto">
              <ul class="grid grid-flow-col auto-cols-max gap-2.5">
                <li><RouterLink to="/">Cookie Settings</RouterLink></li>
                <li><RouterLink to="/privacy-policy">Privacy</RouterLink></li>
                <li><RouterLink to="/license">Website Terms</RouterLink></li>
                <li><RouterLink to="/">Disclaimer</RouterLink></li>
                <li><RouterLink to="/license">Restaurant Agreements</RouterLink></li>
                <li><RouterLink to="/">Platform Terms</RouterLink></li>
                <li><RouterLink to="/">Accessibility</RouterLink></li>
              </ul>
            </div>
            <div>
              <p>2012 © WeFood. All right reserved.</p>
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