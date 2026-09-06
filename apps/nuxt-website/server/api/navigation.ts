// apps/nuxt-website/server/api/navigation.ts
import type { CmsNavigationItem } from '~/types/cms'

export default defineEventHandler((): CmsNavigationItem[] => {
  return [
    { id: '1', label: 'Blog', to: '/blog' },
    { id: '2', label: 'Kalender', to: '/calendar' },
    { id: '3', label: 'Webshop', to: 'https://dpsg-nd.myspreadshop.de', target: '_blank' },
    {
      id: 'stamm_index',
      label: 'Stamm',
      to: '/stamm',
      children: [
        {
          id: 'stamm_leitung',
          label: 'Leitungsteam',
          to: '/stamm/leitung',
        },
        {
          id: 'stamm_gruppenraum',
          label: 'Gruppenräume',
          to: '/stamm/gruppenraum',
        },
        {
          id: 'stamm_ev',
          label: 'Förderverein',
          to: '/stamm/ev',
        },
        {
          id: 'stamm_bz',
          label: 'Bezirk',
          to: '/stamm/bezirk',
        },
      ]
    },
  ]
})
