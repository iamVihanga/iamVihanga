import type { CollectionConfig } from 'payload'

import { taxonomyFields } from '../../fields/taxonomy'

/**
 * Individual technologies such as React, Postgres or LangGraph.
 *
 * Grouping comes from the `skills` relationship rather than a separate
 * category field, so there is only ever one grouping axis to keep in sync.
 */
export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'skills', 'website', 'updatedAt'],
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
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
      admin: {
        position: 'sidebar',
        description: 'Capability areas this technology belongs to.',
      },
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Official site or documentation URL.',
      },
      validate: (value: null | string | undefined) => {
        if (!value) return true
        return /^https?:\/\/\S+$/i.test(value) || 'Enter a URL starting with http:// or https://'
      },
    },
    {
      name: 'stacks',
      type: 'join',
      collection: 'tech-stacks',
      on: 'technologies',
      admin: {
        allowCreate: false,
        defaultColumns: ['title'],
      },
    },
    {
      name: 'projects',
      type: 'join',
      collection: 'projects',
      on: 'technologies',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'projectType', 'stage'],
      },
    },
    {
      name: 'posts',
      type: 'join',
      collection: 'journal',
      on: 'technologies',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'publishedAt'],
      },
    },
  ],
}
