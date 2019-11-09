// pages/forgetPassword/forgetPassword.js
import * as passwordApi from '../../utils/password/api/PasswordApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    findPassword: {
      username: '',
      email: '',
      verifyCode: '',
      newPassword: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.data.findPassword.username = e.detail.value
    this.setData({
      findPassword: this.data.findPassword
    })
  },
  getEmail: function (e) {
    this.data.findPassword.email = e.detail.value
    this.setData({
      findPassword: this.data.findPassword
    })
  },
  getVerifyCode: function (e) {
    this.data.findPassword.verifyCode = e.detail.value
    this.setData({
      findPassword: this.data.findPassword
    })
  },
  getPassword: function (e) {
    this.data.findPassword.newPassword = e.detail.value
    this.setData({
      findPassword: this.data.findPassword
    })
  },
  sendVerifyCode: function () {
    if (this.data.findPassword.username === '' || this.data.findPassword.email === '') {
      wx.showToast({
        title: '用户名或邮箱未填写',
        icon: 'none'
      })
    } else {
      passwordApi.findPassword(this.data.findPassword).then(res => {
        if (res.success) {
          wx.showToast({
            title: '验证码发送成功',
            icon: 'SUCCESS'
          })
        } else {
          wx.showToast({
            title: '用户名或邮箱不正确,',
            icon: 'none'
          })
        }
      })
    }
  },
  resetPassword: function () {
    if (this.data.findPassword.username === '' || this.data.findPassword.newPassword === ''
      || this.data.findPassword.verifyCode === '' || this.data.findPassword.email === '') {
      wx.showToast({
        title: '有选项为空，请填写',
        icon: 'none'
      })
    } else {
      passwordApi.resetPassword(this.data.findPassword).then(res => {
        if (res.success) {
          wx.showToast({
            title: '修改成功',
            icon: 'SUCCESS'
          })
        } else {
          wx.showToast({
            title: res.message,
            icon: 'none'
          })
        }
      })
    }
  }
})