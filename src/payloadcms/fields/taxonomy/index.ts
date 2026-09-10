import type { Field } from 'payload'
import { slugField } from 'payload'

/**
 * The shared shape of every taxonomy-style collection: Skills, Technologies,
 * TechStacks, ProjectCategories and JournalCategories.
 *
 * `title` is used as the name field across all collections so that
 * `slugField()` can be called without `useAsSlug` and `admin.useAsTitle`
 * stays uniform.
 */
export const taxonomyFields = (): Field[] => [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  slugField(),
  {
    name: 'description',
    type: 'textarea',
    admin: {
      description: 'Short summary shown on listing pages and cards.',
    },
  },
  {
    name: 'icon',
    type: 'upload',
    relationTo: 'media',
    admin: {
      description: 'Logo or icon. SVG is preferred.',
    },
  },
  {
    name: 'color',
    type: 'text',
    admin: {
      description: 'Brand color as a hex value, e.g. #61DAFB.',
      position: 'sidebar',
    },
    validate: (value: string | null | undefined) => {
      if (!value) return true
      return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value) || 'Enter a hex color such as #61DAFB.'
    },
  },
]
