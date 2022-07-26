import {
  indexData
} from "../../data/douban"

// pages/index/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },
  /**
   * 跳转到详情页
   */
  detailHandler: function (e) {
    let item = e.currentTarget.dataset.item;
    // console.log(e.currentTarget.dataset);
     wx.navigateTo({
      url: '../detail/detail?data=' + JSON.stringify(item),
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    // console.log(e.id);
    // console.log(indexData[index].contentList);
    this.setData({
      list: indexData[e.id].contentList,
    });
    wx.setNavigationBarTitle({
      title: e.title,
    });
    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000',
    });
    // console.log(this.data.list);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})