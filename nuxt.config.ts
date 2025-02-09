import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/google-fonts'],
  googleFonts:{
    families:{
      Montserrat: [400, 900]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite:{
    plugins:[
      tailwindcss()
    ]
  }
})
