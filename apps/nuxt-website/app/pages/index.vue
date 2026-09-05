<!-- apps/nuxt-website/pages/index.vue -->
<script setup lang="ts">
import type { CmsBlockData } from '~/types/cms'

// fetch cms data
const { data: page } = await useAsyncData<CmsBlockData>('homepage-data', async () => {
  return {
    blocks: [
      {
        type: 'hero',
        id: 'home-hero-image',
        title: 'DPSG Neckarelz-Diedesheim',
        description: 'Pfadfinden seit 1955',
        backgroundImage: {
          src: '/images/wir.jpg',
          alt: 'Unser Stamm auf dem Sommerlager'
        }
      },
      {
        type: 'groups',
        id: 'stufen-overview',
        title: 'Unsere Stufen',
        groups: [
          {
            id: 'woelflinge',
            title: 'Wölflinge',
            ageGroup: '7 - 10 Jahre',
            description: 'Welt entdecken.',
            meetingTime: 'Freitags, 18:00 Uhr bis 19:30 Uhr',
            colorClass: 'border-[var(--color-stufen-woelfling)] text-[var(--color-stufen-woelfling)]'
          },
          {
            id: 'jupfis',
            title: 'Jungpfadfinder',
            ageGroup: '10 - 13 Jahre',
            description: 'Abenteuer erleben.',
            meetingTime: 'Freitags, 18:00 Uhr bis 19:30 Uhr',
            colorClass: 'border-[var(--color-stufen-jungpfadfinder)] text-[var(--color-stufen-jungpfadfinder)]'
          },
          {
            id: 'pfadfinder',
            title: 'Pfadfinder',
            ageGroup: '13 – 16 Jahre',
            description: 'Wag es, die Welt zu verändern.',
            meetingTime: 'Mittwochs, 19:00 Uhr bis 20:30 Uhr',
            colorClass: 'border-[var(--color-stufen-pfadfinder)] text-[var(--color-stufen-pfadfinder)]'
          },
          {
            id: 'rover',
            title: 'Rover',
            ageGroup: '16 – 20 Jahre',
            description: 'Unterwegs im Leben, eigene Wege gehen.',
            meetingTime: 'Mittwochs, 19:30 Uhr bis 21:00 Uhr',
            colorClass: 'border-[var(--color-stufen-rover)] text-[var(--color-stufen-rover)]'
          },
        ]
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
