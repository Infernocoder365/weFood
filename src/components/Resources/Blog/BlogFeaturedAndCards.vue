<template>
  <section class="px-2 bg-default text-default">
    <div class="w-full max-w-wrap mx-auto">
      <div class="px-4 sm:px-10 lg:px-16 py-12 lg:py-20 bg-gray-light rounded-[48px]">
        <ul class="grid grid-cols-12 gap-6 md:gap-2">
          <!-- Featured -->
          <li class="col-span-12 pb-6 lg:pb-0">
            <dl class="w-full bg-default text-default rounded-[32px] flex flex-wrap">
              <dt class="w-full lg:w-[440px] rounded-[32px] shadow-xl lg:shadow-none shadow-minor/30 overflow-hidden flex shrink-0">
                <img src="/images/resources/blog/resources_blog_1_1.jpeg" class="w-full aspect-[35/20] lg:aspect-auto object-cover" alt="Featured image" />
              </dt>
              <dd class="w-full px-4 py-8 lg:pl-14 lg:pr-[72px] lg:flex-1 lg:overflow-hidden">
                <div class="h-full grid gap-6 lg:gap-14 place-content-between">
                  <div class="flex flex-col items-start gap-4 lg:gap-6">
                    <p class="px-2 py-0.5 text-xs font-medium bg-minor/10 text-minor rounded-full">FEATURED</p>
                    <h5 class="text-[32px] font-medium leading-tight">How to Create a Restaurant Website That Grows Your Online Orders</h5>
                    <p class="text-gray-default font-medium">Discover easy ways to build a website that attracts more customers to your restaurant.</p>
                  </div>
                  <div class="flex flex-wrap items-center space-x-2 sm:space-x-4 lg:space-x-6">
                    <div class="w-full sm:w-auto">
                      <img src="/images/resources/blog/resources_blog_1_2.jpg" class="w-6 h-6 mr-2 rounded-full object-cover inline-block align-middle" alt="Author" />
                      <span>Adam Guild</span>
                    </div>
                    <em class="h-5 border-l border-black hidden sm:block"></em>
                    <div class="w-full sm:w-auto text-gray-default">5 min read</div>
                    <em class="h-5 border-l border-black hidden sm:block"></em>
                    <div class="w-full sm:w-auto text-gray-default">February 26, 2024</div>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
          <!-- Card 1 -->
          <li class="col-span-12 md:col-span-6 lg:col-span-4">
            <div class="w-full h-full bg-default text-default rounded-2xl grid place-content-between">
              <dl class="p-4 sm:p-6 flex">
                <dt class="flex-1 overflow-hidden flex flex-col items-start gap-4">
                  <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">Increase Online Sales</h6>
                  <p class="text-xl font-medium">7 Reliable Local SEO Tips To Grow Your Restaurant's Exposure</p>
                </dt>
                <dd class="w-[90px] h-[90px] ml-4 sm:ml-6 flex shrink-0">
                  <img src="/images/resources/blog/resources_blog_1_3.jpeg" class="w-full h-full object-cover rounded-2xl" alt="Card 1" />
                </dd>
              </dl>
              <div class="p-4 sm:px-6 text-sm sm:text-base text-gray-default font-medium flex items-start space-x-2.5 sm:space-x-6">
                <span>10 min read</span>
                <i class="h-5 border-l border-black hidden sm:block"></i>
                <span>March 26, 2024</span>
              </div>
            </div>
          </li>
          <!-- Card 2 -->
          <li class="col-span-12 md:col-span-6 lg:col-span-4">
            <div class="w-full h-full bg-default text-default rounded-2xl grid place-content-between">
              <dl class="p-4 sm:p-6 flex">
                <dt class="flex-1 overflow-hidden flex flex-col items-start gap-4">
                  <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">Restaurant Software</h6>
                  <p class="text-xl font-medium">8 Best Restaurant Online Ordering Systems to Drive Sales in 2025</p>
                </dt>
                <dd class="w-[90px] h-[90px] ml-4 sm:ml-6 flex shrink-0">
                  <img src="/images/resources/blog/resources_blog_1_4.jpeg" class="w-full h-full object-cover rounded-2xl" alt="Card 2" />
                </dd>
              </dl>
              <div class="p-4 sm:px-6 text-sm sm:text-base text-gray-default font-medium flex items-start space-x-2.5 sm:space-x-6">
                <span>11 min read</span>
                <i class="h-5 border-l border-black hidden sm:block"></i>
                <span>November 20, 2024</span>
              </div>
            </div>
          </li>
          <!-- Card 3 -->
          <li class="col-span-12 md:col-span-6 lg:col-span-4">
            <div class="w-full h-full bg-default text-default rounded-2xl grid place-content-between">
              <dl class="p-4 sm:p-6 flex">
                <dt class="flex-1 overflow-hidden flex flex-col items-start gap-4">
                  <h6 class="text-[11px] px-2 py-0.5 bg-minor/10 text-minor font-medium rounded-full">Marketing Strategy</h6>
                  <p class="text-xl font-medium">Restaurant SEO is Easier Than You Think (3 Big Wins)</p>
                </dt>
                <dd class="w-[90px] h-[90px] ml-4 sm:ml-6 flex shrink-0">
                  <img src="/images/resources/blog/resources_blog_1_5.jpeg" class="w-full h-full object-cover rounded-2xl" alt="Card 3" />
                </dd>
              </dl>
              <div class="p-4 sm:px-6 text-sm sm:text-base text-gray-default font-medium flex items-start space-x-2.5 sm:space-x-6">
                <span>22 min read</span>
                <i class="h-5 border-l border-black hidden sm:block"></i>
                <span>May 6, 2024</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>