// apps/nuxt-website/server/api/pages/stamm/bezirk.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'bezirk-header',
        title: 'Bezirk Odenwald-Tauber',
        description: 'Unser Stamm ist Teil des Bezirks Odenwald-Tauber',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Stamm', to: '/stamm' }, { label: 'Bezirk'}],
      }
    ]
  }
})
