// apps/nuxt-website/server/api/pages/blog.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'header',
        id: 'blog-header',
        title: 'Blogeinträge',
        description: 'Hier findet ihr bald all unsere Termine!',
        breadcrumb: [{ label: 'Startseite', to: '/' }, { label: 'Blog' }]
      }
    ]
  }
})
