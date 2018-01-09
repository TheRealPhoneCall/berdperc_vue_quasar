import { mapListSchema } from '../../services/rxdb_schema'
import { MidiListAPI } from '../../services/json_service'
import { MAPLIST_COL } from '../../services/constants'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const mapList = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: MAPLIST_COL.NAME,
    slug: MAPLIST_COL.SLUG,
    schema: mapListSchema,
    api: MidiListAPI
  },
  actions: {
    ...rxdb.actions
  },
  mutations: {
    ...rxdb.mutations,
    ...loading.mutations
  }
}
