Component({
  properties: {},
  data: {
    stars: []
  },
  lifetimes: {},
  methods: {
    handleReady: function({detail}) {
      const scene = detail.value;
      const stars = new Array(44).fill(0).map(() => {
        return {
          pos: [
            (Math.random() * 2 - 1) * 4,
            (Math.random() * 2 - 1) * 4,
            (Math.random() * 2 - 1) * 4,
          ].join(' '),
          color: [
            Math.random(),
            Math.random(),
            Math.random(),
            1
          ].join(' ')
        };
      });
      console.log(stars)

      this.setData({stars});
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