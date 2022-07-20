Component({
  properties: {
    envIndex: {
      type: Number,
      value: 0
    }
  },
  data: {
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
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
    }
  }
})