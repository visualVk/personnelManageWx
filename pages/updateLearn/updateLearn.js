// pages/updateLearn/updateLearn.js
import * as learnApi from '../../utils/Learn/api/LearnApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    learnId: 1,
    learnEntity: {
      learn: {
        learnId: 1,
        personId: wx.getStorageSync('personId'),
        content: '123',
        certificatePath: '',
      },
      certificate: ''
    },
    certificateTip: '请选择图片'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      learnId: options.learnId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let learnEntity = this.data.learnEntity
    learnApi.findLearnById(this.data.learnId).then(res => {
      learnEntity.learn = res.queryResult.list[0]
      this.setData({
        learnEntity: learnEntity
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
  bindSubmit: function () {
    learnApi.updateLearn(this.data.learnEntity).then(res => {
      debugger
      console.log(res);
      if (res.success) {
        wx.showToast({
          title: res.message,
          icon: 'SUCCESS',
        })
      } else {
        wx.showToast({
          title: res.message,
          icon: 'none'
        })
      }
    })
  },
  getLearnContent: function (e) {
    let learnEntity = this.data.learnEntity
    learnEntity.learn.content = e.detail.value
    this.setData({
      learnEntity: learnEntity
    })
    // console.log(this.data.addLearn);
  },
  chooseImageAndPreview: function (e) {
    let that = this
    wx.chooseImage({
      success(res) {
        debugger
        that.data.learnEntity.certificate = res.tempFilePaths[0]
        that.data.learnEntity.learn.certificatePath = res.tempFilePaths[0]
        that.setData({
          certificateTip: '已选择图片，可跟换',
          learnEntity: that.data.learnEntity
        })
      }
    })
  }
})