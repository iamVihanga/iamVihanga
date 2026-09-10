import type { GlobalConfig } from 'payload'

/** Everything the frontend needs for contact sections and the footer. */
export const Contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'availability',
      type: 'select',
      defaultValue: 'available',
      options: [
        { label: 'Available for work', value: 'available' },
        { label: 'Open to offers', value: 'open-to-work' },
        { label: 'Fully booked', value: 'booked' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'availabilityNote',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'e.g. Booking from March 2026.',
      },
    },
    {
      name: 'bookingUrl',
      type: 'text',
      admin: {
        description: 'Calendly or similar scheduling link.',
      },
      validate: (value: null | string | undefined) => {
        if (!value) return true
        return /^https?:\/\/\S+$/i.test(value) || 'Enter a URL starting with http:// or https://'
      },
    },
    {
      name: 'addresses',
      type: 'array',
      labels: {
        singular: 'Address',
        plural: 'Addresses',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          admin: { description: 'e.g. Head office, Home studio.' },
        },
        { name: 'line1', type: 'text', required: true },
        { name: 'line2', type: 'text' },
        { name: 'city', type: 'text' },
        { name: 'state', type: 'text' },
        { name: 'postalCode', type: 'text' },
        { name: 'country', type: 'text' },
        { name: 'mapUrl', type: 'text', label: 'Map link' },
      ],
    },
    {
      name: 'socials',
      type: 'array',
      labels: {
        singular: 'Social link',
        plural: 'Social links',
      },
      admin: {
        description: 'Drag rows to set the display order.',
      },
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'GitHub', value: 'github' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'X', value: 'x' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Dribbble', value: 'dribbble' },
            { label: 'Medium', value: 'medium' },
            { label: 'Dev.to', value: 'devto' },
            { label: 'Discord', value: 'discord' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'handle',
          type: 'text',
          admin: { description: 'e.g. @iamVihanga' },
        },
        {
          name: 'label',
          type: 'text',
          admin: { description: 'Override the platform name in the UI.' },
        },
      ],
    },
  ],
}
