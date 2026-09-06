<!-- apps/nuxt-website/components/AppNavigation.vue -->
<script setup lang="ts">
import type { CmsNavigationItem } from '~/types/cms'

// Fetch navigation tree from CMS/API
const { data: navigation } = await useAsyncData<CmsNavigationItem[]>('main-navigation', () =>
  $fetch('/api/navigation')
)
</script>

<template>
  <UNavigationMenu
    :items="navigation"
  />
</template>
