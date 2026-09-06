<script setup lang="ts">
import type { CmsCtaBlock } from '~/types/cms'

defineProps<{
  block: CmsCtaBlock
}>()
</script>

<template>
  <UPageCTA
    :title="block.title"
    :description="block.description"
    :orientation="block.orientation || 'horizontal'"
    :reverse="block.reverse"
    :links="block.links"
    :variant="block.variant"
  >
    <img
      v-if="block.imageUrl"
      :src="block.imageUrl"
      width="320"
      height="320"
      :alt="block.imageAlt || ''"
      class="w-full h-full rounded-lg object-cover shadow-md"
      loading="lazy"
    />
  </UPageCTA>
</template>
