<script setup lang="ts">
import type { CmsCarouselItem } from '~/types/cms'

defineProps<{
  item: CmsCarouselItem
}>()
</script>

<template>
  <UBlogPost
    :title="item.title"
    :description="item.description"
    :image="item.image.src"
    :date="item.date"
    :to="item.to"
    target="_blank"
    orientation="horizontal"
    variant="soft"
  />
</template>
