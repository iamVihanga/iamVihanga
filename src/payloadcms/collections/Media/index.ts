import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Media',
  },
  access: {
    read: () => true,
  },
  upload: {
    // No `mimeTypes` restriction: the resume PDF referenced from Site Settings
    // lives here too. Sharp only processes images, other files pass through.
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 768 },
      { name: 'hero', width: 1600 },
      { name: 'og', width: 1200, height: 630, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    crop: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Shown under the image in project galleries.',
      },
    },
    {
      name: 'credit',
      type: 'text',
      admin: {
        description: 'Attribution, if the asset is not yours.',
      },
    },
  ],
}
