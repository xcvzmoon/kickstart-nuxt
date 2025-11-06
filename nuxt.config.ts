import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: 'latest',

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
});
