import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

/** Groups multi-part journal posts into an ordered series. */
export const Series: CollectionConfig = {
  slug: 'series',
  labels: {
    singular: 'Series',
    plural: 'Series',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Taxonomy',
  },
  access: {
    read: () => true,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'posts',
      type: 'join',
      collection: 'journal',
      on: 'series',
      defaultSort: 'seriesOrder',
      admin: {
        allowCreate: false,
        defaultColumns: ['seriesOrder', 'title', 'publishedAt'],
      },
    },
  ],
}
