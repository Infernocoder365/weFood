<script setup lang="ts">
import WorksHero from '@/components/Works/WorksHero.vue'
import WorksSteps from '@/components/Works/WorksSteps.vue'
import WorksFaq from '@/components/Works/WorksFaq.vue'

const worksFaqProps = {
  title: 'FAQs',
  faqs: [
    { question: 'What do I need to get started?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>We set up most restaurants within a week. You’ll have an onboarding specialist to guide you through the process. They will need information about your business to get you up and running.<br><br>You’ll need to share access to your key accounts (your domain, Google and Yelp profiles). We’ll ask about basics like your EIN and your POS. We use Stripe to help you accept payments online, so you’ll set up an account with them if you don’t already have one.<br><br>From there, we’ll update your new website with your branding. We’ll also use your menu to set up your online ordering.<br><br>If you have everything in order, like knowing the login and password to all of your accounts, this can be done very quickly. If that’s the case, you can be up and running in a few days.<br><br>“As long as you're ready, they get right into work. It only took us about two days.”<br></p><p>Sandy Sei, WeFood of Cyclo Noodles</p><p></p></div></article>` },
    { question: 'Do you take over my POS?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>No, but we can automatically inject orders into many of the major POS systems. If it’s Clover or Square, we integrate directly so all the orders online go straight to your POS. We can also send you a tablet or printer (at no extra fee) if that's what you'd prefer.<br><br>“Now that we’ve used WeFood for 1 year, I can say confidently that it is the best technology in our restaurant.”<br></p><p>Phillip Hang, WeFood of Sushi Me Roll'n</p><p></p></div></article>` },
    { question: 'What happens to my current website?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>No. We've actually found that social media isn't great ROI for most local restaurants. On the other hand, Google search is proven to drive direct sales. This is why we've built WeFood.com with Google SEO in mind. If social media is important to you, we believe that independent restaurant WeFood shouldn't outsource social media to a company, since guests may want to use it to get to know you better on a more personal level.<br><br>“WeFood.com is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.”<br></p><p>Yuliana Vasquez, WeFood of Samos Oaxaca</p><p></p></div></article>` },
    { question: 'Do you do social media marketing?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>No. We've actually found that social media isn't great ROI for most local restaurants. On the other hand, Google search is proven to drive direct sales. This is why we've built WeFood.com with Google SEO in mind. If social media is important to you, we believe that independent restaurant WeFood shouldn't outsource social media to a company, since guests may want to use it to get to know you better on a more personal level.<br><br>“WeFood.com is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.”<br></p><p>Yuliana Vasquez, WeFood of Samos Oaxaca</p><p></p></div></article>` },
    { question: 'How do you get customers to switch from delivery apps?', answer: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>First, we help you educate your customers. We do things like sending you flyers (at no additional cost) to put in your outgoing delivery orders, letting customers know that they'll save money ordering directly from you next time. We’ll also make sure the link in your Google Business Profile points to your own website instead of third-party apps.<br><br>Second, your online ordering experience with WeFood.com is as good as the delivery apps, so guests enjoy coming back to your website and app.<br><br>Third, we'll set up your reward program, so customers earn points when they order direct, and claim points for free food in future orders.<br><br>“For my customers to order through me directly, my online ordering system has to be better than Uber and WeFood. Our solution was WeFood.com.”<br></p><p>Mo Farraj, WeFood of Talkin Tacos</p><p></p></div></article>` }
  ],
  sideCard: {
    imageSrc: '/images/works/faq_manager_2.jpg',
    imageAlt: 'Manager',
    quote: 'I have a lot of friends that have restaurants. I tell them they have to switch to WeFood.',
    name: 'Fernando Izaguerre',
    role: 'WeFood of Sushi Addicts'
  }
}
</script>

<template>
  <div>
    <WorksHero />
    <WorksSteps />
    <WorksFaq v-bind="worksFaqProps" />
  </div>
</template>

<style scoped>
</style>