// apps/nuxt-website/server/api/pages/calendar.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'calendar-header',
        title: 'Termine & Kalender',
        description: 'Alle anstehenden Aktionen, Gruppenstunden und Lager auf einen Blick.',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Kalender' }]
      }
    ]
  }
})
