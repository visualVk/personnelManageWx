import http from "../../api/httpRequest";
import {baseInfo} from "../../System";

let baseUrl = baseInfo.auth
export const findPassword = (findUser) => {
  return new Promise((resolve, reject) => {
    http.requestGet(baseUrl + 'findPassword', findUser).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}

export const resetPassword = (findUser) => {
  return new Promise((resolve, reject) => {
    http.requestPutForm(baseUrl + 'resetPassword', findUser).then(res => {
      // debugger
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}