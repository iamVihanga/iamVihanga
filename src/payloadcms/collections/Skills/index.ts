import type { CollectionConfig } from 'payload'

import { taxonomyFields } from '../../fields/taxonomy'

/**
 * Capability areas such as Frontend, Backend or AI Agents.
 *
 * Skills are the connective taxonomy of the site: technologies, stacks,
 * projects and journal posts all point at them, so a single skill page can
 * pull together everything related to that capability.
 */
export const Skills: CollectionConfig = {
  slug: 'skills',
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
      name: 'technologies',
      type: 'join',
      collection: 'technologies',
      on: 'skills',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'website'],
      },
    },
    {
      name: 'stacks',
      type: 'join',
      collection: 'tech-stacks',
      on: 'skills',
      admin: {
        allowCreate: false,
        defaultColumns: ['title'],
      },
    },
    {
      name: 'projects',
      type: 'join',
      collection: 'projects',
      on: 'skills',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'projectType', 'stage'],
      },
    },
    {
      name: 'posts',
      type: 'join',
      collection: 'journal',
      on: 'skills',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'publishedAt'],
      },
    },
  ],
}
