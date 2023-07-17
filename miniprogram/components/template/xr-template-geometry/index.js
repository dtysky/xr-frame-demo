
import positionData from "./man-data/vertexData";
import uvData from "./man-data/uvData";

import iData from "./man-data/indexData";

function batchVertexBuffer(positionData, uvDataArray) {
  const array = [];
  const vertexCount = positionData.length / 3;
  for (let i = 0; i < vertexCount; i++) {
    const vertexIndex = i * 3;
    const uvIndex = i * 2;
    const x = positionData[vertexIndex];
    const y = positionData[vertexIndex + 1];
    const z = positionData[vertexIndex + 2];
    const u = uvDataArray[uvIndex];
    const v = uvDataArray[uvIndex + 1];
    array.push(x, y, z, u, v);
  }
  const vb = new Float32Array(array)
  return vb;
}


Component({
  behaviors: [require('../../common/share-behavior').default],
  properties: {
    a: Number,
  },
  data: {
    loaded: false
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
      const xrFrameSystem  = wx.getXrFrameSystem()

      this.geometryRoot = this.scene.getElementById('geometryRoot');

      // 注册人物 Geometry信息
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
        const vb = new Float32Array(new Array(77030)); // 人物 vertex 长度 77030
        const ib = new Uint16Array(new Array(88266)); // 人物 index 88266 88266
      
        const geo = scene.createGeometry(vl, vb, ib);
      
        geo.setBoundBall(new xrFrameSystem.Vector3(), 1);
        geo.addSubMesh(ib.length, 0, 0);
      
        return geo;
      });

      this.manElem = xrScene.createElement(xrFrameSystem.XRMesh, {
        geometry: "man",
        material: 'simple-mat',
        position: "0 -1 0"
      });
      this.geometryRoot.addChild(this.manElem);

      // 延时保证挂载与初始化完毕
      setTimeout(()=>{
        this.meshMan = this.manElem.getComponent(xrFrameSystem.Mesh);
        this.geometryMan = this.meshMan.geometry;

        xrScene.event.add('tick', this.handleTick.bind(this));
      },100);

    },
    
    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
    },
    handleTick(delta) {

      // console.log('this.geometryMan.vertexBuffer',this.geometryMan.vertexBuffer);
      // console.log('this.geometryMan.indexBuffer',this.geometryMan.indexBuffer);

      const xrFrameSystem  = wx.getXrFrameSystem()
      const scene = this.scene;
      
      // const vl = scene.createVertexLayout({
      //   attributes: [
      //     {
      //       name: "a_position",
      //       format: xrFrameSystem.EVertexFormat.FLOAT3,
      //       offset: 0,
      //       usage: xrFrameSystem.EVertexLayoutUsage.POSITION
      //     },
      //     {
      //       name: "a_texCoord",
      //       format: xrFrameSystem.EVertexFormat.FLOAT2,
      //       offset: 12,
      //       usage: xrFrameSystem.EVertexLayoutUsage.UV0
      //     }
      //   ],
      //   stride: 20
      // });
      
      const vb = batchVertexBuffer(positionData, uvData);
      const ib = iData;
    
      // const geo = scene.createGeometry(vl, vb, ib);
    
      // geo.setBoundBall(new xrFrameSystem.Vector3(), 1);
      // geo.addSubMesh(ib.length, 0, 0);

      // this.meshMan.setData({
      //   'geometry': geo
      // });

      this.geometryMan.uploadVertexBuffer(0, vb);
      this.geometryMan.uploadIndexBuffer(0, new Uint16Array(ib));
    },

  }
})