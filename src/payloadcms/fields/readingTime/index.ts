import type { NumberField } from 'payload'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'

const WORDS_PER_MINUTE = 200

/**
 * Estimated reading time in minutes, computed on read from the Lexical
 * `content` field rather than stored in the database.
 *
 * Caveat: this reads `siblingData.content`, so a query that uses `select` to
 * exclude `content` returns a null reading time.
 */
export const readingTimeField: NumberField = {
  name: 'readingTime',
  type: 'number',
  virtual: true,
  admin: {
    position: 'sidebar',
    readOnly: true,
    description: 'Estimated minutes to read. Recalculated on every read.',
  },
  hooks: {
    afterRead: [
      ({ siblingData }) => {
        const content = (siblingData as { content?: SerializedEditorState })?.content

        if (!content?.root) return null

        const plaintext = convertLexicalToPlaintext({ data: content })
        const words = plaintext.split(/\s+/).filter(Boolean).length

        if (words === 0) return null

        return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
      },
    ],
  },
}
