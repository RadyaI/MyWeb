// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    charset: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    head: {
      htmlAttrs: {
        lang: 'id'
      }
    }
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  compatibilityDate: '2024-07-16',
});