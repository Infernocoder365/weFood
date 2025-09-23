import './assets/main.css'
import 'vant/lib/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';
import Vant from 'vant';
import { Rate } from 'vant';
import i18n from '@/lang'



import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vant)
app.use(Rate)
app.use(ToastPlugin)
app.use(i18n)

app.mount('#app')
