<!-- apps/nuxt-website/pages/blog.vue -->
<script setup lang="ts">
import type { CmsBlockData } from '~/types/cms'

// fetch cms data
const { data: page } = await useAsyncData<CmsBlockData>('blog-page', () =>
  $fetch('/api/pages/blog')
)
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
