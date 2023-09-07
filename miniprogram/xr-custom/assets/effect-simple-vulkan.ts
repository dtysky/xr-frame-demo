import XrFrame from 'XrFrame';
const xrFrameSystem = wx.getXrFrameSystem();

xrFrameSystem.registerEffect('simple-vulkan', scene => scene.createEffect({
  name: 'simple-vulkan',
  properties: [
    {key: 'u_baseColorFactor', type: xrFrameSystem.EUniformType.FLOAT4, default: [1, 0, 0, 1]},
  ],
  images: [
    {key: 'u_baseColorMap', default: 'white', macro: 'WX_USE_BASECOLORMAP'},
  ],
  defaultRenderQueue: 2000,
  passes: [{
    renderStates: {},
    lightMode: 'ForwardBase',
    useMaterialRenderStates: true,
    shaders: [0, 1]
  }],
  shaders: [`
struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
#ifdef WX_USE_BASECOLORMAP
  @location(0) uv: vec2<f32>,
#endif
}

@vertex
fn main(attrs: VertexInput) -> VertexOutput {
  var output: VertexOutput;

  output.Position = ubGlobal.u_vp * ubMesh.u_world * vec4<f32>(attrs.a_position, 1.);
#if defined(WX_USE_BASECOLORMAP) && defined(WX_ATTR_USE_TEXCOORD)
  output.uv = attrs.a_texCoord;
#endif

  return output;
}
  `,
    `
struct VertexOutput {
  @builtin(position) Position: vec4<f32>,
#ifdef WX_USE_BASECOLORMAP
  @location(0) uv: vec2<f32>,
#endif
}

@fragment
fn main(vo: VertexOutput) -> @location(0) vec4<f32> {
  var color: vec4<f32> = ubMaterial.u_baseColorFactor;

  #if defined(WX_USE_BASECOLORMAP)
    color = textureSample(u_baseColorMap, u_baseColorMap_Sampler, vo.uv);
  #endif

  return color;
}
    `],
}));