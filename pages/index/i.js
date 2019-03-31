// pages/index/i.js
const app = getApp()

Page({
  
  data: {
    nvabarData: {
      showCapsule: false,
      title: '这是首页'
    },
    // 此页面 页面内容距最顶部的距离
    contentTop: app.globalData.contentTop,
    contentHeight: app.globalData.contentHeight,
  } //data
  
})