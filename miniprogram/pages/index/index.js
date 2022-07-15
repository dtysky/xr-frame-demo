import list from './data/index';

Page({
  data: {
    list,
  },
  clickHandle(e) {
    let { name, path } = e.detail.item;
    if (path) {
      wx.navigateTo({
        url: path,
        fail: () => {
        },
    });
    }
  },
  async onReady() {
    if (wx.getXrFrameSystem) {
      const xrFrameSystem = await wx.getXrFrameSystem()
    }
  }
});
