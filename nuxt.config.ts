export default defineNuxtConfig({
  app:{
    head:{
      title: 'Ameer Izwan'
    }
  },
  compatibilityDate: '2024-11-01',
  runtimeConfig:{
    public:{
      s3AssetsBucketUrl: process.env.NUXT_S3_ASSETS_BUCKET_URL || ''
    }
  },
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
      Montserrat: [400, 900],
      "Bebas Neue": [400]
    }
  },
  tailwindcss:{
    cssPath: '~/assets/css/tailwind.css'
  },
  devtools: { enabled: true }
})