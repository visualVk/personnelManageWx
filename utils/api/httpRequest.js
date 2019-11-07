// 请求拦截
// '-----------------------------' + boundary + '\n' +
// 'Content-Disposition: form-data; name="learn"\n' +
// '\n' +
// JSON.stringify(params) + '\n' +
// '-----------------------------' + boundary + '--\n'
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
  requestPostFormDataAndUploadFile(url, params = {}) {
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
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: url,
        filePath: params.certificate,
        name: 'certificate',
        formData: {
          'learn': JSON.stringify(params.learn)
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
  requestPutormDataAndUploadFile(url, params = {}) {
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
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: url,
        filePath: params.certificate,
        name: 'certificate',
        formData: {
          'learn': JSON.stringify(params.learn),
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
  requestPutFormData(url, param = {}) {
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
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: url,
        filePath: param.file,
        name: 'file',
        formData: {
          'learn': JSON.stringify(param.person) || '',
          '_method': 'put'
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
  requestPutFormDataNoFile(url, params = {}) {
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
    let boundary = new Date().getTime()
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'PUT',
        data: JSON.stringify(params),
        header: {
          'Content-Type': 'multipart/form-data;boundary=' + boundary,
          'Authorization': jwt || '',
        },
      })
    })
  },
  requestPut(url, params = {}) {
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
  },
  requestPutForm(url, params = {}) {
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
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'PUT',
        data: params,
        dataType: 'json',
        header: {
          'Authorization': '' || jwt,
          'Content-Type': 'application/x-www-form-urlencoded',
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