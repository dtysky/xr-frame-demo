Component({
  properties: {
    loaded: false
  },
  lifetimes: {
    attached() {
      console.log('data.a', this.data.a) // expected 123
      this.createSelectorQuery()
        .select('#xr-scene')
        .fields({context: true})
        .exec(res => {
          const xrScene = res[0].context;
          console.log('xr-scene', xrScene);
        });
    }
  },
  methods: {
    handleAssetsProgress: function({detail}) {
      this.triggerEvent('assetsProgress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      this.triggerEvent('assetsLoaded', detail.value);
    },
    handleRaf: function({detail}) {
      console.log('raf', detail.value);
    }
  }
})