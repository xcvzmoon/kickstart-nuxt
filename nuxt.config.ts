// @ts-expect-error - Importing from internal rolldown distribution file without type definitions
import { b as makeBuiltinPluginCallable } from './node_modules/rolldown/dist/shared/src-DY4_vVWu.mjs';
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

  hooks: {
    'vite:extendConfig': (config) => {
      const replacedPlugin = config.plugins?.find((plugin) => {
        if (!plugin || typeof plugin !== 'object' || !('name' in plugin)) return false;
        return plugin.name === 'nuxt:replace';
      });

      if (
        !replacedPlugin ||
        typeof replacedPlugin !== 'object' ||
        !('applyToEnvironment' in replacedPlugin)
      ) {
        return;
      }

      const originalApply = replacedPlugin.applyToEnvironment;
      replacedPlugin.applyToEnvironment = async function (environment: unknown) {
        if (!originalApply) return undefined;
        return makeBuiltinPluginCallable(await originalApply(environment as never));
      };
    },
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@nuxt/ui'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
});
