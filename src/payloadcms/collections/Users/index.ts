import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'jobTitle'],
    group: 'People',
  },
  auth: true,
  defaultPopulate: {
    name: true,
    jobTitle: true,
    avatar: true,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'jobTitle',
      type: 'text',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
      admin: {
        description: 'Short author bio for journal post bylines.',
      },
    },
  ],
}
