import Vue from 'vue'
import Vuex from 'vuex'

// services
import BerdPercDB from '../services/rxdb_service'
import { DB } from '../services/constants'

// modules
import { ui } from './modules/ui'
import { config } from './modules/config'
import { mapList } from './modules/mapList'
import { pad } from './modules/pad'
import { perc } from './modules/perc'
import { library } from './modules/library'
import { serial } from './modules/serial'

Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // strict: debug,
  state: {
    dbObj: null,
    db: null,
    collections: null
  },
  actions: {
    async initiateDb ({ commit, dispatch }) {
      // initialize db
      const dbObj = new BerdPercDB(DB.NAME, DB.ADAPTER)
      const db = await dbObj.createDB()
      console.log('main store:', dbObj, db)

      commit('setDb', db)
      commit('setDbObj', dbObj)

      await Promise.all([
        dispatch('perc/initCollection', dbObj),
        dispatch('perc/initJsonDocs', dbObj),
        dispatch('config/initCollection', dbObj),
        dispatch('config/initPercsConfigs'),
        dispatch('library/initCollection', dbObj),
        dispatch('mapList/initCollection', dbObj)
        // dispatch('pad/initCollection', dbObj)
      ])
    }
  },
  mutations: {
    setDb (state, payload) {
      state.db = payload
    },
    setDbObj (state, payload) {
      state.dbObj = payload
    }
  },
  modules: {
    ui,
    config,
    mapList,
    pad,
    perc,
    library,
    serial
  }
})
