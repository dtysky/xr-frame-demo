let camera;
let player;
let xrFrameSystem;
// 位移速度
let speed = 5;
// 视角旋转的速度
let smoothSpeed = 8;

// 世界坐标系下的标准方位
let up;
let left;

let renderWidth = 0;
let renderHeight = 0;

// player相关
let position;
let quaternionP; //player的四元数
let quaternionPIni; //player每次转动开始时的角度
let quaternionPRes; //player每次需要转动到的角度

// camera相关
let quaternionC; //camera的四元数
let quaternionCIni;  //camera每次转动开始时的角度
let quaternionCRes;  //camera每次需要转动到的角度

// 初始化是否完成的标记
let initFinish = false;

Component({
  behaviors: [require('../../common/share-behavior').default],
  properties: {
    touchX: Number,
    touchY: Number,
    radius: Number,
    rotateX: Number,
    rotateY: Number,
    initX: Number,
    initY: Number,
    reset: {
      type: Number,
      observer(newVal) {
        position.set(xrFrameSystem.Vector3.createFromNumber(0, 1.6, 1));
        quaternionC.setFromYawRollPitch(0, 0, 0);
        quaternionP.setFromYawRollPitch(Math.PI, 0, 0);
      }
    }
  },
  data: {
    loaded: false
  },
  lifetimes: {},
  methods: {
    handleReady({
      detail
    }) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
      xrFrameSystem = wx.getXrFrameSystem();
      camera = xrScene.getElementById("camera");
      player = xrScene.getElementById("player");
      xrScene.event.add('touchmove', this.handleTouchMove);
      xrScene.event.add('touchend', this.handleTouchEnd);

      up = xrFrameSystem.Vector3.createFromNumber(0, 1, 0);
      left = xrFrameSystem.Vector3.createFromNumber(1, 0, 0);

      const info = wx.getSystemInfoSync();
      const width = info.windowWidth;
      const windowHeight = info.windowHeight;
      const height = windowHeight * 0.75;
      const dpi = info.pixelRatio;
      renderWidth = width * dpi;
      renderHeight = height * dpi;

      quaternionC = camera._components.transform.quaternion;
      quaternionP = player._components.transform.quaternion;
      position = player._components.transform.position;

      quaternionPIni = new xrFrameSystem.Quaternion();
      quaternionPIni.set(quaternionP);
      quaternionPRes = new xrFrameSystem.Quaternion();
      quaternionPRes.set(quaternionP);

      quaternionCIni = new xrFrameSystem.Quaternion();
      quaternionCIni.set(quaternionC);
      quaternionCRes = new xrFrameSystem.Quaternion();
      quaternionCRes.set(quaternionC);

      initFinish = true;

    },
    handleAssetsProgress: function ({
      detail
    }) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({
      detail
    }) {
      console.log('assets loaded', detail.value);
      this.setData({
        loaded: true
      });
    },
    handleTick: function (dt) {

      //确保handleReady时期的初始化完成
      if (!initFinish)
        return;

      var deltaTime = dt.detail.value / 1000;

      //------摄像头旋转逻辑------//
      let rotX = (this.data.rotateX - this.data.initX) / renderWidth * Math.PI;
      let rotY = (this.data.rotateY - this.data.initY) / renderHeight * Math.PI;

      //水平方向旋转player node
      if (this.data.rotateX == 0) {
        quaternionPIni.set(quaternionP);
        quaternionPRes.set(quaternionP);
      } else {
        quaternionPIni.multiply(xrFrameSystem.Quaternion.createFromAxisAngle(up, -rotX), quaternionPRes);
      }

      //垂直方向旋转camera node
      if (this.data.rotateY == 0) {
        quaternionCIni.set(quaternionC);
        quaternionCRes.set(quaternionC);
      } else {
        quaternionCIni.multiply(xrFrameSystem.Quaternion.createFromAxisAngle(left, rotY), quaternionCRes);
      }

      quaternionP.slerp(quaternionPRes, smoothSpeed * deltaTime, quaternionP);
      quaternionC.slerp(quaternionCRes, smoothSpeed * deltaTime, quaternionC);

       //------摄像头位移逻辑------//
      var x = this.data.touchX;
      var y = this.data.touchY;

      if (x || y) {
        var z = Math.sqrt(x * x + y * y);
        var ratio = z / this.data.radius;
        ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;
        var temp = xrFrameSystem.Vector3.createFromNumber(-x / z, 0, -y / z);
        temp = temp.scale(ratio * speed * deltaTime);
        //位移需要根据旋转角度做转化
        temp.applyQuaternion(quaternionP);
        position.set(position.add(temp));
      }
    },
  }
})