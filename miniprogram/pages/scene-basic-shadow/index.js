var sceneReadyBehavior = require('../behavior-scene/scene-ready');
var handleDecodedXML = require('../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;
Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    meshCount: 0
  },
  handleIncMeshCount: function() {
    if (this.data.meshCount > 16) {
      return;
    }

    this.setData({meshCount: this.data.meshCount + 1});
  },
  handleDecMeshCount: function() {
    if (this.data.meshCount <= 0) {
      return;
    }

    this.setData({meshCount: this.data.meshCount - 1});
  }
});

