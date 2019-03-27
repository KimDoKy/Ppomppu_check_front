import {setAuthInHeader} from '../api'

const mutations = {
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
      setAuthInHeader(token)
    },
    LOGOUT(state) {
      state.token = null
      delete localStorage.token
      setAuthInHeader(null)
    }
  }

export default mutations