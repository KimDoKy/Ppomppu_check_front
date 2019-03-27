import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddKey: false,
    keywords: [],
    token: ''
  },
  getters: {
    isAuth(state) {
      return !!state.token
    }
  },
  mutations: {
    SET_IS_ADD_KEY(state, toggle) {
      return state.isAddKey = toggle
    },
    SET_KEYWORD(state, keywords) {
      return state.keywords = keywords
    },
    LOGIN(state, token) {
      if (!token) return
      state.token = token
      localStorage.setItem('token', token)
      api.setAuthInHeader(token)
    },
    LOGOUT(state) {
      state.token = null
      delete localStorage.token
      api.setAuthInHeader(null)
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
    },
    LOGIN({commit}, {email, password}) {
      return api.auth.login(email, password).then(
        ({key}) => commit('LOGIN', key)
      )
    }
  }
})

const { token } = localStorage
store.commit('LOGIN', token)

export default store
