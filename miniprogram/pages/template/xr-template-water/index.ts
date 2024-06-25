var sceneReadyBehavior = require('../../behavior-scene/scene-ready');

import '../../../xr-custom/assets/water-shader/customWater';

Page({
  behaviors:[sceneReadyBehavior],
  data: {
    dpiScale: 1
  }
});
