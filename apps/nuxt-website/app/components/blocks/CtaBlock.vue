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
  >
    <img
      v-if="block.imageUrl"
      :src="block.imageUrl"
      width="320"
      height="364"
      :alt="block.imageAlt || ''"
      class="w-full rounded-lg object-cover shadow-md"
      loading="lazy"
    />
  </UPageCTA>
</template>
