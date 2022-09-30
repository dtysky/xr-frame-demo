import list from './data/index';

Page({
  data: {
    list,
  },
  clickHandle(e) {
    let root = e.detail.root;
    let { name, path } = e.detail.item;

    if (path) {
      wx.navigateTo({
        url: root + path,
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
