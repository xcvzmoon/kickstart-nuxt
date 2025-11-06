<template>
  <section class="flex h-svh flex-col items-center justify-center gap-2">
    <UButton
      icon="i-lucide-github"
      to="https://github.com/xcvzmoon"
      class="size-8 justify-center"
    />

    <USeparator class="w-48"> Kickstarters </USeparator>

    <UButton
      color="secondary"
      variant="subtle"
      to="https://github.com/xcvzmoon/kickstart-nuxt"
      label="Nuxt Kickstarter (Frontend)"
      trailing-icon="i-lucide-external-link"
    />

    <UButton
      color="secondary"
      variant="subtle"
      to="https://github.com/xcvzmoon/kickstart-nitro"
      label="Nitro Kickstarter (Backend)"
      trailing-icon="i-lucide-external-link"
    />
  </section>
</template>
