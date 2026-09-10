import type { CollectionConfig } from 'payload'

import { taxonomyFields } from '../../../fields/taxonomy'

/** Topical categories for projects, e.g. Web App, AI Agent, SaaS. */
export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
  labels: {
    singular: 'Project Category',
    plural: 'Project Categories',
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
      name: 'projects',
      type: 'join',
      collection: 'projects',
      on: 'categories',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'projectType', 'stage'],
      },
    },
  ],
}
