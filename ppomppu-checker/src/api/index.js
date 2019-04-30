import axios from 'axios'
import router from '../router'

// const DOMAIN = 'https://api.pycon.shop'
const DOMAIN = 'http://localhost:8000'
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
    return request('get', '/users/')
  },
  create(keyword) {
    return request('post', '/keywords/', {keyword})
  },
  destroy(id) {
    return request('delete', `/keywords/${id}/`)
  },
  update(id, keyword, alarm) {
    return request('patch', `/keywords/${id}/`, {keyword, alarm})
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/rest-auth/login/', {email, password})
  },
  userInfo() {
    return request('get', '/rest-auth/user/')
  },
  socialLogin(token) {
    return request('post', '/rest-auth/kakao/', {access_token: token})
  },
  registration(username, email, pw1, pw2) {
    return request('post', '/rest-auth/registration/', {
      username:username,
      email:email,
      password1:pw1,
      password2:pw2
    })
  }
}