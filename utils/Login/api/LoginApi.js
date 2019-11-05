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
                let data = res.data
                // console.log(data);
                let cookie = res.cookies[0]
                console.log(cookie);
                wx.setStorageSync('cookie', cookie)
                wx.setStorageSync('token', data.token)
                userJwt().then(result => {
                  resolve(res.data)
                })
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
                // debugger
                let data = res.data
                wx.setStorageSync('jwt', data.jwt)
                wx.setStorageSync('personId', data.personId)
                resolve(res.data)
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