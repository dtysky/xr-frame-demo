module.exports = Behavior({
  behaviors: [],
  properties: {
  },
  data: {
    left: 0,
    right: 0,
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    windowHeight: 1000,
    activeValues: [1],
  },
  attached: function(){},
  ready() {
    const info = wx.getSystemInfoSync();
    console.log(info)
    const width = info.windowWidth;
    const windowHeight = info.windowHeight;
    const height = windowHeight  * 0.6;
    const dpi = info.pixelRatio;
    this.setData({
      width,
      height,
      renderWidth: width * dpi,
      renderHeight: height * dpi,
      windowHeight
    });
  },
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
  }
})