import * as api from '../api'

const actions =  {
    ADD_KEY(_, {keyword}) {
      return api.contents.create(keyword)
    },
    FETCH_KEYWORD ({commit}) {
      return api.contents.fetch()
        .then(data => {
          commit('SET_KEYWORD', data.keywords)
          commit('SET_KEYWORD_LENGTH', data.keywords.length)
        })
    },
    LOGIN({commit}, {email, password}) {
      return api.auth.login(email, password).then(
        ({key}) => commit('LOGIN', key)
    )},
    SOCIAL_LOGIN({commit}, {access_token}) {
      return api.auth.socialLogin(access_token).then(
       ({key}) => commit('LOGIN', key) 
    )},
    ADD_UESRINFO({commit}) {
      return api.auth.userInfo()
        .then(resulte => {
          commit('SET_USERINFO', resulte)
        })
    },
    REGISTRATION({commit}, {username, email, password1, password2}) {
      return api.auth.registration(username, email, password1, password2)
        .then(({key}) => commit('LOGIN', key)
    )}
  }

export default actions