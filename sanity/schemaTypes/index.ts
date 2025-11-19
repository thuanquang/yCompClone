import { type SchemaTypeDefinition } from 'sanity'
import {author} from '../schemaTypes/author'
import { startup } from '../schemaTypes/startup'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
}
