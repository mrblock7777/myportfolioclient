export default defineNuxtConfig({
  app:{
    head:{
      title: 'Ameer Izwan'
    }
  },
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-mdi',
    '@nuxtjs/tailwindcss'
  ],
  colorMode:{
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    // storageKey: 'nuxt-color-mode'
  },
  googleFonts:{
    families:{
      Montserrat: [400, 900]
    }
  },
  devtools: { enabled: true }
})