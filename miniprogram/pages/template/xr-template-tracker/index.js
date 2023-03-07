var sceneReadyBehavior = require('../../behavior-scene/scene-ready');

Page({
  behaviors:[sceneReadyBehavior],
  data: {
    // 内置
    height: 600,
    heightScale: 0.85,
    showBackBtn: true,
    // 页面
    useScan: true,
    useVideo: false,
    useGLTF: false,
    markerList: [],
    debugMsg: 'Defalut Words',
    // 全局状态
    dataReady: false,
  },
  onLoad( ) {
    this.refreshData();
  },
  refreshData() {
    // 模拟用的数据集合，可以跟进需要切换为后端接口
    const mockDataList = [];

    // 识别框
    if (this.data.useScan) {
      mockDataList.push({
        name: 'QQ企鹅',
        markerImg: 'https://res.wx.qq.com/op_res/TsyodflJo3ArEej_XMmheOg6Z1QAXoTos-O22dBTqSjclfJ_RetCfM9W_XoLwOa5PGtct6RARwmSwE_CkjSGbQ',
        type: 'scan',
        src: '',
      });
      mockDataList.push({
        name: '气泡狗',
        markerImg: 'https://res.wx.qq.com/op_res/TsyodflJo3ArEej_XMmheK_pZTKhtOYoan4Ej7Yszi9R1VWjlr1TzQiKGROTjT1j-SR80ULDGIW6znxM5edIww',
        type: 'scan',
        src: '',
      });
    }

    // 视频
    if (this.data.useVideo) {
      mockDataList.push({
        name: 'OSD图片',
        markerImg: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/marker/osdmarker-test.jpg',
        type: 'video',
        src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/videos/paris.mp4',
      });
    }

    // glTF模型
    if (this.data.useGLTF) {
      mockDataList.push({
        name: '扫描画',
        markerImg: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/portalImage.jpg',
        type: 'gltf',
        src: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/fiesta_tea/scene.gltf',
      });
      mockDataList.push({
        name: '2DMarker',
        markerImg: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/marker/2dmarker-test.jpg',
        type: 'gltf',
        src: '/assets/gltf/Fox.glb',
      });
    }

    // 需要使用的marker
    const markerList = []

    let scanIndex = 0
    let videoIndex = 0
    let gltfIndex = 0


    for (let i = 0; i < mockDataList.length; i++) {
      const mockItem = mockDataList[i];
      switch (mockItem.type) {
        case 'scan': // scan
          const scanId = 'scan' + scanIndex
          markerList.push({
            id: scanId,
            name: mockItem.name,
            renderType: mockItem.type,
            markerImage: mockItem.markerImg,
            src: mockItem.src,
          });
          scanIndex++;
          break;
        case 'video': // video
          const videoId = 'video' + videoIndex
          markerList.push({
            id: videoId,
            name: mockItem.name,
            renderType: mockItem.type,
            markerImage: mockItem.markerImg,
            src: mockItem.src,
          });
          videoIndex++;
          break;
        case 'gltf': // gltf
          const gltfId = 'gltf' + gltfIndex
          markerList.push({
            id: gltfId,
            name: mockItem.name,
            renderType: mockItem.type,
            markerImage: mockItem.markerImg,
            src: mockItem.src,
          });
          gltfIndex++;
          break;
      }
    }

    console.log('markerList', markerList);

    this.setData({
      dataReady: true,
      markerList: markerList
    });

    this.setData({
      debugMsg: 'markerList:' + markerList.length
    })
  },
  tapScan() {
    this.setData({
      dataReady: false,
      useScan: !this.data.useScan
    });

    this.refreshData();
  },
  tapGLTF() {
    this.setData({
      dataReady: false,
      useGLTF: !this.data.useGLTF
    });

    this.refreshData();
  },
  tapVideo() {
    this.setData({
      dataReady: false,
      useVideo: !this.data.useVideo
    });

    this.refreshData();
  },
  handleTrackerChange(cur) {
    const item = cur.detail;
    this.setData({
      debugMsg: 'handleTrackerChange:' + item.name
    })
  }
});
