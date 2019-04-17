import {setAuthInHeader, auth} from '../api'

const mutations = {
    SET_IS_ADD_KEY(state, toggle) {
      return state.isAddKey = toggle
    },
    SET_KEYWORD(state, keywords) {
      return state.keywords = keywords
    },
    SET_USERINFO(state, info) {
      return state.userInfo = info
    },
    LOGIN(state, token) {
      if (!token) return
      state.token = token
      localStorage.setItem('token', token)
      setAuthInHeader(token)
    },
    LOGOUT(state) {
      state.token = null
      delete localStorage.token
      setAuthInHeader(null)
    },
    SET_KEYWORD_LENGTH(state, length) {
      return state.keywordLength = length
    }
  }

export default mutations