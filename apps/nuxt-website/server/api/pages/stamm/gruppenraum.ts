// apps/nuxt-website/server/api/pages/stamm/gruppenraum.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'gruppenraum-header',
        title: 'Unsere Gruppenräume',
        description: 'Wir sind im katholischen Gemeindezentrum Neckarelz, wo wir einige Räume zur Verfügung haben.',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Stamm', to: '/stamm' }, { label: 'Gruppenräume'}],
      }
    ]
  }
})
