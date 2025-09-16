import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const TOKEN_KEY = 'wefood_auth_token'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem(TOKEN_KEY))

  const isAuthenticated = computed(() => !!token.value)

  function login(_: { username?: string; phone?: string; password?: string } = {}) {
    // TODO: integrate with real API. For now, simulate success.
    token.value = 'demo-token'
    localStorage.setItem(TOKEN_KEY, token.value)
    return true
  }

  function logout() {
    token.value = null
    localStorage.removeItem(TOKEN_KEY)
  }

  return { token, isAuthenticated, login, logout }
})