// pages/learn/learn.js
import * as learnApi from '../../utils/Learn/api/LearnApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    list: [
      {
        open: false,
        learn: {
          learnId: 1,
          personId: 1,
          certificatePath: null,
          content: 'xxxx',
          date: '2019-10-24 23:45:11',
          isCheck: 2,
          checkString: '已审核'
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
    //测试完后需要修改
    let that = this
    wx.setStorageSync('personId', 1)
    learnApi.findLearnsByPersonId().then(res => {
      let list = res.queryResult.list;
      for (let i = 0, len = list.length; i < len; i++) {
        that.data.list[i] = {
          open: false,
          learn: list[i]
        }
      }
      that.setData({list: that.data.list})
      console.log(that.data.list);
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
      if (tmp.learn.learnId == id) {
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
  go2AddLearn:function () {
    wx.navigateTo({
      url: '/pages/addLearn/addLearn'
    })
  }
})