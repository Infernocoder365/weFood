<template>
  <em data-v-27315d28="" class="w-full h-16 lg:h-[5.5rem] block"></em>
  <header :class="[
    'fixed top-0 left-0 right-0 text-black w-full sm:px-8 lg:px-12 bg-opacity-0 bg-white lg:hover:bg-opacity-100 transition-all duration-300 z-[998] backdrop-blur-13'
  ]">
    <div class="w-full max-w-fixed h-16 lg:h-[5.5rem] px-4 mx-auto flex items-center">
      <RouterLink aria-current="page" to="/" class="router-link-active router-link-exact-active flex items-center"
        id="logo"><img src="/images/home/logo.png" class="w-auto h-12"></RouterLink>
      <nav class="h-full px-12 text-xd hidden flex-1 lg:flex items-center">
        <div class="nav_item h-full flex items-center group"><a href="javascript:;"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 transition-colors"><span>Product</span></a>
          <section
            class="nav_item__popup absolute top-full left-0 w-full bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999] pointer-events-none group-hover:pointer-events-auto">
            <div class="w-full max-w-7xl mx-auto">
              <dl class="grid grid-cols-5 gap-3">
                <dt class="col-span-3">
                  <h5 class="mb-5 text-xd opacity-50 text-gray-600"><span>Product</span></h5>
                  <div class="block">
                    <ul class="-ml-3 grid grid-cols-2 gap-2">
                      <li class="col-span-1"><RouterLink to="/product/product"
                          class="w-full p-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors flex">
                          <div class="w-6 h-6 mr-3 shrink-0"><svg width="100%" height="100%" stroke="#787A7D"
                              stroke-width="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_714_25822)">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9 17H6C4.34315 17 3 15.6569 3 14V8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V14C21 15.6569 19.6569 17 18 17H15M9 17V20H15V17M9 17H15">
                                </path>
                              </g>
                              <defs>
                                <clippath id="clip0_714_25822">
                                  <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)">
                                  </rect>
                                </clippath>
                              </defs>
                            </svg></div>
                          <div class="flex-1 overflow-hidden">
                            <h5 class="text-base font-medium text-black"><span>Website Builder</span></h5>
                            <p class="text-sm text-gray-600 font-medium"><span>Convert more visitors into
                                customers with an Al-powered website.</span></p>
                          </div>
                        </RouterLink></li>
                      <li class="col-span-1"><RouterLink to="/product/marketing"
                          class="w-full p-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors flex">
                          <div class="w-6 h-6 mr-3 shrink-0"><svg width="100%" height="100%" stroke="#787A7D"
                              stroke-width="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_714_25848)">
                                <path stroke-linecap="square" stroke-linejoin="round"
                                  d="M2.75879 10.1637L3.62703 15.0877C3.91474 16.7194 5.47072 17.8089 7.1024 17.5212L10.0972 16.9931M2.75879 10.1637L2.58514 9.17885C2.29743 7.54716 3.38694 5.99119 5.01862 5.70348L11.9123 4.48794C13.544 4.20023 15.0999 5.28974 15.3876 6.92142C15.4835 7.46532 15.1204 7.98397 14.5765 8.07988L2.75879 10.1637ZM16.0017 12V14L17.6684 15.6667M22.0017 14C22.0017 17.3137 19.3154 20 16.0017 20C12.688 20 10.0017 17.3137 10.0017 14C10.0017 10.6863 12.688 8 16.0017 8C19.3154 8 22.0017 10.6863 22.0017 14Z">
                                </path>
                              </g>
                              <defs>
                                <clippath id="clip0_714_25848">
                                  <rect width="24" height="24" fill="white"></rect>
                                </clippath>
                              </defs>
                            </svg></div>
                          <div class="flex-1 overflow-hidden">
                            <h5 class="text-base font-medium text-black"><span>Automated Marketing</span></h5>
                            <p class="text-sm text-gray-600 font-medium"><span>Drive sales from customers with
                                proven, automated campaigns.</span></p>
                          </div>
                        </RouterLink></li>
                      <li class="col-span-1"><RouterLink to="/product/delivery"
                          class="w-full p-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors flex">
                          <div class="w-6 h-6 mr-3 shrink-0"><svg width="100%" height="100%" stroke="#787A7D"
                              stroke-width="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_714_25842)">
                                <path stroke-linecap="square" stroke-linejoin="round"
                                  d="M9 16C5.68629 16 3 13.3137 3 10C3 6.68629 5.68629 4 9 4C11.4597 4 13.5737 5.48012 14.5 7.59829M21 14C21 17.3137 18.3137 20 15 20C12.3841 20 10.1591 18.3259 9.33811 15.9906C9.11911 15.3677 9 14.6978 9 14C9 10.7998 11.5055 8.1847 14.6619 8.00937C14.7738 8.00315 14.8865 8 15 8C18.3137 8 21 10.6863 21 14Z">
                                </path>
                              </g>
                              <defs>
                                <clippath id="clip0_714_25842">
                                  <rect width="24" height="24" fill="white"></rect>
                                </clippath>
                              </defs>
                            </svg></div>
                          <div class="flex-1 overflow-hidden">
                            <h5 class="text-base font-medium text-black"><span>Zero-Commission Delivery</span></h5>
                            <p class="text-sm text-gray-600 font-medium"><span>Profitable delivery by
                                top-rated drivers at a fair price.</span></p>
                          </div>
                        </RouterLink></li>
                      <li class="col-span-1"><RouterLink to="/product/branded"
                          class="w-full p-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors flex">
                          <div class="w-6 h-6 mr-3 shrink-0"><svg width="100%" height="100%" stroke="#787A7D"
                              stroke-width="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_714_25834)">
                                <path
                                  d="M10 19H14M9 22H15C16.6569 22 18 20.6569 18 19L18 5C18 3.34315 16.6569 2 15 2L9 2C7.34315 2 6 3.34315 6 5L6 19C6 20.6569 7.34315 22 9 22Z"
                                  stroke-linecap="round" stroke-linejoin="round"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_714_25834">
                                  <rect width="24" height="24" fill="white"></rect>
                                </clippath>
                              </defs>
                            </svg></div>
                          <div class="flex-1 overflow-hidden">
                            <h5 class="text-base font-medium text-black"><span>Custom Mobile App</span></h5>
                            <p class="text-sm text-gray-600 font-medium"><span>Grow repeat orders with a
                                5-star mobile app.</span></p>
                          </div>
                        </RouterLink></li>
                      <li class="col-span-1"><RouterLink to="/product/ordering"
                          class="w-full p-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors flex">
                          <div class="w-6 h-6 mr-3 shrink-0"><svg width="100%" height="100%" stroke="#787A7D"
                              stroke-width="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M15.0021 8C15.0021 9.65685 13.6589 11 12.0021 11C10.3452 11 9.00208 9.65685 9.00208 8M4.82627 6.81287L4.20127 16.8129C4.09333 18.54 5.46497 20 7.19543 20H16.8087C18.5392 20 19.9108 18.54 19.8029 16.8129L19.1779 6.81287C19.0791 5.23176 17.7679 4 16.1837 4H7.82043C6.23624 4 4.92509 5.23176 4.82627 6.81287Z"
                                stroke-linecap="round"></path>
                            </svg></div>
                          <div class="flex-1 overflow-hidden">
                            <h5 class="text-base font-medium text-black"><span>Online Ordering</span></h5>
                            <p class="text-sm text-gray-600 font-medium"><span>Get more orders with online
                                ordering that feels familiar and easy.</span></p>
                          </div>
                        </RouterLink></li>
                      <li class="col-span-1"><RouterLink to="/product/loyalty"
                          class="w-full p-3 rounded-md hover:bg-gray-50 hover:text-blue-600 transition-colors flex">
                          <div class="w-6 h-6 mr-3 shrink-0"><svg width="100%" height="100%" stroke="#787A7D"
                              stroke-width="2" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_2017_22534)">
                                <path
                                  d="M14.001 2.4375C14.001 2.4375 14.1787 3.47751 14.001 4.4375C13.8095 5.47144 13.001 6.4375 13.001 6.4375M15.501 8.9375L16.501 7.9375M18.301 5.1875L18.751 3.9375M20.001 8.4375L21.001 7.9375M18.001 11.4375C18.001 11.4375 18.7571 11.4695 19.501 11.7075C20.1715 11.9221 21.001 12.4375 21.001 12.4375M5.78101 21.2515L15.1635 17.5555C16.5037 17.0276 16.8632 15.299 15.8447 14.2805L10.1586 8.59438C9.14017 7.57593 7.41158 7.93542 6.88362 9.27547L3.18721 18.6575C2.54631 20.2843 4.15426 21.8923 5.78101 21.2515Z"
                                  stroke-linecap="round" stroke-linejoin="round"></path>
                              </g>
                              <defs>
                                <clippath id="clip0_2017_22534">
                                  <rect width="24" height="24" fill="white" transform="translate(0 0.4375)">
                                  </rect>
                                </clippath>
                              </defs>
                            </svg></div>
                          <div class="flex-1 overflow-hidden">
                            <h5 class="text-base font-medium text-black"><span>Loyalty Program</span></h5>
                            <p class="text-sm text-gray-600 font-medium"><span>Build loyalty with a rewards
                                program inspired by the big brands.</span></p>
                          </div>
                        </RouterLink></li>
                    </ul>
                  </div>
                </dt>
                <dd class="col-span-2 grid grid-cols-3 gap-2">
                  <div class="col-span-3 h-[17.5rem] relative"><img src="/images/home/nav-product.jpg"
                      class="w-full h-full object-cover rounded-[1.25rem]">
                    <div
                      class="w-full h-full py-5 pl-5 pr-12 text-white rounded-[1.25rem] absolute left-0 top-0 flex flex-col justify-between"
                      style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));"><em
                        class="w-10 h-10 bg-white/10 rounded-full self-end flex items-center justify-center"><svg
                          class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                          </path>
                        </svg></em>
                      <div class="w-full text-xd">
                        <p>How Talkin Tacos increased direct online sales to $120,000/m by using WeFood.com</p>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </section>
        </div>
        <div class="nav_item h-full flex items-center"><RouterLink to="/pricing"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 transition-colors"><span>Pricing</span></RouterLink>
        </div>
        <div class="nav_item h-full flex items-center"><RouterLink to="/works"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 transition-colors"><span>How
              it works</span></RouterLink></div>
        <div class="nav_item h-full flex items-center group"><a href="javascript:;"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 transition-colors"><span>Company</span></a>
          <section
            class="nav_item__popup absolute top-full left-0 w-full bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999] pointer-events-none group-hover:pointer-events-auto">
            <div class="w-full max-w-7xl mx-auto">
              <dl class="grid grid-cols-5 gap-3">
                <dt class="col-span-2">
                  <h5 class="mb-5 text-xd opacity-50 text-gray-600"><span>Company</span></h5>
                  <div class="flex">
                    <div class="-mx-3 text-xl flex flex-col items-start"><RouterLink to="/company/story"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Our
                          Story</span></RouterLink><RouterLink to="/company/careers"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Careers</span></RouterLink><RouterLink
                        to="/company/press" class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Press</span></RouterLink><RouterLink
                        to="/company/reviews" class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Rate Your
                          Experience</span></RouterLink><RouterLink to="/company/releases"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Product
                          Releases</span></RouterLink></div>
                  </div>
                </dt>
                <dd class="col-span-3 grid grid-cols-5 gap-2"><a href="javascript:;" class="col-span-3 relative"><img
                      src="/images/home/nav-company.jpg"
                      class="w-full h-full min-h-[17.5rem] object-cover rounded-[1.25rem]">
                    <div
                      class="w-full h-full py-5 pl-5 pr-12 text-white rounded-[1.25rem] absolute left-0 top-0 flex flex-col justify-between"
                      style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));"><em
                        class="w-10 h-10 bg-white/10 rounded-full self-end flex items-center justify-center"><svg
                          class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                          </path>
                        </svg></em>
                      <div class="w-full text-xd">
                        <p>WeFood named to Forbes Next Billion -Dollar Startups 2024</p>
                      </div>
                    </div>
                  </a><RouterLink to="/company/careers"
                    class="col-span-2 pt-4 pr-4 pl-6 pb-6 bg-[#171F1F] text-white rounded-[1.25rem] hover:text-minor hover:underline flex flex-col justify-between"><em
                      class="w-10 h-10 bg-white/10 rounded-full self-end flex items-center justify-center"><svg
                        class="w-6 h-6 text-[#75777E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                          d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                        </path>
                      </svg></em>
                    <div class="text-xl font-medium"><span>We're Hiring</span><br><span class="text-[#A1A3A5]">View our
                        openings</span></div>
                  </RouterLink></dd>
              </dl>
            </div>
          </section>
        </div>
        <div class="nav_item h-full flex items-center group"><a href="javascript:;"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 transition-colors"><span>Resources</span></a>
          <section
            class="nav_item__popup absolute top-full left-0 w-full bg-white shadow-xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999] pointer-events-none group-hover:pointer-events-auto">
            <div class="w-full max-w-7xl mx-auto">
              <dl class="grid grid-cols-5 gap-3">
                <dt class="col-span-2">
                  <h5 class="mb-5 text-xd opacity-50 text-gray-600"><span>Learn</span></h5>
                  <div class="flex">
                    <div class="-mx-3 text-xl flex flex-col items-start"><RouterLink to="/resources/blog"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Blog</span></RouterLink><RouterLink
                        to="/resources/case"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Case
                          Studies</span></RouterLink><RouterLink to="/resources/support"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Support
                          Center</span></RouterLink><RouterLink to="/resources/owner"
                        class="py-1 px-3 hover:bg-gray-50 hover:text-blue-600 transition-colors rounded"><span>Compare
                          WeFood</span></RouterLink></div>
                  </div>
                </dt>
                <dd class="col-span-3 grid grid-cols-3 gap-2">
                  <div class="col-span-2 relative"><img src="/images/home/nav-resources.jpg"
                      class="w-full h-full min-h-[17.5rem] object-cover rounded-[1.25rem]">
                    <div
                      class="w-full h-full py-5 pl-5 pr-12 text-white rounded-[1.25rem] absolute left-0 top-0 flex flex-col justify-between"
                      style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));"><em
                        class="w-10 h-10 bg-white/10 rounded-full self-end flex items-center justify-center"><svg
                          class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                          </path>
                        </svg></em>
                      <div class="w-full text-xd">
                        <p>How Sushi Me Rollin’ increased direct online sales by $91,000 using WeFood.com</p>
                      </div>
                    </div>
                  </div><RouterLink to="/resources/case"
                    class="col-span-1 pt-4 pr-4 pl-6 pb-6 bg-gray-50 rounded-[1.25rem] hover:text-blue-600 hover:underline flex flex-col justify-between"><em
                      class="w-10 h-10 bg-black/10 rounded-full self-end flex items-center justify-center"><svg
                        class="w-6 h-6 text-[#75777E]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                          d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                        </path>
                      </svg></em>
                    <div class="text-xl font-medium"><span>Case Studies</span><br><span class="text-[#A1A3A5]">View
                        all</span></div>
                  </RouterLink>
                </dd>
              </dl>
            </div>
          </section>
        </div>
      </nav><i class="flex-1 block lg:hidden"></i>
      <dl class="h-full text-xd flex items-center shrink-0">
        <dd class="nav_item h-full ml-3 hidden lg:flex items-center">
          <RouterLink to="/premium-membership"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 hover:underline transition-colors">
            <span>Premium Membership</span></RouterLink>
        </dd>
        <dd class="nav_item h-full ml-3 hidden lg:flex items-center">
          <RouterLink to="/dashboard"
            class="nav_item__btn px-2.5 py-2 rounded-lg cursor-pointer select-none flex hover:bg-gray-100 hover:underline transition-colors">
            <span>Dashboard</span></RouterLink>
        </dd>
        <dd class="ml-1 nav_menu flex flex-col">
          <RouterLink to="/login" class="p-2 flex hover:bg-gray-100 rounded transition-colors"><svg
              class="w-5 h-5 text-black" viewBox="0 0 16 16" focusable="false" role="img"
              xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <g>
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
                </path>
              </g>
            </svg></RouterLink>
        </dd>
        <dd class="ml-1 relative flex"><button class="p-2 flex hover:bg-gray-100 rounded transition-colors"><svg
              class="w-5 h-5 text-black" viewBox="0 0 16 16" focusable="false" role="img"
              xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <g>
                <path
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z">
                </path>
              </g>
            </svg></button><select
            class="w-full h-full text-lg text-black absolute right-0 top-0 opacity-0 cursor-pointer">
            <option value="en">English</option>
            <option value="zh-CN">中文简体</option>
            <option value="zh-HK">中文繁體</option>
          </select></dd>
        <dd class="ml-1 lg:hidden"><button @click="toggleMenu"
            class="p-2 flex hover:bg-gray-100 rounded transition-colors">
            <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button></dd>
      </dl>
    </div>
    <div class="w-full h-0 relative lg:hidden">
      <nav v-show="isMenuOpen" @click="closeMenu"
        class="w-full bg-white text-black absolute left-0 top-0 block origin-top shadow-lg"
        style="height: 519px; transition: 0.3s;">
        <div class="w-full max-w-fixed h-full mx-auto overflow-y-auto">
          <div class="px-4 text-lg font-medium">
            <dl>
              <dd class="w-full text-lg font-medium block">
                <RouterLink to="/" class="py-2 hover:text-blue-600 hover:underline transition-colors block">
                  <span>Dashboard</span></RouterLink>
                <RouterLink to="/premium-membership"
                  class="py-2 hover:text-blue-600 hover:underline transition-colors block"><span>Premium
                    Membership</span></RouterLink>
                <RouterLink to="/pricing" class="py-2 hover:text-blue-600 hover:underline transition-colors block">
                  <span>Pricing</span></RouterLink>
                <RouterLink to="/works" class="py-2 hover:text-blue-600 hover:underline transition-colors block">
                  <span>How it works</span></RouterLink>
              </dd>
            </dl>
            <dl>
              <dt class="py-1 text-xd text-gray-600 block"><span>Product</span></dt>
              <dd class="w-full text-lg font-medium block"><RouterLink to="/product/product"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Website Builder</span></RouterLink><RouterLink
                  to="/product/marketing" class="py-2 hover:text-blue-600 transition-colors block"><span>Automated
                    Marketing</span></RouterLink><RouterLink to="/product/delivery"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Zero-Commission Delivery</span></RouterLink><RouterLink
                  to="/product/branded" class="py-2 hover:text-blue-600 transition-colors block"><span>Custom Mobile
                    App</span></RouterLink><RouterLink to="/product/ordering"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Online Ordering</span></RouterLink><RouterLink
                  to="/product/loyalty" class="py-2 hover:text-blue-600 transition-colors block"><span>Loyalty
                    Program</span></RouterLink></dd>
            </dl>
            <dl>
              <dt class="py-1 text-xd text-gray-600 block"><span>Company</span></dt>
              <dd class="w-full text-lg font-medium block"><RouterLink to="/company/story"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Our Story</span></RouterLink><RouterLink
                  to="/company/careers"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Careers</span></RouterLink><RouterLink
                  to="/company/press"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Press</span></RouterLink><RouterLink
                  to="/company/reviews" class="py-2 hover:text-blue-600 transition-colors block"><span>Rate Your
                    Experience</span></RouterLink><RouterLink to="/company/releases"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Product Releases</span></RouterLink></dd>
            </dl>
            <dl>
              <dt class="py-1 text-xd text-gray-600 block"><span>Resources</span></dt>
              <dd class="w-full text-lg font-medium block"><RouterLink to="/resources/blog"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Blog</span></RouterLink><RouterLink
                  to="/resources/case" class="py-2 hover:text-blue-600 transition-colors block"><span>Case
                    Studies</span></RouterLink><RouterLink to="/resources/support"
                  class="py-2 hover:text-blue-600 transition-colors block"><span>Support Center</span></RouterLink><RouterLink
                  to="/resources/owner" class="py-2 hover:text-blue-600 transition-colors block"><span>Compare
                    WeFood</span></RouterLink></dd>
            </dl>
          </div><em class="w-full h-10 block"></em>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
