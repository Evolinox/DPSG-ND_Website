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
          src: 'https://dpsg-neckarelz-diedesheim.de/wp-content/uploads/2021/08/2021_08_06_Lager_Nikon_711.jpg',
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
            id: 'sola-2026',
            title: 'Bezirkssommerlager in Dittwar',
            description: 'Der zweite Stufentag hielt für alle viel Programm bereit: Während die Pfadis beim Kochduell schlemmten und die Jupfis sich kulinarisch durch Dittwar tauschten, wanderten die Rover 17 Kilometer ab „Hölle“ und die Wölflinge verbrachten einen rutschenreichen Tag im Schwimmbad.',
            date: '2026-08-07',
            to: '/blog/bezirks-sommerlager-2026',
            image: {
              src: 'https://dpsg-neckarelz-diedesheim.de/wp-content/uploads/2026/08/IMG_20260802_160104_970-1210x500.jpg',
              alt: 'Eindruck vom Sommerlager'
            }
          },
          {
            id: 'pizza-nizza-2026',
            title: 'Auf eine Pizza in Nizza',
            description: 'Mit bester Stimmung, der „Nizza :3“-Playlist, zahllosen Schlaf-Fotos und der vollen Schweiz in der Kennzeichen-App ging es für die Rover über abenteuerliche Umwege und französische Grenzkontrollen bis an den Strand von Nizza.',
            date: '2026-06-24',
            to: '/blog/pizza-nizza-2026',
            image: {
              src: 'https://dpsg-neckarelz-diedesheim.de/wp-content/uploads/photo-gallery/2026/2026_06_04_PizzaNachNizza/IMG_9664.jpeg?bwg=1784926935',
              alt: 'Ente in Nizza am Strand'
            }
          },
          {
            id: 'track4kidz-2026',
            title: 'Track for Kidz',
            description: 'Auf unserem schneereichen Pfadfinder-Wochenende erlebten wir trotz mühsamem Zeltaufbau im Schnee jede Menge Spaß bei Geländespielen, beim Schlittenfahren und an gemütlichen Abenden am Lagerplatz.',
            date: '2026-02-01',
            to: '/blog/track4kidz-2026',
            image: {
              src: 'https://dpsg-neckarelz-diedesheim.de/wp-content/uploads/2026/02/4080-3060-max-1210x500.jpg',
              alt: 'Zeltplatz voller Schnee'
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
            description: 'Gemeinsam die Welt entdecken! Bei den Wölflingen dreht sich alles um Spiel, Spaß und das spielerische Erkunden der eigenen Umwelt.',
            meetingTime: 'Freitags, 18:00 Uhr bis 19:30 Uhr'
          },
          {
            id: 'jupfis',
            title: 'Jungpfadfinder',
            group: 'jungpfadfinder',
            ageGroup: '10 - 13 Jahre',
            description: 'Echte Abenteuer erleben! Die „Jupfis“ nehmen ihr Handeln selbst in die Hand, probieren Neues aus und stärken den Zusammenhalt in der Gruppe.',
            meetingTime: 'Freitags, 18:00 Uhr bis 19:30 Uhr'
          },
          {
            id: 'pfadfinder',
            title: 'Pfadfinder',
            group: 'pfadfinder',
            ageGroup: '13 – 16 Jahre',
            description: 'Wag es, die Welt zu verändern! In der Pfadfinderstufe übernehmen die Jugendlichen mehr Verantwortung, setzen eigene Projekte um und packen aktiv mit an.',
            meetingTime: 'Mittwochs, 19:00 Uhr bis 20:30 Uhr'
          },
          {
            id: 'rover',
            title: 'Rover',
            group: 'rover',
            ageGroup: '16 – 20 Jahre',
            description: 'Unterwegs im Leben, eigene Wege gehen. Die Rover-Stufe steht für Selbstständigkeit, internationale Aktionen und das Beschreiten eigener Pfade in der Gemeinschaft.',
            meetingTime: 'Mittwochs, 19:30 Uhr bis 21:00 Uhr'
          },
        ]
      },
      {
        type: 'cta',
        id: 'cta-more-info',
        title: 'Klingt gut? Komm vorbei!',
        description: 'Wenn Du Fragen zu unserer Arbeit hast, nimm Kontakt zu uns auf, wir freuen uns darauf!',
        variant: 'soft',
        imageUrl: 'https://dpsg-neckarelz-diedesheim.de/wp-content/uploads/2021/02/background_mitmachen2.jpg',
        imageAlt: "DPSG ND Logo",
        links: [
          {
            label: 'Wegbeschreibung',
            to: '/stamm/gruppenraum',
          },
          {
            label: 'Kontakt aufnehmen',
            to: 'mailto:info@dpsg-nd.de',
          },
          {
            label: 'Mehr über uns',
            color: 'neutral',
            variant: 'subtle',
            to: '/stamm',
            trailingIcon: 'i-lucide-arrow-right'
          }
        ]
      }
    ]
  }
})
