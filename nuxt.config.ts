import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2026-04-27',
  devtools: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxt/hints', '@nuxt/test-utils'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  routeRules: {
    '/': {
      prerender: true,
    },
  },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Kickstart Nuxt',
    },
  },
});
