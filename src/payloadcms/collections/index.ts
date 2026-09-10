import { CollectionConfig } from 'payload'

import { Users } from './Users'
import { Media } from './Media'
import { Projects } from './Projects'
import { Journal } from './Journal'
import { Testimonials } from './Testimonials'
import { Skills } from './Skills'
import { Technologies } from './Technologies'
import { TechStacks } from './Technologies/Stacks'
import { ProjectCategories } from './Projects/Categories'
import { JournalCategories } from './Journal/Categories'
import { Series } from './Journal/Series'
import { Clients } from './Clients'

export const collections: CollectionConfig[] = [
  // Content
  Projects,
  Journal,
  Testimonials,

  // Taxonomy
  Skills,
  Technologies,
  TechStacks,
  ProjectCategories,
  JournalCategories,
  Series,

  // People
  Clients,
  Users,

  // Media
  Media,
]
