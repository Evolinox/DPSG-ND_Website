// apps/nuxt-website/server/api/pages/home.ts
import type { CmsBlockData } from '~/types/cms'

export default defineEventHandler((): CmsBlockData => {
  return {
    blocks: [
      {
        type: 'hero',
        id: 'home-hero-image',
        title: 'DPSG Neckarelz-Diedesheim',
        description: 'Pfadfinden seit 1955',
        backgroundImage: {
          src: '/images/wir.jpg',
          alt: 'Unser Stamm auf dem Sommerlager'
        }
      },
      {
        type: 'groups',
        id: 'stufen-overview',
        title: 'Unsere Stufen',
        description: 'Die Gruppenstunden finden das ganze Jahr über um die gleiche Zeit statt, außer in den Ferien.',
        groups: [
          {
            id: 'woelflinge',
            title: 'Wölflinge',
            group: 'woelfling',
            ageGroup: '7 - 10 Jahre',
            description: 'Welt entdecken.',
            meetingTime: 'Freitags, 18:00 Uhr bis 19:30 Uhr'
          },
          {
            id: 'jupfis',
            title: 'Jungpfadfinder',
            group: 'jungpfadfinder',
            ageGroup: '10 - 13 Jahre',
            description: 'Abenteuer erleben.',
            meetingTime: 'Freitags, 18:00 Uhr bis 19:30 Uhr'
          },
          {
            id: 'pfadfinder',
            title: 'Pfadfinder',
            group: 'pfadfinder',
            ageGroup: '13 – 16 Jahre',
            description: 'Wag es, die Welt zu verändern.',
            meetingTime: 'Mittwochs, 19:00 Uhr bis 20:30 Uhr'
          },
          {
            id: 'rover',
            title: 'Rover',
            group: 'rover',
            ageGroup: '16 – 20 Jahre',
            description: 'Unterwegs im Leben, eigene Wege gehen.',
            meetingTime: 'Mittwochs, 19:30 Uhr bis 21:00 Uhr'
          },
        ]
      },
      {
        type: 'cta',
        id: 'cta-more-info',
        title: 'Du hast Interesse?',
        description: 'cool',
      }
    ]
  }
})
