//index.js
//获取应用实例
const app = getApp()
import * as loginApi from '../../utils/Login/api/LoginApi'
import httpRequest from "../../utils/api/httpRequest";
import * as personApi from '../../utils/PersonInfo/api/PersonApi'
import * as developingApi from '../../utils/Developing/api/DevelopingAPi'
import * as learnApi from '../../utils/Learn/api/LearnApi'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user: {
      username: '',
      password: ''
    },
    open: false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    loginApi.userLogin({username: 'admin', password: 'admin'}).then(res => {
      // console.log(res);
      httpRequest.requestGet('http://personnel-manage.top:40400/auth/userjwt').then(res => {
        // console.log(res);
        personApi.updatePersonNormalInfo({
          person: {
            personId: wx.getStorageSync('personId'),
            name: 'aaa',
            sex: true,
            age: 11,
            level: 0,
            isLive: true
          },
          file: 'images/not_rotate_result_img.png'
        }).then(res => {
          console.log(res);
        })
        // personApi.updatePersonNormalInfo()
      })
    })
    learnApi.findLearnsByPersonId().then(res => {
      //do something
    }).catch(error => {
      //do something
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
    tap_ch: function(e){
        if(this.data.open){
            this.setData({
                open : false
            });
        }else{
            this.setData({
                open : true
            });
        }
    }
})
