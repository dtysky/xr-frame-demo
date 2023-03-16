Component({
  behaviors: [require('../../common/share-behavior').default],
  properties: {
    a: Number,
  },
  data: {
    loaded: false
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);

    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
      this.setBallon();
    },
    async setBallon() {
      const scene = this.scene;
      const xrSystem = wx.getXrFrameSystem();

      const ballonElm = this.scene.getElementById('ballon');
      const ballonGLTF = ballonElm.getComponent(xrSystem.GLTF);
      

      const textureAsset = await scene.assets.loadAsset({
        type: 'texture',
        assetId: `texture-1`,
        src: 'https://webar.hereto.cn/asset/fe/ast-show/BalloonTEXc1.png',
      });

      for(const mesh of ballonGLTF.meshes) {
        console.log('textureAsset', textureAsset.value);
        mesh.material.setVector('u_specularFactor', xrSystem.Vector3.createFromNumber(0, 0, 0));
        mesh.material.setTexture('u_baseColorMap', textureAsset.value);
        mesh.material.setMacro('WX_USE_BASECOLORMAP', true);
      }
    }
  }
})