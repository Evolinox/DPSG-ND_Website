<!-- apps/nuxt-website/pages/about/index.vue -->
<script setup lang="ts">
import type { CmsBlockData } from '~/types/cms'

// fetch cms data
const { data: page } = await useAsyncData<CmsBlockData>('about-data', async () => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'about-header',
        title: 'Über unseren Stamm',
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
