// page/API/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置 ✖',
            url: 'get-location/get-location'
          }, {
            zh: '使用原生地图查看位置 ✖',
            url: 'open-location/open-location'
          }, {
            zh: '使用原生地图选择位置 ✖',
            url: 'choose-location/choose-location'
          }
        ]
      }, {
        id: 'storage',
        name: '数据 ✔',
        url: 'storage/storage'
      }, {
        id: 'worker',
        name: '多线程 ✖',
        url: 'worker/worker'
      }
    ],
    isSetTabBarPage: false,

  },
  kindToggle(e) {
    const id = e.currentTarget.id; const
      list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          wx.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
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
    this.leaveSetTabBarPage()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.leaveSetTabBarPage()
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
    return {
      title: '小程序接口能力测试用例',
      path: 'page/API/index'
    }
  }
})