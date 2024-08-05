// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    charset: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    head: {
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': '7b1953a0-982a-47e8-a5ed-6c91fceecc8e'
        }
      ],
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