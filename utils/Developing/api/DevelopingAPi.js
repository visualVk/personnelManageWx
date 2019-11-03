import http from "../../api/httpRequest";
import {baseInfo} from '../../System'

let baseUrl = baseInfo.developing

/**
 * 查询个人发展信息
 * @returns {Promise<unknown>}
 */
export const findDevelopingsByPersonId = () => {
    return new Promise((resolve, reject) => {
        let personId = wx.getStorageSync('personId')
        http.requestGet(baseUrl + 'findDevelopingsByPersonId/' + personId).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}

/**
 * 查询个人发展信息详情
 * @param id
 * @returns {Promise<unknown>}
 */
export const findDevelopingById = (id) => {
    return new Promise((resolve, reject) => {
        http.requestGet(baseUrl + 'findDevelopingById/' + id).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}