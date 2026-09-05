<!-- apps/nuxt-website/components/blocks/HeroBlock.vue -->
<script setup lang="ts">
import type { CmsHeroBlock } from '~/types/cms'

defineProps<{
  block: CmsHeroBlock
}>()
</script>

<template>
  <div class="relative overflow-hidden rounded-xl">
    <!-- Hintergrundbild -->
    <NuxtImg
      v-if="block.backgroundImage"
      :src="block.backgroundImage.src"
      :alt="block.backgroundImage.alt"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- Dunkles Overlay für optimale Lesbarkeit -->
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/30 z-10" />

    <!-- Hero Content (über dem Bild gelagert durch z-20) -->
    <UPageHero
      :title="block.title"
      :description="block.description"
      class="relative z-20 text-white"
    />
  </div>
</template>
