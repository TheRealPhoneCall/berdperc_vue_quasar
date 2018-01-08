import { configSchema } from '../../services/rxdb_schema'
import { ConfigFileAPI } from '../../services/json_service'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const config = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: 'configs4',
    slug: 'config4',
    schema: configSchema(),
    api: ConfigFileAPI
  },
  actions: {
    ...rxdb.actions
  },
  mutations: {
    ...rxdb.mutations,
    ...loading.mutations
  },
  getters: {
    configs (state) {
      return state.docs
    },
    config (state) {
      return state.doc
    }
  }
}
