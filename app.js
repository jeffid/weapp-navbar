//app.js
App({
  globalData: {
    //导航布局相关
    isFromShare: false, //后有动态设置
    navbarTop: 24, //后有动态设置
    contentTop: 56, //后有动态设置
    contentHeight: 500, //后有动态设置
    homePage: '/pages/index/i',
    
    sysInfo: {},
    capsuleInfo: {},
    
  }, //globalData
  
  
  onLaunch: function (options) {
    const sysInfo = wx.getSystemInfoSync(),
        capsuleInfo = wx.getMenuButtonBoundingClientRect()
    
    // 判断是否由分享进入小程序
    this.globalData.isFromShare = ([1007, 1008].indexOf(options.scene) > -1) ? true : false
    //顶部导航栏top偏置，iphone8p: 20+4 ; mi5: 24+8
    this.globalData.navbarTop = (sysInfo.statusBarHeight + ((sysInfo.system.toLowerCase().indexOf('ios') > -1) ? 4 : 8))
    
    //内容块的top偏置,navbarHeight34, 间隙1px
    this.globalData.contentTop = this.globalData.navbarTop + 35
    //内容块可视高度
    this.globalData.contentHeight = sysInfo.windowHeight - this.globalData.contentTop - 3
    
    this.globalData.sysInfo = sysInfo
    this.globalData.capsuleInfo = capsuleInfo //右上角原生的胶囊位置及大小
  },
  
})