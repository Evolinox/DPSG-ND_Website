<!-- apps/nuxt-website/pages/calendar.vue -->
<script setup lang="ts">
import type { CmsBlockData } from '~/types/cms'

// fetch cms data
const { data: page } = await useAsyncData<CmsBlockData>('calendar-data', async () => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'website-header',
        title: 'Kalender',
        description: 'Hier findet ihr bald all unsere Termine!'
      }
    ]
  }
})
</script>

<template>
  <div v-if="page?.blocks" class="space-y-16 py-6">
    <CmsBlockRenderer
      v-for="block in page.blocks"
      :key="block.id"
      :block="block"
    />
  </div>
</template>
