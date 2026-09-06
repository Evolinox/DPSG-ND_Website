// apps/nuxt-website/server/api/pages/stamm/bezirk.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'bezirk-header',
        title: 'Förderverein',
        description: 'Pfadfinderschaft Don Bosco Neckarelz / Diedesheim e.V.',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Stamm', to: '/stamm' }, { label: 'Förderverein'}],
      }
    ]
  }
})
