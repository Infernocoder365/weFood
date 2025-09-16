<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="pt-24 pb-10 lg:pt-40 lg:pb-24 px-ctx text-black"
            style="background-image: linear-gradient(rgb(255, 255, 255), rgb(242, 242, 243));">
            <div class="w-full max-w-wrap mx-auto">
              <div class="w-[600px] max-w-full mx-auto grid grid-cols-1 gap-12 md:gap-14">
                <section class="col-span-1 text-center">
                  <h5 class="mb-4 text-[42px] md:text-[56px] font-medium"><span>One simple price.</span></h5>
                  <p class="text-base font-medium"><span>Month-to-month. No long-term contracts. No cancellation fees.
                      Just pay a flat rate to get everything on the WeFood platform.</span></p>
                </section>
                <section class="col-span-1">
                  <div class="w-full p-6 md:p-8 rounded-[20px] ctx-minor relative"><em
                      class="w-full h-full absolute left-0 top-0 flex"><img src="/images/pricing/bg-grid.svg"
                        class="w-full h-full"></em>
                    <div class="w-full md:h-60 relative flex flex-col md:flex-row md:items-end md:justify-between">
                      <div class="mb-6 md:mb-0">
                        <h5 class="text-[38px] md:text-[48px] font-medium"><span>$499</span></h5>
                        <p class="font-medium opacity-60"><span>Billed monthly</span></p>
                      </div>
                      <div class="flex"><RouterLink to="/dashboard"
                          class="h-12 px-4 bg-white/30 rounded-lg flex items-center"><span>Get Started</span><svg
                            stroke="currentColor" stroke-width="4" width="20" height="20" viewBox="0 0 48 48"
                            fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                            <path d="M19 12L31 24L19 36" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></RouterLink></div>
                    </div>
                  </div>
                </section>
                <section class="col-span-1">
                  <h5 class="mb-3 text-gray-default uppercase"><span>WHAT’S INCLUDED</span></h5>
                  <ul>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>Restaurant Website</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>A restaurant website perfectly optimized
                            to grow your traffic and sales.</span></p>
                      </div>
                    </li>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>Online Ordering</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>An online ordering system that's as good
                            as the biggest restaurant brands.</span></p>
                      </div>
                    </li>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>Mobile App</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>Your very own mobile app, branded for
                            your restaurant, that your regulars will love.</span></p>
                      </div>
                    </li>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>Keep guests coming back with loyalty and rewards</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>A rewards program that gets more repeat
                            orders, just like the national chains.</span></p>
                      </div>
                    </li>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>Automated Marketing</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>Automated email and text marketing
                            campaigns that drive sales on their own.</span></p>
                      </div>
                    </li>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>Month-to-Month Contract</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>No lock-in. No long-term contracts. No
                            cancellation fees. Cancel anytime.</span></p>
                      </div>
                    </li>
                    <li class="w-full px-1 py-4 md:py-5 border-t border-default flex flex-wrap">
                      <div class="w-full md:w-1/2 mb-3 md:mb-0 flex items-center"><em
                          class="w-5 h-5 mr-3 text-minor flex shrink-0"><svg width="100%" height="100%"
                            viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.38564 12.4C0.880846 11.5257 0.628449 11.0885 0.529659 10.6237C0.442249 10.2125 0.442249 9.78749 0.529659 9.37626C0.628449 8.9115 0.880846 8.47433 1.38564 7.6L3.61436 3.73974C4.11915 2.86542 4.37155 2.42825 4.72466 2.11031C5.03709 1.829 5.40516 1.61649 5.805 1.48657C6.2569 1.33974 6.76169 1.33974 7.77128 1.33974H12.2287C13.2383 1.33974 13.7431 1.33974 14.195 1.48657C14.5948 1.61649 14.9629 1.829 15.2753 2.11031C15.6284 2.42825 15.8808 2.86542 16.3856 3.73975L18.6144 7.6C19.1192 8.47433 19.3716 8.9115 19.4703 9.37626C19.5578 9.78749 19.5578 10.2125 19.4703 10.6237C19.3716 11.0885 19.1192 11.5257 18.6144 12.4L16.3856 16.2603C15.8808 17.1346 15.6284 17.5717 15.2753 17.8897C14.9629 18.171 14.5948 18.3835 14.195 18.5134C13.7431 18.6603 13.2383 18.6603 12.2287 18.6603H7.77128C6.76169 18.6603 6.2569 18.6603 5.805 18.5134C5.40516 18.3835 5.03709 18.171 4.72466 17.8897C4.37155 17.5717 4.11915 17.1346 3.61436 16.2603L1.38564 12.4Z"
                              fill="currentCOlor"></path>
                            <path d="M12.5104 7.9165L8.76042 12.4998L7.09375 10.8332" stroke="white" stroke-width="1.25"
                              stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></em>
                        <div class="flex-1 overflow-hidden">
                          <h6 class="font-medium"><span>24/7 Support</span></h6>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2">
                        <p class="text-sm text-gray-default font-medium"><span>You’re 24/7, so we are too. Our customer
                            support is consistently rated 5 stars.</span></p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
</template>

<style scoped>
</style>