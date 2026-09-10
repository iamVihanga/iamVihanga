import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

const urlValidate = (value: null | string | undefined) => {
  if (!value) return true
  return /^https?:\/\/\S+$/i.test(value) || 'Enter a URL starting with http:// or https://'
}

/**
 * Portfolio projects across all four contexts: personal, Codeville agency,
 * direct client and collaboration work.
 */
export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'projectType', 'stage', '_status', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  orderable: true,
  defaultPopulate: {
    title: true,
    slug: true,
    excerpt: true,
    coverImage: true,
    projectType: true,
    stage: true,
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
        description: 'One or two sentences, shown on project cards.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'The full case study.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      admin: {
        description: 'Screenshots and diagrams. Captions come from each media item.',
      },
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'technologies',
      hasMany: true,
    },
    {
      name: 'stacks',
      type: 'relationship',
      relationTo: 'tech-stacks',
      hasMany: true,
      admin: {
        description: 'Curated stacks this project is built on.',
      },
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
      admin: {
        description:
          'Capability areas this project demonstrates. Set editorially, not derived from the technologies above.',
      },
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'Your role, e.g. Lead full-stack developer.',
      },
    },
    {
      name: 'teamSize',
      type: 'number',
      min: 1,
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        { name: 'liveUrl', type: 'text', label: 'Live URL', validate: urlValidate },
        { name: 'repoUrl', type: 'text', label: 'Repository URL', validate: urlValidate },
        { name: 'caseStudyUrl', type: 'text', label: 'External case study URL', validate: urlValidate },
      ],
    },
    {
      name: 'projectType',
      type: 'select',
      required: true,
      defaultValue: 'personal',
      options: [
        { label: 'Personal', value: 'personal' },
        { label: 'Agency', value: 'agency' },
        { label: 'Client', value: 'client' },
        { label: 'Collaboration', value: 'collaboration' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      admin: {
        position: 'sidebar',
        description: 'Who the work was delivered for.',
        condition: (data) => data?.projectType !== 'personal',
      },
    },
    {
      name: 'agency',
      type: 'relationship',
      relationTo: 'clients',
      filterOptions: () => ({ kind: { equals: 'agency' } }),
      admin: {
        position: 'sidebar',
        description: 'The agency this was delivered through, e.g. Codeville.',
        condition: (data) => data?.projectType === 'agency',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'project-categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'stage',
      type: 'select',
      defaultValue: 'completed',
      options: [
        { label: 'Concept', value: 'concept' },
        { label: 'In progress', value: 'in-progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Maintained', value: 'maintained' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Delivery stage. Separate from the draft/published state.',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'monthOnly' },
      },
    },
    {
      name: 'completedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'monthOnly' },
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
