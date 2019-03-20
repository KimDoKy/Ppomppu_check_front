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
  }).then(result => data)
    .catch(result => {
      const {status} = result.response
      if (status === Unauthorized) return onUnauthorized()
      throw Error(result)
    })
}

export const contents = {
  fetch() {
    return request('post', '/keywords')
  }
}
