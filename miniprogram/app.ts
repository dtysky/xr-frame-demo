// app.ts
// import './xr-custom/components/AutoRotate';
// import './xr-custom/elements/xr-auto-rotate-touchable-gltf';
// import './xr-custom/assets/geometry-star';
// import './xr-custom/assets/effect-shining';
// import './xr-custom/elements/xr-shining-star';
// import './xr-custom/assets/effect-last-record-final';

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})