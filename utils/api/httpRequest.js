// 请求拦截
// '-----------------------------' + boundary + '\n' +
// 'Content-Disposition: form-data; name="learn"\n' +
// '\n' +
// JSON.stringify(params) + '\n' +
// '-----------------------------' + boundary + '--\n'
let token = wx.getStorageSync('token')
let jwt = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9ybWFsIiwidXNlcl9uYW1lIjoiYTQ2MzgwNjAxNyIsInNjb3BlIjpbImFwcCJdLCJuYW1lIjoiYTQ2MzgwNjAxNyIsInBlcnNvbklkIjoxLCJpZCI6MSwiZXhwIjoxNTczMjM1MzU3LCJhdXRob3JpdGllcyI6WyJmaW5kUGFjdHNCeU5hbWUiLCJmaW5kSm9iQnlJZCIsImZpbmRQYWN0c0J5UGVyc29uSWQiLCJkZWxldGVMZWFybkJ5SWQiLCJmaW5kQWxsTGVhcm5zVW5DaGVja2VkIiwidXBsb2FkIiwiZmluZFBhY3RCeUlkIiwiYWRkTGVhcm4iLCJnZXRVc2VyIiwiZmluZFBhY3RUeXBlQnlJZCIsImZpbmRMZWFybnNCeVBlcnNvbklkIiwiZmluZFJvbGVCeUlkIiwiZmluZEFsbExlYXJuVW5DaGVja2VkQnlQZXJzb25JZCIsInVwZGF0ZUxlYXJuQnlJZCIsImZpbmRQZXJtaXNzaW9uQnlJZCIsImZpbmREZXZlbG9waW5nQnlJZCIsImZpbmREZXZlbG9waW5nc0J5UGVyc29uSWQiLCJmaW5kSm9ic0J5UGVyc29uSWQiLCJmaW5kUGVyc29uTm9ybWFsSW5mb0J5SWQiLCJmaW5kTGVhcm5CeUlkIiwiZmluZFBhY3RzQnlRdWVyeVZvIl0sImp0aSI6ImVhMzEzODQ4LTFkNTgtNDIxMy1hOTlmLWJmYzg1ODFlODlkMCIsImNsaWVudF9pZCI6IlhjV2ViQXBwIn0.X7H3BE0h7impIxsBSrC2xBqnZkMrVkgiIxtVUWrSvAJWRFRDwOLaLnJx81556QAA6l52vYWVQBWo9fl_ciER0f0N8FE2buFuanBO6rLGW1Cb4PESwsiqvLylre2GwPpR9XFICRaMZ4JbA7Gyah87ygIpDHm-3YJSCJ8ySKihVs3dnnEA7IT5BXMS1w6s5YdQJOhXdMvj-xsgBHp09U-ckau7u9f4V9keC8Ysp0hAhi_snCZpQEYZfNPMoEGTDVdTQUa9hbQvEUrtLnz9kR3mDH-TvIUTNUoXUtoyYiEjK1KSlbp7MTqI7k5kf_TdOy1rXi_GfLQx6s8cpixdi5qCrg'
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
          console.log(res)
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