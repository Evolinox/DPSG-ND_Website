<!-- apps/nuxt-website/components/blocks/HeaderBlock.vue -->
<script setup lang="ts">
import type { CmsHeaderBlock } from '~/types/cms'

defineProps<{
  block: CmsHeaderBlock
}>()
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--ui-border)] pb-6">
    <UPageHeader
      :title="block.title"
      :description="block.description"
      :headline="block.headline"
      class="border-none p-0"
    />

    <div v-if="block.breadcrumb" class="flex-shrink-0 self-start md:self-center">
      <UBreadcrumb :items="block.breadcrumb" />
    </div>
  </div>
</template>
