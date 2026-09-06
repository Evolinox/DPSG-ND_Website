<!-- apps/website/components/cms/CmsBlockRenderer.vue -->
<script setup lang="ts">
import type { Component } from 'vue'
import type { CmsBlock } from '~/types/cms'

import HeaderBlock from '~/components/blocks/HeaderBlock.vue'
import CtaBlock from '~/components/blocks/CtaBlock.vue'
import GroupsBlock from '~/components/blocks/GroupsBlock.vue'
import HeroBlock from "~/components/blocks/HeroBlock.vue";
import CarouselBlock from "~/components/blocks/CarouselBlock.vue";

/*
Hier werden alle Block Komponenten registriert
 */
const blockComponents: Record<string, Component> = {
  carousel: CarouselBlock,
  hero: HeroBlock,
  header: HeaderBlock,
  cta: CtaBlock,
  groups: GroupsBlock
}

defineProps<{
  block: CmsBlock
}>()
</script>

<template>
  <component
    :is="blockComponents[block.type]"
    v-if="blockComponents[block.type]"
    :block="block"
  />
</template>
