var sceneReadyBehavior = require('../behavior-scene/scene-ready');
var handleDecodedXML = require('../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;
Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    loaded: false,
    run: false,
    positions: [[0, 0], [0, 0], [0, 0]]
  },
  handleLoaded: function({detail}) {
    console.log('assets loaded', detail);

    this.setData({loaded: true});
  },
  handleSyncPositions: function({detail}) {
    const info = detail.value;
    this.setData({positions: info});
  },
  handleRun: function() {
    if (this.data.loaded && !this.data.run) {
      this.setData({run: true});
    }
  }
});

