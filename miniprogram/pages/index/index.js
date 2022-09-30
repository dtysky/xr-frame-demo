import list from './data/index';

let lastOpened = false;

Page({
  data: {
    list,
    root: ''
  },
  clickHandle(e) {
    let root = this.data.root;
    let { name, path } = e.detail.item;

    if (path) {
      wx.navigateTo({
        url: root + path,
        fail: () => {
        },
      });
    }
  },
  handleLastRecord: async function () {
    if (lastOpened) {
      return;
    }

    if (Math.random() >= 0.3) {
      return;
    }

    let root = this.data.root;
    lastOpened = true;

    wx.request({
      url: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/last-gate.txt',
      success: function (res) {
        wx.showModal({
          title: '一把钥匙',
          content: res.data,
          confirmText: '寻找真相',
          cancelText: '放下钥匙',
          success: function(res) {
            if (res.cancel) {
              return;
            }

            wx.navigateTo({
              url: root + '/pages/scene-last-record/index',
              fail: () => {
                lastOpened = false;
              },
            });
          }
        });
      },
      fail: function (err) {
        lastOpened = false;
      }
    });
  }
});
