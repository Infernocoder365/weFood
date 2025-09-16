<template>
  <section class="pt-6 md:pt-12 lg:pt-20 pb-24 lg:pb-32 px-[5%]">
    <div class="w-full max-w-wrap mx-auto">
      <ul class="grid grid-cols-1 gap-10">
        <li v-for="item in items" :key="item.title" class="col-span-1 bg-default text-default rounded-[32px] flex flex-wrap lg:flex-nowrap">
          <a href="javascript:;" class="w-full lg:max-w-[360px] shrink-0">
            <img :src="item.img" class="w-full aspect-[370/307] lg:aspect-[370/400] object-cover rounded-[32px]" />
          </a>
          <div class="px-6 py-8 grid grid-cols-1 gap-6 place-content-between">
            <h5 class="text-[28px] font-medium leading-tight">
              <span>{{ item.title }}</span>
            </h5>
            <div class="col-span-1 mb-6">
              <ol class="flex flex-wrap gap-4 lg:gap-6">
                <li v-for="metric in item.metrics" :key="metric.label">
                  <h6 class="text-base font-medium"><span>{{ metric.value }}</span></h6>
                  <p class="text-xd text-gray-default font-medium"><span>{{ metric.label }}</span></p>
                </li>
              </ol>
            </div>
            <div class="pt-6 border-t border-default">
              <h6 class="text-base font-medium"><span>{{ item.owner }}</span></h6>
              <p class="text-xd text-gray-default font-medium"><span>{{ item.role }}</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Metric {
  label: string
  value: string
}

interface CaseItem {
  img: string
  title: string
  metrics: Metric[]
  owner: string
  role: string
}

const base = "/images/resources/case/"

const items: CaseItem[] = [
  {
    img: base + "resources_case_1_1.jpg",
    title: "How Metro Pizza increased direct online sales by $10,000/m by swapping ChowNow for WeFood",
    metrics: [
      { value: "+$112,000", label: "Sales" },
      { value: "+54%", label: "Growth" },
      { value: "+$29,000", label: "Savings" },
    ],
    owner: "John",
    role: "WeFood at Metro Pizza",
  },
  {
    img: base + "resources_case_1_2.jpg",
    title: "How Talkin Tacos increased direct online sales to $120,000/m by using WeFood.com",
    metrics: [
      { value: "+$7,000,000", label: "Sales" },
      { value: "+970%", label: "Growth" },
      { value: "+$435,000", label: "Savings" },
    ],
    owner: "Mo and Omar",
    role: "WeFood of Talkin Tacos",
  },
  {
    img: base + "resources_case_1_3.jpg",
    title: "How Saffron grew direct online sales by $171,400/month after switching to WeFood.com",
    metrics: [
      { value: "+$4,500,000", label: "Sales" },
      { value: "4", label: "Growth" },
      { value: "+$600,000", label: "Savings" },
    ],
    owner: "Rahul Bhatia",
    role: "WeFood of Saffron Indian Kitchen",
  },
  {
    img: base + "resources_case_1_4.jpg",
    title: "How Sushi Me Roll'n’ increased direct online sales by $91,000 using WeFood.com",
    metrics: [
      { value: "+$91,000", label: "Sales" },
      { value: "+47%", label: "Growth" },
      { value: "+54%", label: "Savings" },
    ],
    owner: "Phillip Hang",
    role: "WeFood of Sushi Me Roll'n",
  },
  {
    img: base + "resources_case_1_5.jpg",
    title: "How Doo-Dah Diner increased direct online sales by $72,000 using WeFood.com",
    metrics: [
      { value: "+$72,000", label: "Sales" },
      { value: "+54%", label: "Growth" },
      { value: "+$19,000", label: "Savings" },
    ],
    owner: "Timirie Shibley",
    role: "WeFood of Doo-Dah Diner",
  },
  {
    img: base + "resources_case_1_6.jpg",
    title: "How Samos Oaxaca increased direct online sales to $10,000/m by using WeFood.com",
    metrics: [
      { value: "+$150,000", label: "Sales" },
      { value: "+377%", label: "Growth" },
      { value: "+$70,000", label: "Savings" },
    ],
    owner: "Yuliana Vasquez",
    role: "WeFood of Samos Oaxaca",
  },
  {
    img: base + "resources_case_1_7.jpg",
    title: "How Sushi Addicts grew online orders to $210,000 per year with WeFood",
    metrics: [
      { value: "+$17,000", label: "Sales" },
      { value: "+75%", label: "Growth" },
      { value: "+$2,000", label: "Savings" },
    ],
    owner: "Fernando Izaguirre",
    role: "WeFood of Sushi Addicts",
  },
  {
    img: base + "resources_case_1_8.jpg",
    title: "How Cyclo Noodles grew direct online sales by +8500% by switching to WeFood.com",
    metrics: [
      { value: "+$177,500", label: "Sales" },
      { value: "+8500%", label: "Growth" },
      { value: "+$31,000", label: "Savings" },
    ],
    owner: "Sandy Sei",
    role: "WeFood of Cyclo Noodles",
  },
  {
    img: base + "resources_case_1_9.jpg",
    title: "How Aburaya grew online sales by $25,000/m by switching from third-party apps",
    metrics: [
      { value: "+$25,000", label: "Sales" },
      { value: "+160%", label: "Growth" },
      { value: "+$100,000", label: "Savings" },
    ],
    owner: "Hiroyuki Aidichi",
    role: "WeFood of Aburaya Fried Chicken",
  },
  {
    img: base + "resources_case_1_10.jpg",
    title: "How Township Line Pizza grew online sales to $300,000 per year with WeFood.com",
    metrics: [
      { value: "+$300,000", label: "Sales" },
      { value: "100's", label: "Growth" },
      { value: "+$60,000", label: "Savings" },
    ],
    owner: "Sarkis Panossian",
    role: "WeFood of Township Line Pizza",
  },
  {
    img: base + "resources_case_1_11.jpg",
    title: "How The Modern Vegan Grew Online Sales by 3x with WeFood.com",
    metrics: [
      { value: "+$194,000", label: "Sales" },
      { value: "+100%", label: "Growth" },
      { value: "25%", label: "Savings" },
    ],
    owner: "Gia Schultz",
    role: "WeFood of The Modern Vegan",
  },
]
</script>