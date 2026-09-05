<!-- apps/nuxt-website/components/AppLogo.vue -->
<template>
  <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none">
    <!-- Logo Bild -->
    <img
      src="/logos/dpsg_nd.webp"
      alt="DPSG Logo"
      class="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
    />

    <div class="flex flex-col justify-center leading-tight">
      <span class="font-bold text-base tracking-tight text-[var(--ui-text-highlighted)] group-hover:text-[var(--ui-primary)] transition-colors">
        DPSG Neckarelz-Diedesheim
      </span>

      <span class="text-xs font-medium text-[var(--ui-text-muted)]">
        Stamm Don Bosco
      </span>
    </div>
  </NuxtLink>
</template>
