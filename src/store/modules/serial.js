import { loading } from '../helpers/loading'
// import PythonShell from 'python-shell'

export const serial = {
  namespaced: true,
  state: {
    ...loading.state,
    pyshell: null,
    default_session: {
      com: 'COM6',
      mode: 'json',
      pythonOptions: ['-u'],
      baudRate: '33250',
      script: 'main.py',
      type: 'arduino_std',
      jsonFile: 'ad_basic.json'
    },
    session_idx: 0,
    sessions: []
  },
  actions: {
    initPyshell ({ state, rootState, commit, dispatch }, payload) {
      commit('setLoading', true)
      commit('clearError')

      try {
        // const { mode, pythonOptions, type, script } = state.default_session
        // const { com, baudRate, jsonFile } = payload
        // const options = {
        //   mode,
        //   pythonOptions,
        //   args: ['-t', type, '-cp', com, '-br', baudRate, '-pc', jsonFile]
        // }

        // const pyshell = new PythonShell(script, options)
        const pyshell = null
        commit('setPyshell', pyshell)

        commit('setLoading', false)
        commit('clearError')
      }
      catch (err) {
        console.log('Error on serial/initiateShell action.', err)
        commit('setLoading', false)
        commit('setError', err)
      }
    }
  },
  mutations: {
    ...loading.mutations,
    setPyshell ({ state }, payload) {
      state.pyshell = payload
    },
    setSessionIdx ({ state }, payload) {
      state.session_idx = payload
    },
    setSession ({ state }, payload) {
      state.sessions[state.session_idx] = payload
    }
  }
}
