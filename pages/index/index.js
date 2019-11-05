//index.js
//获取应用实例
import * as personApi from '../../utils/PersonInfo/api/PersonApi'

const app = getApp()

Page({
  data: {
    username: 'username',
    user: {
      username: '',
      password: ''
    },
    person: {
      personId: wx.getStorageSync('personId'),
      name: 'name',
      sex: false,
      age: 1,
      level: '',
      isLive: true,
      partyBranch: '',
      imagePath: '../../images/tab_account2.png',
      jobs: [
        {
          jobId: 1,
          jobName: 'jobName1',
        },
        {
          jobId: 2,
          jobName: 'jobName2'
        }
      ]
    },
    open: false,
    list: {
      open: false
    }
  },
  //事件处理函数
  bindViewTap: function () {
  },
  onReady: function () {
    wx.setStorageSync('personId', 1)
    var person;
    let that = this;
    personApi.findPersonNormalInfoById().then(res => {
      console.log(res);
      that.setData({
        person: res.queryResult.list[0]
      })
    })
  },
  onLoad: function (query) {
    console.log(query);
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
    var list = this.data.list
    list.open = !list.open
    console.log(list)
    this.setData({
      list: list
    })
  },
  go2Page:function (e) {
    wx.redirectTo({
      url:'/pages/'+e.target.dataset.val
    })
  }
})
