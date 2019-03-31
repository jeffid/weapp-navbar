// pages/second/i.js
const app = getApp()

Page({
  
  data: {
    nvabarData: {
      showCapsule: true, //要显示返回按钮
      title: '这是子页面',
      // homePage: '/pages/index/i', //一定得是tabbar链接,否则无效
    },
    // 此页面 页面内容距最顶部的距离
    contentTop: app.globalData.contentTop,
    contentHeight: app.globalData.contentHeight,
  } //data
  
})