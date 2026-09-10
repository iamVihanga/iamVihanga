import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

import { readingTimeField } from '../../fields/readingTime'

/** Long-form blog posts, authored in the Lexical editor. */
export const Journal: CollectionConfig = {
  slug: 'journal',
  labels: {
    singular: 'Journal Post',
    plural: 'Journal',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt', '_status', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    excerpt: true,
    heroImage: true,
    publishedAt: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 220,
      admin: {
        description: 'One or two sentences, shown on post cards and previews.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'relatedProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      admin: {
        description: 'Projects this post is about.',
      },
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }) => user?.id,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'journal-categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'series',
      type: 'relationship',
      relationTo: 'series',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'seriesOrder',
      type: 'number',
      min: 1,
      admin: {
        position: 'sidebar',
        description: 'Position within the series.',
        condition: (data) => Boolean(data?.series),
      },
    },
    readingTimeField,
  ],
}
