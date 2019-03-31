const app = getApp()

Component({
  properties: {
    navbarData: {   //由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {
        // console.log('监测到数值变化', newVal, oldVal)
        // this.setData({
        //   navbarData:newVal
        // })
      }
    }
  },
  observers: {
    //仅有一个新值传入
    /*    'navbarData': function () {
          console.log('navbarData变化',arguments)
        }*/
  },
  
  data: {
    isFromShare: false,
    navbarTop: 24,
    //默认值  默认显示左上角
    navbarData: {
      title: 'Index',
      showCapsule: true,
      homePage: '',
    }
  },
  
  attached: function () {
    // 获取是否是通过分享进入的小程序
    this.setData({
      isFromShare: app.globalData.isFromShare
    })
    // 定义导航栏的高度   方便对齐
    this.setData({
      navbarTop: app.globalData.navbarTop
    })
  },
  
  methods: {
    // 返回上一页面
    _onNavBack() {
      wx.navigateBack()
    },
    //返回到首页
    _onBackHome() {
      //没有主页链接时返回上一层
      if (this.data.navbarData.homePage) {
        wx.switchTab({
          url: this.data.navbarData.homePage,
        })
      } else {
        wx.navigateBack()
      }
      
    },
    //点击标题事件
    _onClickTitle() {
      const myEventDetail = {}, // detail对象，提供给事件监听函数
          myEventOption = {} // 触发事件的选项
      
      //页面监听事件时用`bind:clickTitle=""`
      this.triggerEvent('clickTitle', myEventDetail, myEventOption)
    }
  }
  
}) 