// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@vee-validate/nuxt'],
  css: [
    'primevue/resources/themes/md-dark-indigo/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
    '~/assets/css/main.scss'
  ],
  devtools: { enabled: true },
  build: {
    transpile: ['primevue']
  },
  experimental: {
    typedPages: true
  },
  ssr: false
})
