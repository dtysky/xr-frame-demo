export default Behavior({
  created: function () {
    this.checkInitShare();
  },
  methods: {
    checkInitShare() {
      if (!this.scene) {
        setTimeout(() => {
          this.checkInitShare()
        }, 200);
        return;
      }

      if (!this.scene.share.supported) {
        console.warn('Not support xr-frame share system now!');
        return;
      }

      this.sharing = false;
      this.scene.event.add('touchstart', (target) => {
        if (this.sharing || !target.changedTouches) {
          return;
        }

        const touch = target.changedTouches[0];
        if (!touch) {
          return;
        }

        if (touch.x / this.scene.frameWidth > 0.8 && touch.y / this.scene.frameHeight > 0.8) {
          this.sharing = true;
          this.scene.share.captureToFriends().then(() => {
            this.sharing = false;
          });
        }
      });
    }
  }
})