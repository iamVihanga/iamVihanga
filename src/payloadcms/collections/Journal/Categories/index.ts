import type { CollectionConfig } from 'payload'

import { taxonomyFields } from '../../../fields/taxonomy'

/** Topical categories for journal posts, e.g. Engineering, AI, Career. */
export const JournalCategories: CollectionConfig = {
  slug: 'journal-categories',
  labels: {
    singular: 'Journal Category',
    plural: 'Journal Categories',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Taxonomy',
  },
  access: {
    read: () => true,
  },
  orderable: true,
  defaultPopulate: {
    title: true,
    slug: true,
    icon: true,
    color: true,
  },
  fields: [
    ...taxonomyFields(),
    {
      name: 'posts',
      type: 'join',
      collection: 'journal',
      on: 'categories',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'publishedAt'],
      },
    },
  ],
}
