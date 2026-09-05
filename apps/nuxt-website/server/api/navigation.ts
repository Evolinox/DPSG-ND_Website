// apps/nuxt-website/server/api/navigation.ts
import type { CmsNavigationItem } from '~/types/cms'

export default defineEventHandler((): CmsNavigationItem[] => {
  return [
    { id: '1', label: 'Blog', to: '/blog' },
    { id: '2', label: 'Kalender', to: '/calendar' },
    { id: '3', label: 'Webshop', to: 'https://dpsg-nd.myspreadshop.de', target: '_blank' },
    { id: '4', label: 'Stamm', to: '/about' },
  ]
})
