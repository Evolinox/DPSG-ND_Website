<script setup lang="ts">
interface GroupItem {
  id: string
  group: 'woelfling' | 'jungpfadfinder' | 'pfadfinder' | 'rover'
  title: string
  description: string
  ageGroup: string
  meetingTime: string
}

defineProps<{
  block: {
    title: string
    description?: string
    groups: GroupItem[]
  }
}>()

const getGroupStyle = (level: GroupItem['group']) => {
  return {
    borderColor: `var(--color-stufen-${level})`,
    color: `var(--color-stufen-${level})`
  }
}
</script>

<template>
  <section class="space-y-6">
    <UPageHeader
      :title="block.title"
      :description="block.description"
      class="border-none p-0"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <UCard
        v-for="group in block.groups"
        :key="group.id"
        class="border-t-4 transition-all hover:shadow-lg"
        :style="getGroupStyle(group.group)"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-lg">{{ group.title }}</h3>
            <UBadge variant="soft" color="neutral" size="xs">{{ group.ageGroup }}</UBadge>
          </div>
        </template>

        <p class="text-sm text-neutral-600 dark:text-neutral-300">
          {{ group.description }}
        </p>

        <template #footer>
          <span class="text-xs text-neutral-500 font-medium">{{ group.meetingTime }}</span>
        </template>
      </UCard>
    </div>
  </section>
</template>
