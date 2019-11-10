import http from "../../api/httpRequest";
import {baseInfo} from "../../System";

let baseUrl = baseInfo.learn

/**
 * 查询个人进修信息
 * @returns {Promise<unknown>}
 */
export const findLearnsByPersonId = () => {
  return new Promise((resolve, reject) => {
    let personId = wx.getStorageSync('personId');
    http.requestGet(baseUrl + 'findLearnsByPersonId/' + personId).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export const findLearnById = (id) => {
  return new Promise((resolve, reject) => {
    http.requestGet(baseUrl + 'findLearnById/' + id).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export const addLearn = (LearnEntity) => {
  return new Promise((resolve, reject) => {
    LearnEntity.learn.personId = wx.getStorageSync('personId')
    http.requestPostFormDataAndUploadFile(baseUrl + 'addLearn', LearnEntity).then(res => {
      resolve(JSON.parse(res.data))
    }).catch(error => {
      reject(error)
    })
  })
}

export const updateLearn = (LearnEntity) => {
  // TODO: 不带文件的multipart/formdata有问题，需要修改
  if (LearnEntity.certificate == null || LearnEntity.certificate == '') {
    // debugger
    return new Promise((resolve, reject) => {
      http.requestPutFormDataNoFile(baseUrl + 'updateLearnById', LearnEntity.learn).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  } else {
    // debugger
    return new Promise((resolve, reject) => {
      http.requestPutormDataAndUploadFile(baseUrl + 'updateLearnById', LearnEntity).then(res => {
        // debugger
        // console.log(JSON.parse(res.data));
        resolve(JSON.parse(res.data))
      }).catch(error => {
        reject(error)
      })
    })
  }
}