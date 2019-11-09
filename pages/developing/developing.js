// pages/developing/developing.js
import * as developingApi from '../../utils/Developing/api/DevelopingAPi'
import * as loginApi from "../../utils/Login/api/LoginApi";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '欢迎',
    open: false,
    list: [
      {
        open: false,
        developing: {
          developingId: 1,
          personId: wx.getStorageSync('personId'),
          learnExperience: '12313',
          jobExperience: 'xxxx',
          date: '2019-10-24 23:45:11',
        }
      }
    ],
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
    developingApi.findDevelopingsByPersonId().then(res => {
      let list = res.queryResult.list
      for (let i = 0, len = list.length; i < len; i++) {
        this.data.list[i] = {
          open: false,
          developing: list[i]
        }
      }
      let that = this
      this.setData({
        list: that.data.list
      })
    })
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
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },
  widgetsToggle: function (e) {
    let list = this.data.list;
    let id = e.currentTarget.id;
    for (let i = 0, len = list.length; i < len; i++) {
      let tmp = list[i];
      if (tmp.developing.developingId == id) {
        list[i].open = !list[i].open
      }
    }
    this.setData({list: list})
  },
  go2Page: function (e) {
    wx.redirectTo({
      url: '/pages/' + e.target.dataset.val
    })
  },
  logout: function () {
    loginApi.userlogout().then(res => {
      wx.redirectTo({
        url:'/pages/login/login'
      })
    })
  }
})