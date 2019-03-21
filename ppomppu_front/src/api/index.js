import axios from 'axios'
import router from '../router'

const DOMAIN = 'https://api.pycon.shop'
const Unauthorized = 401
const onUnauthorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === Unauthorized) return onUnauthorized()
      throw Error(result)
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `token ${token}` : 'null';
}

const {token} = localStorage
if (token) setAuthInHeader(token)

export const contents = {
  fetch() {
    return request('post', '/keywords')
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/rest-auth/login/', {email, password})
  }
}
