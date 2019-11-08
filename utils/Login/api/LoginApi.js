import http from "../../api/httpRequest";

let baseUrl = 'http://personnel-manage.top:40400/auth/'
/**
 * 用户登录
 * @param user：{
 *     username:''
 *     password:''
 * }
 * @returns {Promise<unknown>}
 */
export const userLogin = (user) => {
  return new Promise((resolve, reject) => {
    http.requestPostForm(baseUrl + 'userlogin', user)
      .then(res => {
        debugger
        let data = res.data
        // console.log(data);
        //cookies数组，查询所需的cookie
        let cookies = res.cookies
        for (let i = 0, len = cookies.length; i < len; i++) {
          if (cookies[i].search('uid') < 0) {
            continue;
          }
          wx.setStorageSync('cookie', cookies[i])
        }
        // console.log(cookie);
        // console.log(wx.getStorageSync('cookie'));
        wx.setStorageSync('token', data.token)
        userJwt().then(result => {
          resolve(result.data)
        })
      }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 获取jwt
 * @returns {Promise<unknown>}
 */
export const userJwt = () => {
  return new Promise((resolve, reject) => {
    http.requestGet(baseUrl + 'userjwt')
      .then(res => {
        debugger
        let data = res.data
        wx.setStorageSync('jwt', data.jwt)
        wx.setStorageSync('personId', data.personId)
        resolve(res)
      }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 用户登出
 * @returns {Promise<unknown>}
 */
export const userlogout = () => {
  return new Promise((resolve, reject) => {
    http.requestPost(baseUrl + 'userlogout')
      .then(res => {
        wx.clearStorageSync()
        // console.log(res);
        resolve(res.data)
      }).catch(error => {
      reject(error)
    })
  })
}