import { librarySchema } from '../../services/rxdb_schema'
import { libraryAPI } from '../../services/json_service'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const library = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: 'library',
    slug: 'library',
    schema: librarySchema,
    api: libraryAPI
  },
  actions: {
    ...rxdb.actions
  },
  mutations: {
    ...rxdb.mutations,
    ...loading.mutations
  }
}
