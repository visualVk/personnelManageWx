import http from "../../api/httpRequest";
import {baseInfo} from "../../System";

let baseUrl = baseInfo.pact
export const findAllPactByPersonId = () => {
  let personId = wx.getStorageSync('personId')
  return new Promise((resolve, reject) => {
    http.requestGet(baseUrl + 'findPactsByPersonId/' + personId).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}