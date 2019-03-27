import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddKey: false,
    keywords: [],
  },
  mutations: {
    SET_IS_ADD_KEY(state, toggle) {
      return state.isAddKey = toggle
    },
    SET_KEYWORD(state, keywords) {
      return state.keywords = keywords
    }
  },
  actions: {
    ADD_KEY(_, {keyword}) {
      return api.contents.create(keyword)
    },
    FETCH_KEYWORD ({commit}) {
      return api.contents.fetch()
        .then(data => {
          commit('SET_KEYWORD', data)
        })
    }
  }
})

export default store
