import outlineVert from './toon-shader/outlineVert';
import outlineFrag from './toon-shader/outlineFrag';
import toonVert from './toon-shader/toonVert';
import toonFrag from './toon-shader/toonFrag';
const xrFrameSystem = wx.getXrFrameSystem();

xrFrameSystem.registerEffect('toon-user', scene => scene.createEffect(
  {
    name: "toon",
    defaultRenderQueue: 2000,
    passes: [
        // Outline
        {
            renderStates: {
              cullOn: true,
              blendOn: false,
              depthWrite: true,
              cullFace: xrFrameSystem.ECullMode.FRONT,
            },
            lightMode: "ForwardBase",
            useMaterialRenderStates: false,
            shaders: [0, 1]
        },
        // ForwardBase
        {
            renderStates: {
              cullOn: false,
              blendOn: false,
              depthWrite: true,
              cullFace: xrFrameSystem.ECullMode.BACK,
            },
            lightMode: "ForwardBase",
            useMaterialRenderStates: true,
            shaders: [2, 3]
        }
    ],
    properties: [
        { key: 'u_baseColorFactor', type: xrFrameSystem.EUniformType.FLOAT4, default: [1, 1, 1, 1] },
        { key: 'u_outlineColor', type: xrFrameSystem.EUniformType.FLOAT4, default: [0.0, 0.0, 0.0, 0.0]},
        { key: 'u_outlineWidth', type: xrFrameSystem.EUniformType.FLOAT, default: [0.4]},
        { key: 'u_farthestDistance', type: xrFrameSystem.EUniformType.FLOAT, default: [80]},
        { key: 'u_nearestDistance', type: xrFrameSystem.EUniformType.FLOAT, default: [1.0]},
        { key: 'u_offsetZ', type: xrFrameSystem.EUniformType.FLOAT, default: [1.6]}

    ],
    images: [
        { key: 'u_baseColorMap', default: 'white', macro: 'WX_USE_BASECOLORMAP' },
        { key: 'u_gradientMap', default: 'white' }
    ],
    shaders: [
        // === Outline ===
        // Vertex Shader Outline
        outlineVert,
        // Fragment Shader Outline
        outlineFrag,
        // === Toon ===
        // Vertex Shader Toon
        toonVert,
        // Fragment Shader Toon
        toonFrag
    ]
}
));