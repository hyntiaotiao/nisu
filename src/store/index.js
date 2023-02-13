import { createStore } from 'vuex'
import moudleUser from './user'
import moduleConfig from './config'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: moudleUser,
    config: moduleConfig,
  }
})
