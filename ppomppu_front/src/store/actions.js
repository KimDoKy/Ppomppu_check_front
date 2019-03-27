import * as api from '../api'

const actions =  {
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
    },
    DELETE_KEYWORD(data) {
      console.log(data)
      return api.contents.destroy(data).then(_ =>
        this.$router.push('/'))
    }
  }

export default actions