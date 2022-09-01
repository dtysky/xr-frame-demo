var sceneReadyBehavior = require('../behavior-scene/scene-ready');
var handleDecodedXML = require('../behavior-scene/util').handleDecodedXML;
var xmlCode = ``;
Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    markerImg: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/marker/2dmarker-test.jpg'
  }
});

