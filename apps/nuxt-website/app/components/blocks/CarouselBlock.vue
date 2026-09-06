<script setup lang="ts">
import type { CmsCarouselBlock } from '~/types/cms'

const activeIndex = ref(0)

defineProps<{
  block: CmsCarouselBlock
}>()
</script>

<template>
  <div class="w-full space-y-6">
    <UPageHeader
      :title="block.title"
      :description="block.description"
      class="border-none p-0"
    />

    <UCarousel
      v-slot="{ item, index }"
      arrows
      dots
      align="center"
      :items="block.items"
      :ui="{
      item: 'basis-[85%] md:basis-[75%] px-2 h-full'
    }"
      class="w-full"
      @select="(index) => activeIndex = index"
    >
      <div
        class="h-full transition-all duration-300 ease-in-out"
        :class="index === activeIndex ? 'opacity-100 scale-100' : 'opacity-30 scale-95 pointer-events-none'"
      >
        <BlogPost :item="item" />
      </div>
    </UCarousel>
  </div>
</template>
