// pages/addLearn/addLearn.js
import * as learnApi from '../../utils/Learn/api/LearnApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificateTip: '请选择照片',
    addLearn: {
      learn: {
        personId: wx.getStorageSync('personId'),
        content: '',
      },
      certificate: ''
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
  getLearnContent: function (e) {
    let addLearn = this.data.addLearn
    addLearn.learn.content = e.detail.value
    this.setData({
      addLearn: addLearn
    })
    // console.log(this.data.addLearn);
  },
  chooseImage: function () {
    let that = this
    wx.chooseImage({
      success(res) {
        // debugger
        that.data.addLearn.certificate = res.tempFilePaths[0]
        that.setData({
          certificateTip: '已选择图片，可跟换',
          addLearn: that.data.addLearn
        })
      }
    })
  },
  bindSubmit: function () {
    if (this.data.addLearn.certificate == null || this.data.addLearn.certificate === '' ||
      this.data.addLearn.learn.content == null || this.data.addLearn.learn.content === '') {
      wx.showToast({
        title: '请添加图片或内容',
        icon: 'none'
      })
    }
  }
})