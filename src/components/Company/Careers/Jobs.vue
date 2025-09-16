<script setup lang="ts">
interface TeamMember {
  name: string
  role: string
  image?: string
}

interface CompanyValue {
  title: string
  description: string
  icon: string
}

const leadership: TeamMember[] = [
  { name: 'Leadership Team', role: 'Driving Innovation in Restaurant Technology', image: '/images/team/leadership.jpg' }
]

const values: CompanyValue[] = [
  {
    title: 'Customer Obsession',
    description: 'We put our customers at the center of everything we do, constantly seeking ways to exceed their expectations.',
    icon: '❤️'
  },
  {
    title: 'Good Energy',
    description: 'We foster a positive, collaborative environment where everyone can thrive and do their best work.',
    icon: '⚡'
  },
  {
    title: 'Speed',
    description: 'We move fast and iterate quickly, delivering value to our customers without compromising quality.',
    icon: '🚀'
  },
  {
    title: 'Ownership',
    description: 'We take responsibility for our work and outcomes, empowering each team member to make impactful decisions.',
    icon: '🎯'
  },
  {
    title: 'Scaling',
    description: 'We build for growth, creating solutions that can scale with our customers and our business.',
    icon: '📈'
  }
]

const perks = [
  'Competitive salary and equity',
  'Comprehensive health benefits',
  'Flexible remote work',
  'Professional development budget',
  'Unlimited PTO',
  'Latest tech equipment',
  'Team retreats and events',
  'Stock options'
]
</script>

<template>
  <div class="container mx-auto px-4 py-12 space-y-16">
    <!-- Forbes Recognition -->
    <section class="text-center">
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-orange-800 mb-4">🏆 Forbes Recognition</h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          WeFood has been named to <strong>Forbes Next Billion-Dollar Startups 2024</strong>, 
          recognizing our innovative approach to restaurant technology and rapid growth.
        </p>
      </div>
    </section>

    <!-- Leadership Team -->
    <section>
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Leadership Team</h2>
      <div class="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
        <div v-for="(member, idx) in leadership" :key="idx" class="text-center">
          <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
          <p class="text-gray-600">{{ member.role }}</p>
        </div>
      </div>
    </section>

    <!-- Life at WeFood - Company Values -->
    <section>
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Life at WeFood</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(value, idx) in values" :key="idx" class="bg-white p-6 border-2 border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div class="text-3xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-semibold mb-3">{{ value.title }}</h3>
          <p class="text-gray-700">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Perks and Benefits -->
    <section>
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 text-center">Perks & Benefits</h2>
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="(perk, idx) in perks" :key="idx" class="flex items-center space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
            <span class="text-gray-700">{{ perk }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Culture -->
    <section class="text-center">
      <h2 class="text-2xl md:text-3xl font-semibold mb-8">Our Culture</h2>
      <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
        <p class="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
          At WeFood, we believe in creating an environment where innovation thrives and every team member 
          can make a meaningful impact. Our culture is built on collaboration, continuous learning, and 
          a shared passion for helping restaurants succeed.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Remote-First</span>
          <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Innovation-Driven</span>
          <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Customer-Focused</span>
          <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Growth-Oriented</span>
        </div>
      </div>
    </section>

    <!-- Investors Section -->
    <section class="text-center">
      <h2 class="text-2xl md:text-3xl font-semibold mb-8">Backed by Leading Investors</h2>
      <div class="bg-gray-50 rounded-2xl p-8">
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          WeFood is supported by top-tier investors who believe in our mission to transform 
          the restaurant industry through innovative technology solutions.
        </p>
      </div>
    </section>
  </div>
</template>