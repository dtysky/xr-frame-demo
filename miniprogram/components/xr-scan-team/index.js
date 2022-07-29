Component({
  properties: {
    loaded: false,
    run: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          this.requireRun = true;
        }
      }
    }
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
      this.bgm = wx.createInnerAudioContext();
      this.bgm.src = 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/kaqituolitai.mp3';
      this.voice = wx.createInnerAudioContext({useWebAudioImplement: true});
      this.voice.src = 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/homo.m4a';
      this.voiceFrag = {
        preXinyi: [4, 2],
        preRoam: [6.5, 2],
        preHikari: [48, 3],
        jump: [53.5, 2]
      };
    },
    handleAssetsLoaded: function({detail}) {
      this.triggerEvent('assetsLoaded', detail.value);
    },
    handleRaf: function({detail}) {
      if (!this.init()) {
        return;
      }
      
      if (this.requireRun) {
        console.log('requireRun');
        this.requireRun = false;
        this.run();
      }

      this.triggerEvent('syncPositions', [
        this.getScreenPosition(this.hikari, '瞬光'),
        this.getScreenPosition(this.roam, 'roam'),
        this.getScreenPosition(this.xinyi, 'xinyi')
      ]);
    },
    getScreenPosition: function(char, name) {
      const clipPos = this.camera.convertWorldPositionToClip(char.worldPosition);
      const {frameWidth, frameHeight} = this.scene;
      return [((clipPos.x + 1) / 2) * frameWidth, (1 - (clipPos.y + 1) / 2) * frameHeight, name];
    },
    init: function() {
      if (!this.camera) {
        this.camera = this.scene.getElementById('camera').getComponent(wx.getXrFrameSystem().Camera);
        this.cameraCtrl = this.camera.el.getComponent('camera-orbit-control');
        this.cameraTarget = this.scene.getNodeById('camera-target');
      }

      return this.camera && this.hikari && this.roam && this.xinyi;
    },
    handleModelLoaded: function({detail}) {
      const {target} = detail.value;
      this[target.id] = target.getComponent(wx.getXrFrameSystem().Transform);
    },
    run: async function() {
      this.cameraCtrl.disable();

      await this.prepareRun(this.xinyi, this.voiceFrag.preXinyi);
      await this.prepareRun(this.roam, this.voiceFrag.preRoam);
      await this.prepareRun(this.hikari, this.voiceFrag.preHikari);

      this.runOne(this.hikari);
      this.runOne(this.roam);
      this.runOne(this.xinyi);

      this.cameraCtrl.enable();
    },
    prepareRun: async function(char, voiceFrag) {
      return new Promise(resolve => {
        this.voice.seek(voiceFrag[0]);
        this.voice.play();
        const trs = this.camera.el.getComponent(wx.getXrFrameSystem().Transform);
        trs.position.setValue(char.position.x, 0.8, 2);
        this.cameraTarget.position.setValue(char.position.x, 0.8, 0);
        const animator = char.el.getComponent(wx.getXrFrameSystem().Animator);

        setTimeout(() => {
          this.voice.stop();
          animator.stop();
          animator.pauseToFrame('Run', 0);
          setTimeout(() => resolve(), 300);
        }, voiceFrag[1] * 1000);
      });
    },
    prepareCamera: async function() {
      this.bgm.play();
      this.bgm.seek(43);
      const trs = this.camera.el.getComponent(wx.getXrFrameSystem().Transform);
      trs.position.setValue(0, 0.8, 3);
      this.cameraTarget.position.setValue(0, 0.8, 0);
    },
    runOne: function(char) {
      const animator = char.el.getComponent(wx.getXrFrameSystem().Animator);
      animator.resume();

      char.el.event.add('touch-shape', () => {
        animator.stop();
        animator.play('Jump', {loop: 1});
        animator.el.event.addOnce('anim-stop', () => animator.play('Run'));
      });
    }
  }
})