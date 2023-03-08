var sceneReadyBehavior = require('../../behavior-scene/scene-ready');
var handleDecodedXML = require('../../behavior-scene/util').handleDecodedXML;

var xmlCode = `&lt;xr-scene id=&quot;xr-scene&quot;&gt;
&lt;xr-assets bind:progress=&quot;handleAssetsProgress&quot; bind:loaded=&quot;handleAssetsLoaded&quot;&gt;
  &lt;xr-asset-material asset-id=&quot;standard-mat&quot; effect=&quot;standard&quot; /&gt;
&lt;/xr-assets&gt;
&lt;xr-node&gt;
  &lt;xr-mesh node-id=&quot;mesh-plane&quot; position=&quot;0 -0.05 -4&quot; rotation=&quot;0 0 0&quot; scale=&quot;5 1 5&quot; geometry=&quot;plane&quot; material=&quot;standard-mat&quot; uniforms=&quot;u_baseColorFactor:0.48 0.78 0.64 1&quot;&gt;&lt;/xr-mesh&gt;
  &lt;xr-mesh node-id=&quot;mesh-cube&quot; position=&quot;-1 0.5 -3.5&quot; scale=&quot;1 1 1&quot; rotation=&quot;0 45 0&quot; geometry=&quot;cube&quot; material=&quot;standard-mat&quot; uniforms=&quot;u_baseColorFactor:0.298 0.764 0.85 1&quot;&gt;&lt;/xr-mesh&gt;
  &lt;xr-mesh node-id=&quot;mesh-sphere&quot; position=&quot;0 1.25 -5&quot; scale=&quot;1.25 1.25 1.25&quot; geometry=&quot;sphere&quot; material=&quot;standard-mat&quot; uniforms=&quot;u_baseColorFactor:0.937 0.176 0.368 1&quot;&gt;&lt;/xr-mesh&gt;
  &lt;xr-mesh node-id=&quot;mesh-cylinder&quot; position=&quot;1 0.7 -3.5&quot; scale=&quot;1 0.7 1&quot; geometry=&quot;cylinder&quot; material=&quot;standard-mat&quot; uniforms=&quot;u_baseColorFactor:1 0.776 0.364 1&quot;&gt;&lt;/xr-mesh&gt;
  &lt;xr-camera
    id=&quot;camera&quot; node-id=&quot;camera&quot; position=&quot;0 1.6 0&quot; clear-color=&quot;0.925 0.925 0.925 1&quot;
    target=&quot;mesh-sphere&quot;
    camera-orbit-control=&quot;&quot;
  &gt;&lt;/xr-camera&gt;
&lt;/xr-node&gt;
&lt;xr-node node-id=&quot;lights&quot;&gt;
  &lt;xr-light type=&quot;ambient&quot; color=&quot;1 1 1&quot; intensity=&quot;1&quot; /&gt;
  &lt;xr-light type=&quot;directional&quot; rotation=&quot;40 170 0&quot; color=&quot;1 1 1&quot; intensity=&quot;3&quot; /&gt;
&lt;/xr-node&gt;
&lt;/xr-scene&gt;`;

// 当前触摸点位置
let currentTouchX = 0;
let currentTouchY = 0;

// 触摸点序号
let rotateIdx = -1;
let moveIdx = -1;

//摇杆所处中心
let centerX = 50;
let centerY = 50;
//摇杆宽高
let hWidth = 40;
let hHeight = 40;
//摇杆盘半径
let radius = 50;

Page({
  behaviors: [sceneReadyBehavior],
  data: {
    xmlCode: '<div class="codeWrap">' + handleDecodedXML(xmlCode) + '</div>',
    //重置初始位置的标记
    reset: 0,
    //相对背景偏移，命名 h=handle 摇杆
    hTop: 30,
    hLeft: 30,
    transferData:{
      //相对摇杆中心的偏移
      biasX: 0,
      biasY: 0,

      //开始旋转时的基准点
      initRotX: 0,
      initRotY: 0,
      //旋转时的触摸点位置
      biasRotX: 0,
      biasRotY: 0,
    }
  },
  reset: function () {
    this.setData({
      transferData:{
        reset: this.data.reset + 1
      }
    })
  },
  debugShow: function (functionName, moveIdx, rotateIdx) {
    // console.log(functionName+","+moveIdx+","+rotateIdx);
  },
  touchStart(e) {},
  touchMove: function (e) {
     //无旋转触摸点触屏时，保证移动触摸点为第一触摸点
    if (rotateIdx == -1) {
      moveIdx = 0;
    } else {
      //当两点触屏时，保证移动触摸点与旋转触摸点对应的点序列互斥
      moveIdx = ~rotateIdx & 0x01;
    }
    this.debugShow("touchMove", moveIdx, rotateIdx);
    var touchX = e.touches[moveIdx].clientX - 30;
    var touchY = e.touches[moveIdx].clientY - (this.data.height - 100);
    var posInfo = this.limitPosition(touchX, touchY);
    this.setData({
      hLeft: centerX - hWidth / 2 + posInfo.posX,
      hTop: centerY -  hHeight / 2 + posInfo.posY,
      transferData:{
        biasX: posInfo.posX,
        biasY: posInfo.posY,
      }
    })
  },
  touchEnd: function (e) {
    moveIdx = -1;
    //当位移触摸点松开时，保证旋转触摸点取的为第一接触点
    if (rotateIdx == 1)
      rotateIdx = 0;
    this.setData({
      hLeft: centerX - hWidth / 2,
      hTop: centerY - hHeight / 2,
      transferData:{
        biasX: 0,
        biasY: 0,
      }
    });
  },

  touchRotateStart: function (e) {
    if (moveIdx == -1) {
      rotateIdx = 0;
    } else {
      rotateIdx = ~moveIdx & 0x01;
    }
    this.debugShow("touchRotateStart", moveIdx, rotateIdx);
    currentTouchX = e.touches[rotateIdx].clientX;
    currentTouchY = e.touches[rotateIdx].clientY;
    this.setData({
      transferData:{
        initRotX: currentTouchX,
        initRotY: currentTouchY,
      }
    })
  },

  touchRotateMove: function (e) {
    if (moveIdx == -1) {
      rotateIdx = 0;
    } else {
      rotateIdx = ~moveIdx & 0x01;
    }
    this.debugShow("touchRotateMove", moveIdx, rotateIdx);
    currentTouchX = e.touches[rotateIdx].clientX;
    currentTouchY = e.touches[rotateIdx].clientY;
    this.setData({
      transferData:{
        biasRotX: currentTouchX,
        biasRotY: currentTouchY,
      }
    })
  },

  touchRotateEnd: function (e) {
    rotateIdx = -1;
    //当旋转触摸点松开时，保证位移触摸点取的为第一接触点
    if (moveIdx == 1)
      moveIdx = 0;
    this.setData({
      transferData:{
        biasRotX: 0,
        biasRotY: 0,
      }
    })
  },

  // 将位移强度限制在摇杆盘的范围中
  limitPosition: function (touchX, touchY) {
    var x = touchX - centerX;
    var y = touchY - centerY;
    var z = Math.sqrt(x * x + y * y);
    // 位移未超出摇杆盘范围时
    if (z <= radius) {
      x = Math.round(x);
      y = Math.round(y);
      return {
        posX: x,
        posY: y
      };
    } else {
      // 位移超出摇杆盘范围，需要对应限制位移强度
      var ratio = radius / z;
      x = x * ratio;
      y = y * ratio;
      x = Math.round(x);
      y = Math.round(y);
      return {
        posX: x,
        posY: y
      };
    }
  }
});