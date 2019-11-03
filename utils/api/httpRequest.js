// 请求拦截
let token = wx.getStorageSync('token')
let jwt = ''
if (token) {
    // debugger
    let jwtSuffix = wx.getStorageSync('jwt');
    if (jwtSuffix) {
        jwt = 'Bearer ' + jwtSuffix
        // console.log(jwt);
    }
}

export default {
    requestGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                method: 'GET',
                data: params,
                dataType: 'json',
                header: {
                    'Authorization': jwt || '',
                    'cookie': wx.getStorageSync('cookie') || ''
                },
                success(res) {
                    resolve(res)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    },
    requestPost(url, params = {}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                method: 'POST',
                data: params,
                dataType: 'json',
                header: {
                    'Authorization': '' || jwt,
                },
                success(res) {
                    resolve(res)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    },
    requestPostForm(url, params = {}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                method: 'POST',
                data: params,
                dataType: 'json',
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': jwt || '',
                },
                success(res) {
                    resolve(res)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    },
    requestPostFormData(url, params = {}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                method: 'POST',
                data: params,
                dataType: 'json',
                header: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': jwt || '',
                },
                success(res) {
                    resolve(res)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    },
    requestPutFormData(url, param = {}) {
        return new Promise((resolve, reject) => {
            wx.uploadFile({
                url: url,
                filePath: param.file,
                name: 'file',
                formData: {
                    'personNormal': JSON.stringify(param.person) || '',
                    '_method': 'PUT'
                },
                header: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': jwt || '',
                },
                success(res) {
                    resolve(res)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    },
    requestPut(url, params = {}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                method: 'PUT',
                data: params,
                dataType: 'json',
                header: {
                    'Authorization': '' || jwt,
                },
                success(res) {
                    resolve(res)
                },
                fail(error) {
                    reject(error)
                }
            })
        })
    }
}