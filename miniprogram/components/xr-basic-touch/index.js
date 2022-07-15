Component({
  properties: {
    a: Number,
  },
  data: {
    loaded: false,
    scene: null,
    touchingMoon: false,
    θ: Math.PI,
    r: 10,
    ω: 5e-4,
    outerRing: 20,
    innerRing: 10
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
    },
    handleReady: function({detail}) {
        this.setData({
            scene: detail.value
        });
    },
    handleEarthRotation: function({detail}) {
        const { target, deltaX } = detail.value;
        target._components.transform.rotation.y += deltaX / 100;
    },
    handleDragMoon: function({detail}) {
        const { dir, target, camera } = detail.value;
        const cameraPos = camera.el._components.transform.worldPosition;
        const k = -cameraPos.y / dir[1];
        const x = cameraPos.x + k * dir[0];
        const z = cameraPos.z + k * dir[2];
        const len = Math.sqrt(x * x + z * z);
        if (len > this.data.innerRing) {
            const transform = target._components.transform;
            const scale = len > this.data.outerRing ? this.data.outerRing / len : 1.0;
            transform.position.x = x * scale;
            transform.position.z = z * scale;
        }
    },
    handleTouchMoon: function() {
        this.setData({touchingMoon: true});
    },
    handleUntouchMoon: function() {
        const moon = this.data.scene.getNodeById("mesh-moon");
        const transform = moon.el._components.transform;
        const x = transform.position.x;
        const z = transform.position.z;
        const len = Math.sqrt(x * x + z * z);
        this.setData({
            r: len,
            θ: x < 0 ? Math.atan(z / x) + Math.PI : Math.atan(z / x),
            ω: Math.sqrt(2.5e-4 / (len * len * len))
        });
        this.setData({touchingMoon: false});
    },
    handleTick: function({detail}) {
        if (this.data.touchingMoon || !this.data.scene) return;
        const deltaTime = detail.value;
        const moon = this.data.scene.getNodeById("mesh-moon");
        const transform = moon.el._components.transform;
        const x = Math.cos(this.data.θ) * this.data.r;
        const z = Math.sin(this.data.θ) * this.data.r;
        transform.position.x = x;
        transform.position.z = z;
        transform.rotation.y -= this.data.ω * deltaTime;
        this.setData({
            θ: this.data.θ + this.data.ω * deltaTime
        });
    }
  }
})