import type { CollectionConfig } from 'payload'

/** Client and collaborator quotes, optionally tied to a project. */
export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'authorRole', 'client', '_status', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  orderable: true,
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
    },
    {
      name: 'authorRole',
      type: 'text',
      admin: {
        description: 'Job title, e.g. CTO at ACME.',
      },
    },
    {
      name: 'authorAvatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
