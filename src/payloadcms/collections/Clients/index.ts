import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

/**
 * Clients, agencies and partner organizations.
 *
 * The Codeville agency lives here as a record with `kind: 'agency'`, so
 * agency work links to it rather than repeating the name as free text.
 */
export const Clients: CollectionConfig = {
  slug: 'clients',
  labels: {
    singular: 'Client',
    plural: 'Clients & Organizations',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'kind', 'industry', 'updatedAt'],
    group: 'People',
  },
  access: {
    read: () => true,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    logo: true,
    website: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Name',
      required: true,
    },
    slugField(),
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'kind',
      type: 'select',
      required: true,
      defaultValue: 'client',
      options: [
        { label: 'Client', value: 'client' },
        { label: 'Agency', value: 'agency' },
        { label: 'Partner', value: 'partner' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'industry',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'website',
      type: 'text',
      validate: (value: null | string | undefined) => {
        if (!value) return true
        return /^https?:\/\/\S+$/i.test(value) || 'Enter a URL starting with http:// or https://'
      },
    },
    {
      name: 'projects',
      type: 'join',
      collection: 'projects',
      on: 'client',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'projectType', 'stage'],
      },
    },
    {
      name: 'agencyProjects',
      type: 'join',
      collection: 'projects',
      on: 'agency',
      label: 'Projects delivered as this agency',
      admin: {
        allowCreate: false,
        defaultColumns: ['title', 'client', 'stage'],
      },
    },
    {
      name: 'testimonials',
      type: 'join',
      collection: 'testimonials',
      on: 'client',
      admin: {
        allowCreate: false,
        defaultColumns: ['authorName', 'authorRole'],
      },
    },
  ],
}
