// pages/login/login.js
import * as loginApi from '../../utils/Login/api/LoginApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      username: 'a463806017',
      password: 'a463806017'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.clearStorageSync()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUsername: function (e) {
    let that = this;
    this.setData({
      user: {
        username: e.detail.value,
        password: that.data.user.password,
      }
    })
  },
  getPassword: function (e) {
    let that = this;
    this.setData({
      user: {
        username: that.data.user.username,
        password: e.detail.value
      }
    })
  },
  login: function () {
    loginApi.userLogin(this.data.user).then(res => {
      // console.log(res);
      if (res.success) {
        wx.redirectTo({
          url: '/pages/index/index'
        })
      }
    })
  },
  forgetPassword: function () {
    wx.navigateTo({
      url: '/pages/forgetPassword/forgetPassword'
    })
  }
})