// apps/nuxt-website/server/api/pages/about/us.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'blog-header',
        title: 'Das sind wir',
        description: 'Eine lange Geschichte seit 1955.',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Stamm' }]
      }
    ]
  }
})
