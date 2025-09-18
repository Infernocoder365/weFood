/* Centralized API service using native fetch (no extra deps) */
/* eslint-disable @typescript-eslint/no-explicit-any */

const BASE_URL = 'https://test-amidnac.roomertravel-ai.com'
const DEFAULT_LANG = 'en'

const TOKEN_KEY = 'wefood_auth_token'
const USERID_KEY = 'wefood_user_id'
const PHONE_KEY = 'wefood_phone'

export type ApiResponse<T = any> = {
  code: number
  info?: string
  data?: T
}

async function request<T = any>(path: string, options: RequestInit & { lang?: string } = {}): Promise<ApiResponse<T>> {
  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`

  const headers: Record<string, string> = {
    'Content-Type': options.body instanceof FormData ? '' : 'application/json',
    ...(options.headers as Record<string, string> | undefined),
  }
  // Remove empty Content-Type for FormData to let browser set boundaries
  if (!headers['Content-Type']) delete headers['Content-Type']

  if (options.lang) headers['lang'] = options.lang
  else headers['lang'] = DEFAULT_LANG

  const res = await fetch(url, {
    method: options.method || 'POST',
    headers,
    body: options.body,
    credentials: 'omit',
  })

  const text = await res.text()
  let json: ApiResponse<T>
  try {
    json = JSON.parse(text)
  } catch (e) {
    // fallback: wrap non-JSON as error
    throw new Error(`Invalid JSON response from ${path}: ${text}`)
  }

  if (json.code !== 0) {
    const msg = json.info || 'Request failed'
    throw new Error(msg)
  }

  return json
}

// Helpers to include auth fields in body for private endpoints
function withAuth(body: any = {}) {
  const token = localStorage.getItem(TOKEN_KEY)
  const userid = localStorage.getItem(USERID_KEY)
  return { ...body, userid, token }
}

// Auth
export const AuthAPI = {
  login: (payload: { phone: string; pwd: string; code: string }) =>
    request<{ userid?: string | number; token?: string }>(
      '/myapi/login/do_login_v1',
      { method: 'POST', body: JSON.stringify({ data: payload }) }
    ),

  register: (payload: {
    info: { phone: string; pwd: string; deposit_pwd: string; invite_code: string; code: string }
  }) => request('/myapi/login/do_register_v1', { method: 'POST', body: JSON.stringify({ data: payload }) }),
}

// User center
export const MyAPI = {
  index: () => request('/myapi/my/index', { method: 'POST', body: JSON.stringify(withAuth()) }),
  vipList: () => request('/myapi/my/vipList', { method: 'POST', body: JSON.stringify(withAuth()) }),

  changePwd: (oldpwd: string, newpwd: string) =>
    request('/myapi/my/change_pwd', { method: 'POST', body: JSON.stringify(withAuth({ oldpwd, newpwd })) }),

  changePayPwd: (oldpwd: string, newpwd: string) =>
    request('/myapi/my/change_pay_pwd', { method: 'POST', body: JSON.stringify(withAuth({ oldpwd, newpwd })) }),

  cashlog: (page = 1) => request('/myapi/my/cashlog', { method: 'POST', body: JSON.stringify(withAuth({ page })) }),
}

// Wallets
export const WalletAPI = {
  addWallet: (address: string, utype: string, notes?: string) =>
    request('/myapi/my/add_wallet', { method: 'POST', body: JSON.stringify(withAuth({ address, utype, notes })) }),

  getWalletList: (type = 2) => {
    const { token, userid } = getPersistedAuth()
    const params = new URLSearchParams({ type: String(type) })
    if (userid) params.set('userid', String(userid))
    if (token) params.set('token', String(token))
    return request(`/myapi/my/get_wallet_list?${params.toString()}`, { method: 'GET' })
  },

  deleteWallet: (wallet_id: string) =>
    request('/myapi/my/delete_wallet', { method: 'POST', body: JSON.stringify(withAuth({ wallet_id })) }),
}

// Orders
export const OrderAPI = {
  checkAndStartOrder: (payload: any) =>
    request('/myapi/rotorder/check_and_start_order', {
      method: 'POST',
      body: JSON.stringify(withAuth(payload)),
    }),

  orderList: (page = 1, type = 0) =>
    request('/myapi/order/order_list', { method: 'POST', body: JSON.stringify(withAuth({ page, type })) }),

  orderInfo: (id: string | number) =>
    request('/myapi/order/order_info', { method: 'POST', body: JSON.stringify(withAuth({ id })) }),

  doOrder: (oid: string | number) =>
    request('/myapi/order/do_order', { method: 'POST', body: JSON.stringify(withAuth({ oid })) }),
}

// Finance
export const FinanceAPI = {
  doDeposit: (data: { type: 'usdt' | 'card'; num: number; paypassword: string }) =>
    request('/myapi/ctrl/do_deposit', { method: 'POST', body: JSON.stringify(withAuth({ data })) }),
}

// File upload (multipart/form-data)
export const FileAPI = {
  uploadFile: (file: File) => {
    const form = new FormData()
    const token = localStorage.getItem(TOKEN_KEY)
    const userid = localStorage.getItem(USERID_KEY)
    if (userid) form.append('userid', userid)
    if (token) form.append('token', token as string)
    form.append('file', file)

    return request('/myapi/fileupload/upload_file', { method: 'POST', body: form })
  },
}

// Common public endpoints
export const CommonAPI = {
  getLang: () => request('/myapi/common/getlang', { method: 'POST' }),
  getMobilePregList: () => request('/myapi/common/get_mobile_preg_list', { method: 'POST' }),
  getAgree: () => request('/myapi/common/getagree', { method: 'POST' }),
  getTermsAndConditions: () => request('/myapi/common/get_terms_and_conditions', { method: 'POST' }),
  getPrivacyPolicy: () => request('/myapi/common/get_privacy_policy', { method: 'POST' }),
  getRegisterAgreement: () => request('/myapi/common/get_register_agreement', { method: 'POST' }),
  getFaqList: () => request('/myapi/common/get_faq_list', { method: 'POST' }),
  getSupportList: () => request('/myapi/common/get_support_list', { method: 'POST' }),
  getCustomerServiceTime: () => request('/myapi/common/get_customer_service_time', { method: 'POST' }),
  getCryptoNetworks: () => request('/myapi/common/get_crypto_networks', { method: 'POST' }),
}

// Utilities to persist auth (used by store)
export function persistAuth({ token, userid, phone }: { token?: string | null; userid?: string | number | null; phone?: string | null }) {
  if (typeof token !== 'undefined') {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    else localStorage.removeItem(TOKEN_KEY)
  }
  if (typeof userid !== 'undefined') {
    if (userid !== null && userid !== undefined) localStorage.setItem(USERID_KEY, String(userid))
    else localStorage.removeItem(USERID_KEY)
  }
  if (typeof phone !== 'undefined') {
    if (phone) localStorage.setItem(PHONE_KEY, phone)
    else localStorage.removeItem(PHONE_KEY)
  }
}

export function getPersistedAuth() {
  return {
    token: localStorage.getItem(TOKEN_KEY),
    userid: localStorage.getItem(USERID_KEY),
    phone: localStorage.getItem(PHONE_KEY),
  }
}