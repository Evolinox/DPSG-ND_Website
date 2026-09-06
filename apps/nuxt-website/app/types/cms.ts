// apps/nuxt-website/types/cms.ts
import type { ButtonProps, BreadcrumbItem } from '@nuxt/ui'

/*
Nav Item
 */
export interface CmsNavigationItem {
  id: string
  label: string
  to: string
  target?: '_blank' | '_self'
  highlight?: boolean
  children?: CmsNavigationItem[]
}

/*
Link Item
 */
export interface CmsLinkItem {
  id: string
  label: string
  to?: string
  target?: '_blank' | '_self'
}

/*
Image Item
 */
export interface CmsImageItem {
  src: string
  alt: string
}

export interface CmsCarouselItem {
  id: string
  title: string
  description: string
  date: string
  to: string
  image: CmsImageItem
}

/*
Carousel Block
 */
export interface CmsCarouselBlock {
  type: 'carousel'
  id: string
  title: string
  description?: string
  links?: CmsLinkItem[]
  items: CmsCarouselItem[]
}

/*
Hero Block
 */
export interface CmsHeroBlock {
  type: 'hero'
  id: string
  title: string
  description?: string
  backgroundImage?: CmsImageItem
}

/*
Header Block
 */
export interface CmsHeaderBlock {
  type: 'header'
  id: string
  title: string
  description: string
  headline?: string
  breadcrumb?: BreadcrumbItem[]
}

/*
Call to Action Block
 */
export interface CmsCtaBlock {
  type: 'cta'
  id: string
  title: string
  description: string
  variant?: 'soft' | 'subtle'
  imageUrl?: string
  imageAlt?: string
  orientation?: 'horizontal' | 'vertical'
  reverse?: boolean
  links?: ButtonProps[]
}

/*
Interface für die einzelnen Stufen, wie Wös oder Jufpis
 */
export interface CmsGroupsBlock {
  type: 'groups'
  id: string
  title: string
  description?: string
  groups: {
    id: string
    title: string
    group: string
    ageGroup: string
    description: string
    meetingTime: string
  }[]
}

export type CmsBlock = CmsCarouselBlock | CmsCtaBlock | CmsGroupsBlock | CmsHeaderBlock | CmsHeroBlock

export interface CmsBlockData {
  blocks: CmsBlock[]
}
