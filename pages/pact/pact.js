// pages/pact/pact.js
import * as pactApi from '../../utils/Pact/api/PactApi'
import * as loginApi from "../../utils/Login/api/LoginApi";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '欢迎',
    searchBarOpen: false,
    open: false,
    list: [
      {
        open: false,
        pact: {
          pactId: 1,
          pactName: 1,
          pactType: {
            pactTypeId: 1,
            pactTypeName: '奖励金'
          },
          pactContent: 'xxxx',
          date: '2019-10-24 23:45:11',
          duration: 12,
          salary: '12123'
        }
      }
    ],
    queryVo: {
      pactName: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // debugger
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // debugger
    pactApi.findAllPactByPersonId().then(res => {
      let list = res.queryResult.list, newList = []
      // debugger
      for (let i = 0, len = list.length; i < len; i++) {
        newList[i] = {
          open: false,
          pact: list[i]
        }
      }
      this.setData({
        list: newList
      })
      // debugger
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
      if (tmp.pact.pactId == id) {
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
  showSearchBar: function () {
    let open = !this.data.searchBarOpen
    this.setData({
      searchBarOpen: open
    })
  },
  getPactName: function (e) {
    this.data.queryVo.pactName = e.detail.value
    this.setData({
      queryVo: this.data.queryVo
    })
  },
  showPactByQueryVo: function () {
    pactApi.findPactsByQueryVo(this.data.queryVo).then(res => {
      let list = res.queryResult.list, newList = []
      // debugger
      for (let i = 0, len = list.length; i < len; i++) {
        newList[i] = {
          open: false,
          pact: list[i]
        }
      }
      this.setData({
        list: newList
      })
    })
  },
  logout: function () {
    loginApi.userlogout().then(res => {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    })
  }
})