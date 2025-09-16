<script setup lang="ts">
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Mission & Values</h2>
    
    <!-- Mission Statement -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
      <h3 class="text-2xl font-bold text-center mb-6">Our Mission</h3>
      <p class="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
        We believe restaurants deserve better tools to grow online — without paying heavy commissions. 
        We build websites and ordering experiences that feel familiar to guests and are optimized for sales. 
        From day one, our focus has been helping local restaurants compete with large delivery apps by 
        owning their customer relationships and growing direct orders.
      </p>
    </div>

    <!-- Core Values -->
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-8 border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Direct Relationships</h3>
        <p class="text-gray-700">Restaurants should own the relationship with their customers, not rent it from third parties. We empower direct customer connections.</p>
      </div>
      
      <div class="bg-white p-8 border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Sales-First Design</h3>
        <p class="text-gray-700">Designs should prioritize conversions and repeat orders over vanity metrics. Every feature is built to drive revenue growth.</p>
      </div>
      
      <div class="bg-white p-8 border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">Fast Results</h3>
        <p class="text-gray-700">Go live in days, not months — and see results immediately. We believe in rapid deployment and instant impact.</p>
      </div>
    </div>
  </section>
</template>