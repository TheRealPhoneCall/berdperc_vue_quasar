import { mapListSchema } from '../../services/rxdb_schema'
import { MidiListAPI } from '../../services/json_service'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const mapList = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: 'maplists1',
    slug: 'maplist1',
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
