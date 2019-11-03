import http from "../../api/httpRequest";
import {baseInfo} from "../../System";

let baseUrl = baseInfo.person

/**
 * 查询个人信息
 * @returns {Promise<unknown>}
 */
export const findPersonNormalInfoById = () => {
    // debugger
    let id = wx.getStorageSync('personId')
    return new Promise((resolve, reject) => {
        http.requestGet(baseUrl + 'findPersonNormalInfoById/' + id).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}
/**
 *  还有问题
 * @param PersonEntity:{
 *     personNormal:{
 *         name:''
 *         sex:true||false
 *
 *     }
 * }
 */
export const updatePersonNormalInfo = (PersonEntity) => {
    // debugger
    // formData.append('_method', 'put')
    return new Promise((resolve, reject) => {
        http.requestPutFormData(baseUrl + 'updatePersonNormalInfo', PersonEntity).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error)
        })
    })
}