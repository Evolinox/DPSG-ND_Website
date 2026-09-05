<!-- apps/nuxt-website/components/AppNavigation.vue -->
<script setup lang="ts">
import type { CmsNavigationItem } from '~/types/cms'

// Fetch navigation tree from CMS/API
const { data: navigation } = await useAsyncData<CmsNavigationItem[]>('main-navigation', async () => {
  return [
    { id: '1', label: 'Blog', to: '/blog' },
    { id: '2', label: 'Kalender', to: '/calendar' },
    { id: '3', label: 'Über', to: '/about' },
  ]
})
</script>

<template>
  <UNavigationMenu
    :items="navigation"
    variant="pill"
    color="primary"
  />

  <UColorModeButton />
</template>
