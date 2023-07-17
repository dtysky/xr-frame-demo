const xrFrameSystem = wx.getXrFrameSystem();

xrFrameSystem.registerGeometry('man', scene => {
  const vl = scene.createVertexLayout({
    attributes: [
      {
        name: "a_position",
        format: xrFrameSystem.EVertexFormat.FLOAT3,
        offset: 0,
        usage: xrFrameSystem.EVertexLayoutUsage.POSITION
      },
      {
        name: "a_texCoord",
        format: xrFrameSystem.EVertexFormat.FLOAT2,
        offset: 12,
        usage: xrFrameSystem.EVertexLayoutUsage.UV0
      }
    ],
    stride: 20
  });

  // VertexBuffer IndexBuffer 不能动态更改长度，需要一开始设定较大的长度。
  const vb = new Float32Array(new Array(77030));
  const ib = new Uint16Array(new Array(88266));

  const geo = scene.createGeometry(vl, vb, ib);

  geo.setBoundBall(new xrFrameSystem.Vector3(), 1);
  geo.addSubMesh(ib.length, 0, 0);

  return geo;
});
