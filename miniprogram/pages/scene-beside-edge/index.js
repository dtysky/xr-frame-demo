Page({
  data: {
    width: 300, height: 300,
    renderWidth: 300, renderHeight: 300,
    showDialog: false, name: '', text: '', bg: 'rgba(0, 0, 0, 0)',
    showLightButton: false, lightButtonDisable: true,
    nextAction: ''
  },
  onShow() {
    wx.hideHomeButton();
  },
  onHide() {
    wx.showHomeButton();
  },
  onLoad() {
    const info = wx.getSystemInfoSync();
    const width = info.windowWidth;
    const height = info.windowHeight;
    const dpi = info.pixelRatio;
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi
    });
  },
  handleRequireLight: function({detail}) {
    const {state, wait} = detail;
    console.log('light', state, wait)
    if (state === 'hide') {
      this.setData({showLightButton: false});
      return;
    }

    this.setData({
      showLightButton: true,
      lightButtonDisable: state === 'cd',
      nextAction: ''
      // 处理cd进度
    });
  },
  handleRequireDialog: function({detail}) {
    const {texts, name, from} = detail;
    this.texts = texts;
    this.textIndex = 0;
    this.from = from;
    this.setData({
      name: name || '', text: texts[0], showDialog: true,
      bg: from === 'step' ? '#000' : 'rgba(0, 0, 0, 0)'
    });
  },
  handleClickDialog: function() {
    this.textIndex += 1;
    if (this.textIndex > this.texts.length) {
      return;
    }

    if (this.textIndex === this.texts.length) {
      this.setData({text: '', name: '', bg: '#000'});
      setTimeout(() => {
        this.textIndex = 0;
        this.setData({showDialog: false, nextAction: this.from});
      }, 1000);
      return;
    }

    this.setData({text: this.texts[this.textIndex]});
  },
  handleTriggerLight: function() {
    if (this.data.lightButtonDisable) {
      return;
    }

    this.setData({nextAction: 'light'});
  }
})
