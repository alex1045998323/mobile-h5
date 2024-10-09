/**
 *｜--------------------------------------------------------------------------
 *｜Author     : 1045998323@qq.com
 *｜Class      : request
 *｜CreateTime ：2024/9/27 11:33
 *｜Notes      : 类说明
 *｜--------------------------------------------------------------------------
 */

import axios from 'axios'
import { get } from 'lodash'
import { showNotify } from 'vant'

const createService = () => {
  const instance = axios.create({
    baseURL: '/api', // 设置基础 URL
    timeout: 10000, // 请求超时时间
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      console.log('---config---', config)
      // 你可以在这里添加一些请求前的处理，如添加 token
      const token = localStorage.getItem('token') // 示例：从 localStorage 获取 token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data
      // 这个状态码是和后端约定的
      const { code } = dataAxios
      // 根据 code 进行判断
      if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
        return dataAxios
      } else {
        // console.log('response====>', code)
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
          case 200:
            // [ 示例 ] code === 0 代表没有错误
            // TODO 可能结果还需要code和msg进行后续处理，所以去掉.data返回全部结果
            // return dataAxios.data
            return dataAxios
          case 1001:
            // debugger
            // token 令牌过期，错误，返回登录页面
            console.log(dataAxios)
            // 删除cookie
            // util.cookies.remove('token')
            // util.cookies.remove('uuid')
            // 跳转路由
            router.push({ name: 'login' })
            break
          case 'xxx':
          // [ 示例 ] 其它和后台约定的 code
          // errorCreate(`[ code: xxx ] ${dataAxios.message}: ${response.config.url}`)
          // break
          default:
            // 不是正确的 code
            // errorCreate(`${dataAxios.message}`)
            break
        }
      }
    },
    (error) => {
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      showNotify({ type: 'danger', message: error.message, duration: 500000 })
      // 你可以在这里处理错误
      return Promise.reject(error)
    }
  )
  return instance
}

export const request = createService()
