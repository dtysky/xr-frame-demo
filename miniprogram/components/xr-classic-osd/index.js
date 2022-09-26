Component({
  scene: null,
  wxball: null,
  wxballTransform: null,
  wxballAnimator: null,
  animationRuning: false,
  properties: {
    markerImg: {
      type: String
    },
  },
  data: {
    loaded: false,
    arReady: false,
    avatarReady: false,
    avatarName: 'Your Name',
    avatarTextureId: '0',
  },
  lifetimes: {
    async attached() {
      console.log('data', this.data);
    }
  },
  methods: {
    handleReady({
      detail
    }) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);

      wx.getUserProfile({
        desc: '获取头像名称',
        success: (res) => {
          this.scene.assets.loadAsset({
            type: 'texture', assetId: 'avatar', src: res.userInfo.avatarUrl
          }).then(() => this.setData({avatarReady: true, avatarName: res.userInfo.nickName, avatarTextureId: 'avatar'}));
        }
      })

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
    }
  }
})