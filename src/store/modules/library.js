import { librarySchema } from '../../services/rxdb_schema'
import { libraryAPI } from '../../services/json_service'
import { LIBRARY_COL } from '../../services/constants'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const library = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: LIBRARY_COL.NAME,
    slug: LIBRARY_COL.SLUG,
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
