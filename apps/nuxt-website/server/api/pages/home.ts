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
        type: 'carousel',
        id: 'last_actions',
        title: 'Letzte Aktionen',
        description: 'Diese Aktionen hatten wir in letzter Zeit, lest gerne die Blogeinträge dazu!',
        items: [
          {
            id: 'pizza-nizza-2026',
            title: 'Auf eine Pizza in Nizza',
            description: 'Wer hat schon mal eine Pizza gegessen und war dabei in Nizza? :P',
            date: '2026-05-12',
            to: '/blog/pizza-nizza-2026',
            image: {
              src: '/images/IMG_9654.jpeg',
              alt: 'test'
            }
          },
          {
            id: 'sola-2026',
            title: 'Bezirkssommerlager in Dittwar',
            description: '',
            date: '2026-08-02',
            to: '/blog/bezirks-sommerlager-2026',
            image: {
              src: 'https://picsum.photos/1280/720?random=2',
              alt: 'test'
            }
          },
          {
            id: 'eberstadt-2026',
            title: 'Ausflug in die Tropfsteinhöhle',
            description: '',
            date: '2026-04-04',
            to: '/blog/eberstadt-2026',
            image: {
              src: 'https://picsum.photos/1280/720?random=3',
              alt: 'test'
            }
          }
        ]
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
