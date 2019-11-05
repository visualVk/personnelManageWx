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

export const addLearn = (LearnEntity) => {
    return new Promise((resolve, reject) => {
        http.requestPostFormDataAndUploadFile(baseUrl+'addLearn',LearnEntity).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}