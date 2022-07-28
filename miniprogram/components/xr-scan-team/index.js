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

      await this.prepareRun(this.xinyi);
      await this.prepareRun(this.roam);
      await this.prepareRun(this.hikari);

      const trs = this.camera.el.getComponent(wx.getXrFrameSystem().Transform);
      trs.position.setValue(0, 0.8, 3);
      this.cameraTarget.position.setValue(0, 0.8, 0);
      this.runOne(this.hikari);
      this.runOne(this.roam);
      this.runOne(this.xinyi);

      this.cameraCtrl.enable();
    },
    prepareRun: async function(char) {
      return new Promise(resolve => {
        const trs = this.camera.el.getComponent(wx.getXrFrameSystem().Transform);
        trs.position.setValue(char.position.x, 0.8, 2);
        this.cameraTarget.position.setValue(char.position.x, 0.8, 0);
        const animator = char.el.getComponent(wx.getXrFrameSystem().Animator);

        setTimeout(() => {
          animator.stop();
          animator.pauseToFrame('Run', 0);
          setTimeout(() => resolve(), 300);
        }, 1000);
      });
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