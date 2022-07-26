Component({
  properties: {
    loaded: false,
    run: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          
        }
      }
    }
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
      this.positions = [];
    },
    handleAssetsLoaded: function({detail}) {
      this.triggerEvent('assetsLoaded', detail.value);
    },
    handleRaf: function({detail}) {
      if (!this.init()) {
        return;
      }
      

    },
    init: function() {
      if (!this.camera) {
        this.camera = this.scene.getElementById('camera');
        this.cameraCtrl = this.camera.getComponent('camera-orbit-control');
      }

      if (!this.hikari) {
        this.hikari = this.scene.getNodeById('hikari');
      }

      if (!this.roam) {
        this.roam = this.scene.getNodeById('roam');
      }

      if (!this.xinyi) {
        this.xinyi = this.scene.getNodeById('xinyi');
      }

      return this.hikari && this.roam && this.xinyi;
    },
    run: function() {

    }
  }
})