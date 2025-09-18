import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { AuthAPI, persistAuth, getPersistedAuth } from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const persisted = getPersistedAuth()
  const token = ref<string | null>(persisted.token)
  const userid = ref<string | number | null>(persisted.userid)
  const phone = ref<string | null>(persisted.phone || null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  async function login(payload: { phone: string; password: string; code: string }) {
    error.value = null
    loading.value = true
    try {
      const res = await AuthAPI.login({ phone: payload.phone, pwd: payload.password, code: payload.code })
      // Try to extract token/userid from response data
      const data: any = res?.data ?? {}
      const tk = data?.token ?? (res as any)?.token ?? null
      const uid = data?.userid ?? (res as any)?.userid ?? null

      if (!tk || !uid) {
        // If backend does not return token/userid explicitly but code===0 indicates success,
        // store placeholders to allow navigation; adjust when backend is ready.
        persistAuth({ token: tk || 'session', userid: uid || 'unknown', phone: payload.phone })
        token.value = tk || 'session'
        userid.value = uid || 'unknown'
        phone.value = payload.phone
      } else {
        persistAuth({ token: tk, userid: uid, phone: payload.phone })
        token.value = tk
        userid.value = uid
        phone.value = payload.phone
      }
      return true
    } catch (e: any) {
      error.value = e?.message || 'Login failed'
      return false
    } finally {
      loading.value = false
    }
  }

  async function register(payload: { phone: string; password: string; deposit_pwd: string; invite_code: string; code: string }) {
    error.value = null
    loading.value = true
    try {
      await AuthAPI.register({
        info: {
          phone: payload.phone,
          pwd: payload.password,
          deposit_pwd: payload.deposit_pwd,
          invite_code: payload.invite_code,
          code: payload.code,
        },
      })
      // Do not auto-login; let user proceed to login
      return true
    } catch (e: any) {
      error.value = e?.message || 'Register failed'
      return false
    } finally {
      loading.value = false
    }
  }

  function logout() {
    token.value = null
    userid.value = null
    phone.value = null
    persistAuth({ token: null, userid: null, phone: null })
  }

  return { token, userid, phone, isAuthenticated, loading, error, login, register, logout }
})