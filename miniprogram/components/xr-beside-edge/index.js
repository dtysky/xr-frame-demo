const info = wx.getSystemInfoSync();
const dpi = info.pixelRatio;
const width = info.windowWidth * dpi;
const height = info.windowHeight * dpi;

import CONFIG from './config.js';

const ROOT_DURATIONS = [
  3000, 6000, 10000, Infinity
];
const ROOT_DELAYS = [
  1000, 3000, 1000, 0
];
const ROOT_AMBIENTS = [
  0.1, 0.3, 0.6, 1
];

function showFinalChoose(content, callback) {
  wx.showModal({
    title: '做出选择',
    content,
    showCancel: true,
    confirmText: '正视现实',
    cancelText: '我不要！',
    success: (res) => {
      if (res.cancel) {
        showFinalChoose('不能逃避！', callback);
      } else {
        callback();
        setTimeout(() => {
          wx.showToast({
            title: '勇敢一些\n不要怯懦',
            duration: 2000,
            icon: 'none'
          })
        }, 500);
      }
    }
  });
}

Component({
  scene: null,
  properties: {
    nextAction: {
      type: String,
      value: '',
      observer(fromWhat, old) {
        if (fromWhat === 'item') {
          this.remainItems -= 1;
          if (this.remainItems === 0) {
            this.disable3DTouch = false;
            this.setData({subStep: true});
            return;
          }

          this.switchSide(false);
          this.triggerEvent('requireLight', {state: 'idle'});
          return;
        }

        if (fromWhat === 'char') {
          const {texts} = this.config.steps[this.data.step];
          this.requireDialog({texts, from: 'step'});
          return;
        }

        if (fromWhat === 'step' || fromWhat === 'intro') {
          const step = this.data.step + 1;
          if (step === 4) {
            wx.showModal({
              title: '最后的信',
              content: this.config.letter.texts.join('\n'),
              showCancel: false,
              confirmText: '做出选择',
              complete: () => {
                showFinalChoose('', () => this.switchSide(false));
              }
            });
            return;
          }

          this.remainItems = this.config.steps[step].itemCount;
          this.setData({step, subStep: false, ambient: ROOT_AMBIENTS[step]});
          this.switchSide(false);
          this.triggerEvent('requireLight', {state: 'idle'});
          return;
        }

        if (fromWhat === 'light') {
          this.switchSide(true);
          this.disable3DTouch = false;
          this.lightDuration = ROOT_DURATIONS[this.data.step];
          this.lightDelay = ROOT_DELAYS[this.data.step];
        }
      }
    }
  },
  data: {
    step: -1,
    subStep: false,
    ambient: 0,
    width: width,
    height: height,
    loaded: false,
    arReady: false
  },
  lifetimes: {
    detached() {
      this.bgm.stop();
      wx.setKeepScreenOn({keepScreenOn: false});
    }
  },
  methods: {
    handleReady({detail}) {
      this.scene = detail.value;
      this.scene.event.add('tick', this.handleTick.bind(this));
      this.inited = false;
      this.disable3DTouch = false;
      this.remainItems = 0;
      this.lightDuration = 0;
      this.lightDelay = 0;
      this.bgm = wx.createInnerAudioContext({});
      this.bgm.src = 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/bgm.mp3';
      this.bgm.loop = true;
    },
    handleARReady() {
      wx.setKeepScreenOn({keepScreenOn: true});
      this.setData({arReady: true});
    },
    handleAssetsLoaded: function ({detail}) {
      console.log('assets loaded', detail.value);
      this.config = CONFIG;
      this.note = this.scene.assets.getAsset('raw', 'note');
      this.setData({loaded: true});
    },
    handleTick(dt) {
      if (this.inited) {
        const nextDuration = Math.max(this.lightDuration - dt, 0);
        if (this.lightDuration > 0 && nextDuration === 0) {
          this.disable3DTouch = true;
          this.switchSide(false);
          this.triggerEvent('requireLight', {state: 'cd', wait: 1});
        } else if (this.lightDuration === 0) {
          const nextDelay = Math.max(this.lightDelay - dt, 0);
          if (this.lightDelay > 0 && nextDelay === 0) {
            this.triggerEvent('requireLight', {state: 'idle'});
          } else if (this.lightDelay > 0) {
            this.triggerEvent('requireLight', {state: 'cd', wait: nextDelay / ROOT_DELAYS[this.data.step]});
          }
          this.lightDelay = nextDelay;
        }

        this.lightDuration = nextDuration;
        return;
      }

      if (!this.data.arReady || !this.data.loaded) {
        return;
      }

      const mainCamera = this.scene.getNodeById('main-camera');
      const setItem = this.scene.getNodeById('setitem');
      setItem.position.set(mainCamera.position);
      setItem.position.y = 1.5;
      this.inited = true;

      setTimeout(() => {
        this.switchSide(true);
        setTimeout(() => {
          const {texts} = this.config.intro;
          this.requireDialog({texts, from: 'intro'});
          this.bgm.play();
        }, 500);
      }, 1000);
    },
    switchSide(virtual) {
      const setItem = this.scene.getNodeById('setitem');
      setItem.visible = virtual;
      virtual && this.triggerEvent('requireLight', {state: 'hide'});
    },
    handleResume() {
      if (this.data.placed) {
        this.bgm.play();
      }
    },
    handleTouchObj({detail}) {
      if (!this.inDistance(detail)) {
        return;
      }

      const id = detail.value.target.id;
      const {texts} = this.config.items[id];

      this.requireDialog({texts, from: 'item'});
    },
    handleTouchChar({detail}) {
      if (!this.inDistance(detail)) {
        return;
      }

      const id = this.data.step === 3 ? 'final' : detail.value.target.id;
      const {name, texts} = this.config.chars[id];
      this.requireDialog({name, texts, from: 'char'});
    },
    requireDialog(info) {
      this.disable3DTouch = true;
      this.lightDuration = Infinity;
      this.triggerEvent('requireLight', {state: 'hide'});
      this.triggerEvent('requireDialog', info);
    },
    inDistance(detail) {
      if (detail.value.camera.el.id !== 'main-camera') {
        return false;
      }

      if (this.disable3DTouch) {
        return false;
      }

      const xrSystem = wx.getXrFrameSystem();
      const {camera, target} = detail.value;
      const camTrs = camera.el.getComponent(xrSystem.Transform);
      const targetTrs = target.getComponent(xrSystem.Transform);
      const diff = camTrs.worldPosition.sub(targetTrs.worldPosition);

      return Math.sqrt(diff.x * diff.x + diff.z * diff.z) < 1.5;
    }
  }
})
