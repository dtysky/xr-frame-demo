function convertMat3ToMat4(arr, dstMat) {
  dstMat.setArray([
    arr[0], arr[1], arr[2], 0,
    arr[3], arr[4], arr[5], 0,
    arr[6], arr[7], arr[8], 0,
    0, 0, 0, 1
  ]);
}

function debugMat4(mat4, xrSystem) {
  const t = new xrSystem.Vector3();
  const r = new xrSystem.Matrix4();
  const s = new xrSystem.Vector3();

  mat4.decomposeTransRotMatScale(t, r, s);
  const q = xrSystem.Quaternion.createFromMatrix4(r);

  console.log('mat:\n' + mat4._raw.join(','));
  console.log('tqs:\n' + t._raw.join(',') + '\n' + q._raw.join(',') + '\n' + s._raw.join(','));
}

Component({
  xrSystem: null,
  scene: null,
  camera: null,
  yTex: null,
  uvTex: null,
  session: null,
  arMat: null,
  displayMat: null,
  anchors: {},
  properties: {
    a: Number,
  },
  data: {
    loaded: false,
    arReady: false,
    anchors: []
  },
  lifetimes: {
    async attached() {
      console.log('data.a', this.data.a) // expected 123
    },
    detached() {
      this.session.stop();
      this.session.destroy();
    }
  },
  methods: {
    async handleReady({detail}) {
      const xrScene = detail.value;
      const xrFrameSystem = await wx.getXrFrameSystem()
      console.log('xr-scene', xrScene);
      this.initVK(xrScene, xrFrameSystem);
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
    },
    handleTick: function({detail}) {
      const {el, value} = detail;
      // this.updateYUVData();
    },
    initVK(scene, xrSystem) {
      this.scene = scene;
      this.xrSystem = xrSystem;
      this.session = wx.createVKSession({
        track: {
          // 水平面检测
          plane: { mode: 1 }
        }
      });

      console.log(this.session);
      this.testYUV(xrSystem);
  
      // this.session.start(err => {
      //   if (err) return console.error('VK error: ', err);

      //   console.log('vk started', err);
  
      //   const arMesh = scene.getElementById('mesh-ar-camera').getComponent(xrSystem.Mesh);
      //   this.arMat = arMesh.material;

      //   const frame = this.session.getVKFrame(this.scene.width, this.scene.height);
      //   const yuv = frame.getCameraRawTextureData();
      //   const dt = frame.getDisplayTransform();
      //   console.log(frame, yuv);
  
      //   this.yTex = scene.createTexture({
      //     width: yuv.width, height: yuv.height,
      //     source: [yuv.yAddress],
      //     pixelFormat: xrSystem.ETextureFormat.R8
      //   });
  
      //   this.uvTex = scene.createTexture({
      //     width: yuv.width / 2, height: yuv.height / 2,
      //     source: [yuv.uvAddress],
      //     pixelFormat: xrSystem.ETextureFormat.RGBA4
      //   });
  
      //   this.displayMat = new xrSystem.Matrix4();
      //   convertMat3ToMat4(dt, this.displayMat);
      //   this.arMat.setTexture('u_yTexture', this.yTex);
      //   this.arMat.setTexture('u_uvTexture', this.uvTex);
      //   this.arMat.setMatrix('u_displayMatrix', this.displayMat);

      //   this.camera = this.scene.getElementById('camera').getComponent(xrSystem.Camera);
      // });
    },
    updateYUVData() {
      if (!this.arMat) {
        return;
      }

      const frame = this.session.getVKFrame(this.scene.width, this.scene.height);
      const yuv = frame.getCameraRawTextureData();
      const dt = frame.getDisplayTransform();
      this.yTex.update({buffer: yuv.yAddress});
      this.uvTex.update({buffer: yuv.uvAddress});
      convertMat3ToMat4(dt, this.displayMat);
      this.arMat.setMatrix('u_displayMatrix', this.displayMat);

      const camera = frame.camera;
      if (camera) {
        const viewMat = camera.viewMatrix;
        const projMat = camera.getProjectionMatrix(this.camera.near, this.camera.far);
        
        this.camera.changeViewMatrix(true, viewMat);
        this.camera.changeProjectMatrix(true, projMat);
      }
    },
    testYUV(xrSystem) {
      const scene = this.scene;
      const yuv = {
        width: 4, height: 2,
        // yAddress: new Uint8Array([255, 255, 255, 255]),
        yAddress: new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255]),
        uvAddress: new Uint8Array([128, 128, 128, 128])
      };
      // const arMesh = scene.getElementById('mesh-ar-camera').getComponent(xrSystem.Mesh);
      const arMesh = scene.getElementById('mesh-simple').getComponent(xrSystem.Mesh);
      this.arMat = arMesh.material;

      this.yTex = scene.createTexture({
        width: yuv.width, height: yuv.height,
        source: [yuv.yAddress],
        pixelFormat: xrSystem.ETextureFormat.R8
      });
      this.uvTex = scene.createTexture({
        width: yuv.width / 2, height: yuv.height / 2,
        source: [yuv.uvAddress],
        pixelFormat: xrSystem.ETextureFormat.RGBA4
        // pixelFormat: xrSystem.ETextureFormat.RG8
      });

      // this.arMat.setTexture('u_yTexture', this.yTex);
      // this.arMat.setTexture('u_uvTexture', this.uvTex);
      this.arMat.setTexture('u_baseColorSampler', this.uvTex);
    },
  }
})