import Axios from 'axios'
import app from '@/main.js'
const root = process.env.NODE_ENV !== 'production' ? '/test-api' : ''

// 组装post请求的tiket
const post = async (url, options, type) => {
    urlParamStr = getUrlParam('ticket', url)
      ? ''
      : hasQuery(url)
      ? '&ticket=' + ticket
      : '?ticket=' + ticket
    const promise = new Promise((resolve, reject) => {
      Axios.post(root + url + urlParamStr + '&type=' + type, options)
        .then(res => {
          const data = res.data
          if (data.Message === 'Success') {
            resolve(data)
          } else {
            reject(data)
            let message =
              (data.error || '请求失败') + ' 错误码:' + (data.errorCode || '-1')
            alertErr(message)
          }
        })
        .catch(err => {
          let data = err.response.data
          reject(data)
          let message =
            (data.message || data.error || '请求失败') +
            ' 错误码:' +
            (data.status || '-1')
          alertErr(message)
        })
    })
    return promise
  }

  const get = async (url, param) => {
    urlParamStr = getUrlParam('ticket', url)
      ? ''
      : hasQuery(url)
      ? '&ticket=' + ticket
      : '?ticket=' + ticket
    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url: root + url + urlParamStr,
        params: param
      })
        .then(res => {
          const data = res.data
          if (data.success) {
            resolve(data)
          } else {
            reject(data)
            let message =
              (data.error || '请求失败') + ' 错误码:' + (data.errorCode || '-1')
            alertErr(message)
          }
        })
        .catch(err => {
          let data = err.response.data
          reject(data)
          let message =
            (data.message || data.error || '请求失败') +
            ' 错误码:' +
            (data.status || '-1')
          alertErr(message)
        })
    })
  }

  export const testget = async options => get('/subcribe/subscribed', options)
