Component({
  behaviors: [require('../../common/share-behavior').default],
  properties: {
    markerListRaw: {
      type: Array,
      value: []
    },
  },
  
  data: {
    loaded: true,
    arReady: false,
  },
  observers: {
    markerListRaw(newVal) {
      this.setData({
        markerList: newVal,
      })

      console.log(this.data.markerList)
    },
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
    },
    handleARReady: function() {
      console.log('arReady')
      this.setData({ arReady: true })
    },
    handleTrackerSwitch({ detail }) {
      console.log('tracked match')

      if (this.data.loaded) {
        const element = detail.el;
        const active = detail.value

        const data = this.data
        const markerList = data.markerList
        for (let i = 0; i < markerList.length; i++) {
          const markerInfo = markerList[i]
          const markerTracker = this.scene.getElementById(`marker-${markerInfo.id}`)
          if (element === markerTracker) {
            // 匹配 tracker
            const renderType = markerInfo.renderType
            const xrFrameSystem = wx.getXrFrameSystem()
            const camera = this.scene.getElementById('camera').getComponent(xrFrameSystem.Camera);
            const trackerTRS = markerTracker.getComponent(xrFrameSystem.Transform)

            switch (renderType) {
              case 'scan': // scan
                break;
              case 'video': // video
                break;
              case 'gltf': // gltf
                break;
            }

            this.triggerEvent('trackerchange', {
              name: markerInfo.name,
              active: active,
              type: renderType,
            })
          }
        }
      }
    },
  }
})