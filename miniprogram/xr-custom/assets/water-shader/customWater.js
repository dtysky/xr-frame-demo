import shaderFrag from "./shaderFrag";
import shaderVert from "./shaderVert";

const xrFrameSystem = wx.getXrFrameSystem()

xrFrameSystem.registerEffect('custom-water', scene => scene.createEffect({
  name: "custom-water",
  defaultRenderQueue: 2000,
  passes: [{
    "renderStates": {
      blendOn: false,
      depthWrite: true,
      cullOn: true,
      cullFace: xrFrameSystem.ECullMode.FRONT,
    },
    lightMode: "ForwardBase",
    useMaterialRenderStates: true,
    shaders: [0, 1]
  }],
    properties: [
        { key: 'u_waterColor', type: xrFrameSystem.EUniformType.FLOAT3, default: [0.6, 0.8, 0.9] },
      ],
      images: [
        { key: 'u_normalTexture', default: 'white', macro: 'WX_USE_NORMALMAP' },
      ],
  shaders: [ shaderVert, shaderFrag ],
}));
