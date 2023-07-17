var sceneReadyBehavior = require('../../behavior-scene/scene-ready');

// 加载Geometry
import './geometry-man';

Page({
  behaviors:[sceneReadyBehavior],
  data: {
    dpiScale: 1
  }
});
