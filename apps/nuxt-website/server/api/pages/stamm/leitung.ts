// apps/nuxt-website/server/api/pages/stamm/bezirk.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'leitung-header',
        title: 'Das Leitungsteam',
        description: 'Unser Leitungsteam besteht aus zwei Vorständen und einigen Leitern, sowie Mitarbeiter',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Stamm', to: '/stamm' }, { label: 'Leitung'}],
      }
    ]
  }
})
