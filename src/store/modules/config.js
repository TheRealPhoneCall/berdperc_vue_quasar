import { configSchema } from '../../services/rxdb_schema'
import { ConfigFileAPI } from '../../services/json_service'
import { CONFIG_COL } from '../../services/constants'
import { rxdb } from '../helpers/rxdb'
import { loading } from '../helpers/loading'

export const config = {
  namespaced: true,
  state: {
    ...rxdb.state,
    ...loading.state,
    name: CONFIG_COL.NAME,
    slug: CONFIG_COL.SLUG,
    schema: configSchema(),
    api: ConfigFileAPI
  },
  actions: {
    ...rxdb.actions,
    async initPercConfigs ({ state, rootState, commit, dispatch }, payload) {
      commit('setLoading', true)
      commit('clearError')
      const percSlug = payload
      console.log('initPercConfigs')

      try {
        state.api.setPercSlug(percSlug)
        await state.colClass.getDefaultDocsJSON(state.api)
        await state.colClass.addDefaultDocs()

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setLoading', false)
        commit('setError', err)
      }
    },
    async initPercsConfigs ({ state, rootState, commit, dispatch }) {
      commit('setLoading', true)
      commit('clearError')
      // console.log()
      try {
        for (let perc in rootState.perc.percs) {
          console.log('perc: ', perc)
          dispatch('initPercConfigs', perc.slug)
        }

        // set loading
        commit('setLoading', false)
      }
      catch (err) {
        commit('setLoading', false)
        commit('setError', err)
      }
    }
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
