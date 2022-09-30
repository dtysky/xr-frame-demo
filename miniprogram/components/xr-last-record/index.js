Component({
  scene: null,
  properties: {
  },
  data: {
    loaded: false,
    arReady: false,
    placed: false
  },
  lifetimes: {
    async attached() {
      console.log('data', this.data);
    }
  },
  methods: {
    handleReady({detail}) {
      this.scene = detail.value;
      this.inRealWorld = true;
      this.texts = {};
      this.textsIndex = {};
      this.bgm = wx.createInnerAudioContext({obeyMuteSwitch: false});
      this.bgm.src = 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/bgm.mp3';
      this.bgm.loop = true;
    },
    handleAssetsProgress: function ({detail}) {
      console.log('assets progress', detail.value);
    },
    handleARReady() {
      this.setData({arReady: true});
    },
    handleAssetsLoaded: function ({detail}) {
      console.log('assets loaded', detail.value);
      this.records = JSON.parse(this.scene.assets.getAsset('raw', 'records'));
      this.note = this.scene.assets.getAsset('raw', 'note');
      this.setData({loaded: true});
    },
    handleTick() {
      this.syncTexts();

      if (!this.data.placed || !this.inRealWorld) {
        return;
      }

      const xrSystem = wx.getXrFrameSystem();
      const mainCamEl = this.scene.getElementById('main-camera');
      const mainTrs = mainCamEl.getComponent(xrSystem.Transform);
      const door = this.scene.getElementById('door').getComponent(xrSystem.Transform);

      let forward = door.worldForward;
      forward = xrSystem.Vector2.createFromNumber(forward.x, forward.z);
      let diff = mainTrs.worldPosition.sub(door.worldPosition);
      diff = xrSystem.Vector2.createFromNumber(diff.x, diff.z);
      const preDiff = this.diff || diff;
      this.diff = diff;

      const dis = diff.length();
      const preDis = preDiff.length();
      const dir = forward.dot(diff);

      //@todo: 等待物理加上碰撞检测，替换
      if (dir >= 0 || preDis <= 0.2 || dis > 0.2) {
        return;
      }

      // 虚拟世界
      // mainCam: scene -> stencil
      // magicCam: ar
      door.setData({visible: false});
      ['scene-mesh', 'hikari', 'roam', 'xinyi'].forEach(id => {
        this.scene
          .getElementById(id)
          .getComponent(xrSystem.GLTF).meshes.forEach(mesh => mesh.material.setRenderState('stencilComp', 0));
      });
      this.inRealWorld = false;
    },
    handleShowDoor() {
      this.scene.ar.placeHere('setitem', true);
      this.bgm.play();
      this.setData({placed: true});
    },
    handleResume() {
      if (this.data.placed) {
        this.bgm.play();
      }
    },
    handleTouchNote() {
      this.triggerEvent('showNote', this.note);
    },
    handleTouchObj({detail}) {
      const xrSystem = wx.getXrFrameSystem();
      const {el, value} = detail;
      const {camera, target} = value;
      const id = target.id;
      let text = this.texts[id];
      const camTrs = camera.el.getComponent(xrSystem.Transform);
      const targetTrs = target.getComponent(xrSystem.Transform);
      const diff = camTrs.worldPosition.sub(targetTrs.worldPosition);
      const distance = Math.sqrt(diff.x * diff.x + diff.z * diff.z);

      if (!this.records[id]) {
        return;
      }

      const {y, d, texts: records} = this.records[id];

      if (distance > (d || 2)) {
        return;
      }

      if (text) {
        clearTimeout(text.timerId);
      }

      let index = this.textsIndex[id] === undefined ? -1 : this.textsIndex[id];
      if (index >= records.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      this.textsIndex[id] = index;

      this.texts[id] = {
        content: records[index],
        camera, target, y,
        timerId: setTimeout(() => {
          delete this.texts[id];
        }, 4000)
      };
    },
    syncTexts: function() {
      const texts = Object.keys(this.texts).map(id => {
        const {camera, target, content, y} = this.texts[id];
        const xrSystem = wx.getXrFrameSystem();
        const trs = target.getComponent(xrSystem.Transform);
        const tmp = trs.worldPosition.clone();
        tmp.y += y;
        const clipPos = camera.convertWorldPositionToClip(tmp);
        const {frameWidth, frameHeight} = this.scene;
  
        return {
          content,
          x: ((clipPos.x + 1) / 2) * frameWidth,
          y: (1 - (clipPos.y + 1) / 2) * frameHeight
        };
      });

      this.triggerEvent('changeTexts', texts);
    }
  }
})
