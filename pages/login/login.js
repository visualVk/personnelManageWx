// pages/login/login.js
import * as loginApi from '../../utils/Login/api/LoginApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      username: '',
      password: ''
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
    // debugger
    console.log(e.detail.value)
    this.data.user.username = e.detail.value
    let user = this.data.user
    // console.log(user);
    this.setData({
      user: user
    })
    // console.log(user);
  },
  getPassword: function (e) {
    // debugger
    this.data.user.password = e.detail.value
    let user = this.data.user
    // console.log(user);
    this.setData({
      user: user
    })
    // console.log(user);
  },
  login: function () {
    // debugger
    // wx.setStorageSync('personId', 2)
    // debugger
    if (this.data.user.username == null || this.data.user.username === '') {
      wx.showToast({
        title: '请输入账户',
        icon: 'none'
      })
    } else if (this.data.user.password == null || this.data.user.password === '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    } else {
      loginApi.userLogin(this.data.user).then(res => {
        // console.log(res);
        if (res.success) {
          wx.redirectTo({
            url: '/pages/index/index'
          })
        } else {
          wx.showToast({
            title: '用户名错误或密码错误',
            icon: 'none'
          })
        }
      })
    }
    // wx.redirectTo({
    //   url: '/pages/index/index'
    // })
  },
  forgetPassword: function () {
    wx.navigateTo({
      url: '/pages/forgetPassword/forgetPassword'
    })
  }
})