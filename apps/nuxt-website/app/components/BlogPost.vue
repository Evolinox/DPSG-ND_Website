<script setup lang="ts">
import { computed } from 'vue'
import type { CmsCarouselItem } from '~/types/cms'

const props = defineProps<{
  item: CmsCarouselItem
}>()

const formattedDate = computed(() => {
  if (!props.item.date) return ''

  const date = new Date(props.item.date)

  return new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date)
})
</script>

<template>
  <UBlogPost
    :title="item.title"
    :description="item.description"
    :image="item.image.src"
    :date="formattedDate"
    :to="item.to"
    target="_blank"
    orientation="horizontal"
    variant="soft"
  />
</template>
