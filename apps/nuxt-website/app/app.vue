<script setup>
import AppNavigation from "~/components/AppNavigation.vue";

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'de'
  }
})

const title = 'DPSG Neckarelz-Diedesheim'
const description = 'Stamm Don Bosco in Neckarelz-Diedesheim seit 1955.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <UApp>
    <UHeader mode="slideover">
      <template #title>
        <AppLogo />
      </template>

      <AppNavigation />

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <UContainer>
        <NuxtPage />
      </UContainer>
    </UMain>

    <USeparator icon="i-lucide-tent" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          DPSG Neckarelz-Diedesheim • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/Evolinox/DPSG-ND_Website"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
