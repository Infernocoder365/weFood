import { createI18n } from 'vue-i18n'

// Basic message schema type
export type MessageSchema = Record<string, any>

// Auto-load all locale JSON files in this directory (except *.template.json)
function loadLocaleMessages() {
  const modules = import.meta.glob('./*.json', { eager: true }) as Record<string, any>
  const messages: Record<string, MessageSchema> = {}

  for (const path in modules) {
    if (/\.template\.json$/i.test(path)) continue
    const match = path.match(/\.\/([A-Za-z-_.]+)\.json$/)
    const locale = match?.[1]
    if (!locale) continue
    const mod = modules[path]
    // Vite JSON imports expose default
    messages[locale] = mod?.default ?? mod
  }

  return messages
}

const messages = loadLocaleMessages()

function detectInitialLocale() {
  const saved = localStorage.getItem('locale')
  if (saved && messages[saved]) return saved
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en'
  const short = nav?.split('-')[0]
  if (short && messages[short]) return short
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectInitialLocale(),
  fallbackLocale: 'en',
  messages,
})

export function setLocale(locale: string) {
  if (i18n.global.availableLocales.includes(locale)) {
    i18n.global.locale.value = locale
    localStorage.setItem('locale', locale)
  } else {
    console.warn(`[i18n] Locale "${locale}" is not available.`)
  }
}

export function availableLocales() {
  return i18n.global.availableLocales
}

export default i18n