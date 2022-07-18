Component({
  properties: {
    a: Number,
  },
  data: {
    loaded: false
  },
  lifetimes: {

  },
  methods: {
    handleReady: function({detail}) {
      const scene = detail.value;
    },
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
    }
  }
})