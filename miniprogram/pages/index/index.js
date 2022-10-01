import list from './data/index';

let lastOpened = false;
let lastCount = 0;

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
        success: () => {
          wx.reportEvent("xr_frame", {
            "xr_page_path": path
          });
        },
        fail: () => {
        },
      });
    }
  },
  handleLastRecord: async function () {
    if (lastOpened) {
      return;
    }

    lastCount += 1;
    if (Math.random() >= (0.3 + lastCount * 0.1)) {
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
              success: () => {
                wx.reportEvent("xr_frame", {
                  "xr_page_path": '/pages/scene-last-record/index',
                  "xr_last_record_click": lastCount
                });
              },
              fail: (err) => {
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
