import * as api from '../api'

const actions =  {
    ADD_KEY(_, {keyword}) {
      return api.contents.create(keyword)
    },
    FETCH_KEYWORD ({commit}) {
      return api.contents.fetch()
        .then(data => {
          commit('SET_KEYWORD', data)
          commit('SET_KEYWORD_LENGTH', data.length)
        })
    },
    LOGIN({commit}, {email, password}) {
      return api.auth.login(email, password).then(
        ({key}) => commit('LOGIN', key)
    )},
    ADD_UESRINFO({commit}) {
      return api.auth.userInfo()
        .then(resulte => {
          commit('SET_USERINFO', resulte)
        })
    }
  }

export default actions