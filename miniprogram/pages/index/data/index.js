const base = {
  name: '基础案例',
  icon: 'app',
  childArr: [
    // {
    //   name: 'test',
    //   label: '测试',
    //   path: '/pages/scene-test/index',
    // },
    {
      name: 'Geometry',
      label: '基础图形',
      path: '/pages/scene-basic/index',
    },
    {
      name: 'Light',
      label: '多光源',
      path: '/pages/scene-basic-light/index',
    },
    {
      name: 'Animation',
      label: '动画',
      path: '/pages/scene-basic-animation/index',
    },
    {
      name: 'Interaction',
      label: '交互',
      path: '/pages/scene-basic-touch/index',
    },
    {
      name: 'Shadow',
      label: '动态节点',
      path: '/pages/scene-basic-shadow/index',
    },
    // {
    //   name: 'Physic',
    //   label: '物理',
    //   path: '/pages/scene-basic-physic/index',
    // },
  ],
};
const gltf = {
  name: 'glTF案例',
  icon: 'image',
  childArr: [{
      name: 'Standard',
      label: '标准金属头盔',
      path: '/pages/scene-gltf-damageHelmet/index',
    },
    {
      name: 'Multi',
      label: '普通、三维重建模型',
      path: '/pages/scene-gltf-multi/index',
    },
    {
      name: 'Unlit',
      label: '无光照材质卡通模型',
      path: '/pages/scene-gltf-unlit/index',
    },
    {
      name: 'Light-Loading',
      label: '加载界面，多光源光照场景',
      path: '/pages/scene-gltf-light-loading/index',
    },
  ],
};

const ar = {
  name: 'AR案例',
  icon: 'scan',
  childArr: [{
      name: 'Camera',
      label: 'AR 相机渲染',
      path: '/pages/scene-ar-camera/index',
    },
    {
      name: 'Basic',
      label: 'AR 平面识别',
      path: '/pages/scene-ar-basic/index',
    },
    {
      name: 'Marker-1',
      label: 'AR 2DMarker',
      path: '/pages/scene-ar-2dmarker/index',
    },
    {
      name: 'Marker-2',
      label: 'AR OSDMarker',
      path: '/pages/scene-ar-osdmarker/index',
    },
    // {
    //     name: 'Scene',
    //     label: '多个Scene',
    //     path: '/pages/scene7/index',
    // },
  ],
};

const custom = {
  name: '高级定制',
  icon: 'scan',
  childArr: [
    {
      name: 'Logic',
      label: '定制组件和元素',
      path: '/pages/scene-custom-logic/index',
    }
  ]
};

export default [base, gltf, ar, custom];