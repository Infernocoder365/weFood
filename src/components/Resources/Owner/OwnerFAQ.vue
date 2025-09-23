<template>
  <ProductFAQs :title="title" :faqs="faqs" :side-card="sideCard" />
</template>

<script setup lang="ts">
import ProductFAQs from '../../Product/ProductFAQs.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const title = t('resources.owner.faqs.title')

const defaultFaqs = [
  { question: 'What is included?', answer_html: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Your subscription includes all of our features. The WeFood platform upgrades your online presence to drive direct orders like the big restaurant brands. One price upgrades your website and online ordering system and gives you your own branded app. You also get proven marketing automations that drive revenue per guest higher.<br><br>“<a href="javascript:;">WeFood.com is the secret to our online success. It makes online marketing so easy, and our guests love using our new ordering system and app.”</a></p><p></p><p><a href="javascript:;">Yuliana Vasquez, WeFood of Samos Oaxaca</a></p></div></article>` },
  { question: 'What commissions do I pay as a restaurant?', answer_html: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Restaurants pay zero commissions, and are only charged a simple flat fee for the WeFood platform.<br><br>As for your customers, they are charged 5% of their order. When your customers order from third-party apps, they get charged 15% or more, so they pay a lot less when they order directly from you.<br><br>“It's only one flat fee. There's no hidden fees. They're very upfront about what they're going to charge you. I love it, you know, and I cannot say that enough.”</p><p></p><p>Sandy Sei, WeFood of Cyclo Noodles</p><p></p></div></article>` },
  { question: 'How long are your contracts?', answer_html: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>There are no long-term contracts or commitments. You can use WeFood month to month, and cancel at any time you'd like. At WeFood, we don’t believe in locking restaurants into contracts. That’s why we have the only month-to-month billing in the industry.<br><br>“The best part is your customer service. It’s so quick and friendly; it just made my life easier. If somebody asks me, I recommend WeFood.”</p><p></p><p>Hiroyuki Aidichi, WeFood of Aburaya Fried Chicken</p><p></p></div></article>` },
  { question: 'How long does it take to get started?', answer_html: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Many restaurants can launch within a week. We'll ask you for details like your website domain, Google Business, and Yelp information. If you have those on hand, we can launch your new online presence in a few days.<br><br>“The process was so easy. I think it was ready in less than two weeks. I'm so grateful.”</p><p></p><p>Gia Schultz, WeFood of The Modern Vegan</p><p></p></div></article>` },
  { question: 'Should I stop using third-party delivery apps?', answer_html: `<article class="ctx-article p-5 text-base text-[#171F1F]"><div><p>Most of our customers use both. They use the apps as another marketing channel, then drive their customers to order directly from them using WeFood.<br><br>“We're working with <a href="javascript:;">WeFood.com</a> and it's pulling away the traffic that's going to those third-party platforms, and it's coming directly to us.”</p><p></p><p>Matt Miller, Co-WeFood of Mr M's Sandwich Shop</p><p></p></div></article>` }
]

const faqs = tm('resources.owner.faqs.items') as any
console.log(faqs)
const sideCard = {
  imageSrc: '/images/resources/owner/faq_manager_1.jpg',
  imageAlt: t('resources.owner.faqs.side_card.image_alt'),
  quote: t('resources.owner.faqs.side_card.quote'),
  name: t('resources.owner.faqs.side_card.name'),
  role: t('resources.owner.faqs.side_card.role')
}
</script>
