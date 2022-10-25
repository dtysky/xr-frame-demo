var sceneReadyBehavior = require('../behavior-scene/scene-ready');
var handleDecodedXML = require('../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;
Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '',
    type: 0,
    
    blurRadius: 0,
    bloomRadius: 0,
    bloomIntensity: 2,
    bloomThreshold: 0.5,
    fxaaEnabled: false
  },
  changeType(e) {
    const type = e.detail.value;
    if (type === "blur") {
      this.setData({
        type: 0
      });
    } else if (type === "bloom") {
      this.setData({
        type: 1
      });
    } else if (type === "fxaa") {
      this.setData({
        type: 2
      });
    }
  },
  changeBlurRadius(e) {
    this.setData({
      blurRadius: e.detail.value
    });
  },
  changeBloomRadius(e) {
    this.setData({
      bloomRadius: e.detail.value
    });
  },
  changeBloomIntensity(e) {
    this.setData({
      bloomIntensity: e.detail.value
    });
  },
  changeBloomThreshold(e) {
    this.setData({
      bloomThreshold: e.detail.value
    });
  },
  switchFXAA(e) {
    this.setData({
      fxaaEnabled: !this.data.fxaaEnabled
    });
  }
});

