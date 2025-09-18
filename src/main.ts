import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

const messages = {
  en: {
    common: {
      back: 'Return to previous page',
      submit: 'Submit',
      noMore: 'No more data',
      confirm: 'Confirm',
      success: 'Success!',
      lang: { en: 'English', zh: '中文' },
    },
    form: {
      phone: 'Phone Number',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      referralCode: 'Referral Code',
      depositPassword: 'Deposit Password',
      placeholder: 'Type here',
    },
    wallet: {
      title: 'Fund History',
    },
    order: {
      title: 'Orders',
      tabs: {
        all: 'All Orders',
        pending: 'Pending',
        freezing: 'Freezing',
        completed: 'Completed',
      },
    },
    auth: {
      login: {
        title: 'Login',
        submit: 'Login',
        signingIn: 'Signing in...',
        success: 'You have successfully logged in',
        failed: 'Login failed',
        noAccount: "Don't have an account?",
        createHere: 'Create an account',
        forgot: 'Forgot Password?',
      },
      register: {
        title: 'Create an account',
        submit: 'Register',
        submitting: 'Submitting...',
        success: 'You have successfully registered',
        failed: 'Register failed',
        already: 'Already have an account?',
        loginHere: 'Log in here',
        agreePrefix: 'I have read and agree to',
        terms: 'Registration Terms',
      },
    },
  },
  zh: {
    common: {
      back: '返回上一页',
      submit: '提交',
      noMore: '没有更多数据',
      confirm: '确认',
      success: '成功！',
      lang: { en: 'English', zh: '中文' },
    },
    form: {
      phone: '手机号',
      password: '登录密码',
      confirmPassword: '确认密码',
      referralCode: '邀请码',
      depositPassword: '资金密码',
      placeholder: '请输入',
    },
    wallet: {
      title: '资金记录',
    },
    order: {
      title: '订单',
      tabs: {
        all: '全部订单',
        pending: '进行中',
        freezing: '冻结中',
        completed: '已完成',
      },
    },
    auth: {
      login: {
        title: '登录',
        submit: '登录',
        signingIn: '登录中...',
        success: '登录成功',
        failed: '登录失败',
        noAccount: '还没有账号？',
        createHere: '立即注册',
        forgot: '忘记密码？',
      },
      register: {
        title: '创建账户',
        submit: '注册',
        submitting: '提交中...',
        success: '注册成功',
        failed: '注册失败',
        already: '已经有账号了？',
        loginHere: '去登录',
        agreePrefix: '我已阅读并同意',
        terms: '注册条款',
      },
    },
  },
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
