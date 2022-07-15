Component({
  scene: null,
  properties: {
    markerImg: {
      type: String,
      value: '/assets/2dmarker-test.jpg'
    },
  },
  data: {
    loaded: false,
    arReady: false,
  },
  lifetimes: {
    async attached() {
      console.log('data', this.data)
    }
  },
  methods: {
    async handleReady({
      detail
    }) {
      const xrScene = this.scene = detail.value;
      const xrFrameSystem = await wx.getXrFrameSystem()
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function ({
      detail
    }) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({
      detail
    }) {
      console.log('assets loaded', detail.value);
      this.setData({
        loaded: true
      });
    },
    handleARReady: function ({
      detail
    }) {
      console.log('arReady');
      this.setData({
        arReady: true
      })
    },
    handleLog: function ({
      detail
    }) {
      console.log('log', detail.value);
    }
  }
})