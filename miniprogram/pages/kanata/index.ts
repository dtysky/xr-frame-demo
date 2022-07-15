// index.ts

import { init } from "../../tests/testKanata";

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    //@ts-ignore
    console.log(wx.Kanata);
    const query = wx.createSelectorQuery()
    query.select('#canvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        const canvas = res[0].node
        // const ctx = canvas.getContext('2d')

        // const dpr = wx.getSystemInfoSync().pixelRatio
        // canvas.width = res[0].width * dpr
        // canvas.height = res[0].height * dpr
        // ctx.scale(dpr, dpr)

        // ctx.fillRect(0, 0, 100, 100)
        //@ts-ignore
        var kanata = wx.Kanata.CREATE_INSTANCE(canvas, {}, 'Game', false, '');
        console.log(kanata);
        kanata.renderEnv.canvasWidth = canvas.width;
        kanata.renderEnv.canvasHeight = canvas.height;
        // const desc: any = {};
        // desc.colorAction = 0;
        // desc.depthAction = 0;
        // desc.stencilAction = 0;
        // desc.clearColor = [1, 0, 0, 1];
        // desc.clearDepth = 1;
        // desc.clearStencil = 0;
        // const viewPortRect = {x: 0, y: 0, w: 1, h: 1};
        // const view = new kanata.View({
        //   passAction: desc, viewport: viewPortRect, scissor: viewPortRect
        // });
        // console.log(kanata.renderEnv.canvasWidth, kanata.renderEnv.canvasHeight);
        // console.log(view);
        // kanata.renderEnv.beginFrame();
        // kanata.renderEnv.clearView(view);
        // kanata.renderEnv.endFrame();

        const draw = init(kanata);
        draw();
        draw();
        draw();
        draw();
      });
  }
})
