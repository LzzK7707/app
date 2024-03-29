import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const request = axios.create({
  // 配置对象
  // 基础路径，发送请求时，路径会出现api
  baseURL: '/mock',
  // 超时时间
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  nprogress.start()
  return config
})

// 响应拦截器
request.interceptors.response.use(
  response => {
    nprogress.done()
    return response.data
  },
  error => {
    // 响应失败时的回调函数
    return Promise.reject(new error('请求失败'))
  }
)
export default request
