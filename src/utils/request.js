import axios from 'axios'
const services = axios.create({
  baseURL: '/api',
  timeout: 5000
})
services.interceptors.request.use(
  config => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

services.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      const msg = res.message || '未知错误，请联系管理员查看'
      console.error('[api]', msg)
      return Promise.reject(msg)
    }

    return res.data
  },
  error => {
    const { response } = error
    if (response && response.data) {
      return Promise.reject(error)
    } else {
      const { message } = error
      console.error('[api]', message)
      return Promise.reject(error)
    }
  }
)

export default services
