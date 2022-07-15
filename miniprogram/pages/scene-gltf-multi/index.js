var sceneReadyBehavior = require('../behavior-scene/scene-ready');
var handleDecodedXML = require('../behavior-scene/util').handleDecodedXML;
var xmlCode = `&lt;xr-scene id=&quot;xr-scene&quot;&gt;
&lt;xr-assets bind:progress=&quot;handleAssetsProgress&quot; bind:loaded=&quot;handleAssetsLoaded&quot;&gt;
  &lt;xr-asset-load type=&quot;env-data&quot; asset-id=&quot;env1&quot; src=&quot;https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/env-footprint/data.json&quot; /&gt;
  &lt;xr-asset-load type=&quot;gltf&quot; asset-id=&quot;gltf-table_sofa&quot; src=&quot;https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/table_sofa/scene.gltf&quot; /&gt;
  &lt;xr-asset-load type=&quot;gltf&quot; asset-id=&quot;gltf-breakfast_special&quot; src=&quot;https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/breakfast_special/scene.gltf&quot; /&gt;
  &lt;xr-asset-load type=&quot;gltf&quot; asset-id=&quot;gltf-salmon_with_whisky_sauce&quot; src=&quot;https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/salmon_with_whisky_sauce/scene.gltf&quot; /&gt;
  &lt;xr-asset-material asset-id=&quot;standard-mat&quot; effect=&quot;standard&quot; /&gt;
&lt;/xr-assets&gt;
&lt;xr-env env-data=&quot;env1&quot; /&gt;
&lt;xr-node&gt;
  &lt;xr-node node-id=&quot;camera-target&quot; position=&quot;0 0 0&quot;&gt;&lt;/xr-node&gt;
  &lt;xr-gltf node-id=&quot;gltf-table_sofa&quot; position=&quot;0 -0.5 0&quot; rotation=&quot;0 0 0&quot; scale=&quot;0.02 0.02 0.02&quot; model=&quot;gltf-table_sofa&quot;&gt;&lt;/xr-gltf&gt;
  &lt;xr-gltf node-id=&quot;gltf-salmon_with_whisky_sauce&quot; position=&quot;3.3 1.35 0&quot; scale=&quot;1.6 1.6 1.6&quot; model=&quot;gltf-salmon_with_whisky_sauce&quot;&gt;&lt;/xr-gltf&gt;
  &lt;xr-gltf node-id=&quot;gltf-breakfast_special&quot; position=&quot;-3.3 1.35 0&quot; rotation=&quot;0 90 0&quot; scale=&quot;3.4 3.4 3.4&quot; model=&quot;gltf-breakfast_special&quot;&gt;&lt;/xr-gltf&gt;
  &lt;xr-camera
    id=&quot;camera&quot; node-id=&quot;camera&quot; position=&quot;-5 2.6 0.4&quot; clear-color=&quot;0.9 0.9 0.9 1&quot;
    target=&quot;camera-target&quot; background=&quot;skybox&quot;
    camera-orbit-control=&quot;&quot;
  &gt;&lt;/xr-camera&gt;
&lt;/xr-node&gt;
&lt;xr-node node-id=&quot;lights&quot;&gt;
  &lt;xr-light type=&quot;ambient&quot; color=&quot;1 1 1&quot; intensity=&quot;0.5&quot; /&gt;
  &lt;xr-light type=&quot;directional&quot; rotation=&quot;180 0 0&quot; color=&quot;1 1 1&quot; intensity=&quot;2&quot; /&gt;
&lt;/xr-node&gt;
&lt;/xr-scene&gt;
`;
Page({
  behaviors:[sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
  }
});

