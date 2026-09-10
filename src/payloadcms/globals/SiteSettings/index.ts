import type { GlobalConfig } from 'payload'

/** Site identity and branding. Static data the frontend renders everywhere. */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'One line under your name, e.g. Full-stack and AI agent developer.',
      },
    },
    {
      name: 'shortBio',
      type: 'textarea',
      admin: {
        description: 'A paragraph for the hero or footer.',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logoDark',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional variant for dark backgrounds.',
      },
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'defaultOgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Default social share image',
    },
    {
      name: 'resume',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Downloadable CV, typically a PDF.',
      },
    },
    {
      name: 'copyright',
      type: 'text',
      admin: {
        description: 'Footer copyright line.',
      },
    },
  ],
}
