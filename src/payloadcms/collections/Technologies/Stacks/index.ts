import type { CollectionConfig } from 'payload'

import { taxonomyFields } from '../../../fields/taxonomy'

/**
 * Curated bundles of technologies, e.g. "MERN" or an agentic RAG stack.
 *
 * `skills` is set explicitly rather than derived from the member technologies.
 * A derived value would have to be virtual, and virtual fields cannot be
 * queried in Postgres.
 */
export const TechStacks: CollectionConfig = {
  slug: 'tech-stacks',
  labels: {
    singular: 'Tech Stack',
    plural: 'Tech Stacks',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'technologies', 'updatedAt'],
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
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
      required: true,
      minRows: 2,
      admin: {
        description: 'The technologies that make up this stack.',
      },
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
      admin: {
        position: 'sidebar',
        description: 'Capability areas this stack covers.',
      },
    },
    {
      name: 'projects',
      type: 'join',
      collection: 'projects',
      on: 'stacks',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'projectType', 'stage'],
      },
    },
  ],
}
