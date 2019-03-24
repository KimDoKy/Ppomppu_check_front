import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddKey: false
  },
  mutations: {
    SET_IS_ADD_KEY(state, toggle) {
      return state.isAddKey = toggle
    }
  },
  actions: {
    ADD_KEY(_, {keyword}) {
      return api.contents.create(keyword)
    }
  }
})

export default store
