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
    handleTouchStart: function({detail}) {
      const info = detail.value;
      console.log('touch start', info)
    },
    handleTouchEnd: function({detail}) {
      const info = detail.value;
      console.log('touch end', info)
    },
    handleDrag: function({detail}) {
      const info = detail.value;
      console.log('drag', info)
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