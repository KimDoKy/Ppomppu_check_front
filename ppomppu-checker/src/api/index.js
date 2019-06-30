import axios from 'axios'
import router from '../router'

// const DOMAIN = 'https://api.pycon.shop'
const DOMAIN = 'http://localhost:8000'
// const DOMAIN = 'http://ec2-13-124-26-214.ap-northeast-2.compute.amazonaws.com:8000'
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
    return request('get', '/users/info/')
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
  registration(username, email, pw1, pw2) {
    return request('post', '/rest-auth/registration/', {
      username:username,
      email:email,
      password1:pw1,
      password2:pw2
    })
  },
  passReset(uid, token, new_password1, new_password2) {
    return request('post', '/rest-auth/password/reset/confirm/', {
      uid:uid,
      token:token,
      new_password1:new_password1,
      new_password2:new_password2
    })
  },
  changePassword(new_password1, new_password2) {
    return request('post', '/rest-auth/password/change/', {
      new_password1:new_password1,
      new_password2:new_password2
    })
  },
  resetLink(email) {
    return request('post', '/rest-auth/password/reset/', {email})
  },
  logout(token) {
    return axios.post("https://api.pycon.shop/rest-auth/logout/", {
      headers: {
        Authorization: token
      }
    })
  }
}
