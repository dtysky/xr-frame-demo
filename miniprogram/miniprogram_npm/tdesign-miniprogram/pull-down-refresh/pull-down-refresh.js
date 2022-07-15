var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-pull-down-refresh`;
let PullDownRefresh = class PullDownRefresh extends SuperComponent {
    constructor() {
        super(...arguments);
        this.isScrollToTop = true;
        this.pixelRatio = 1;
        this.startPoint = null;
        this.isPulling = false;
        this.defaultBarHeight = 0;
        this.maxBarHeight = 276;
        this.loadingBarHeight = 200;
        this.refreshTimeout = 3000;
        this.minRefreshTimeFlag = 0;
        this.minRefreshStatusShowTimeFlag = 0;
        this.maxRefreshAnimateTimeFlag = 0;
        this.closingAnimateTimeFlag = 0;
        this.externalClasses = ['t--class', 't-class-loading', 't-class-tex', 't-class-indicator'];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.data = {
            classPrefix: name,
            barHeight: this.defaultBarHeight,
            refreshStatus: 0,
            refreshTypes: ['not-start', 'wait-start', 'refreshing', 'success', 'finishing'],
            rotate: 0,
        };
    }
    attached() {
        const systemInfo = wx.getSystemInfoSync();
        this.screenWidth = systemInfo.screenWidth;
        this.pixelRatio = 750 / systemInfo.screenWidth;
        this.ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
        const maxBarHeight = this.properties.maxBarHeight;
        if (maxBarHeight) {
            this.maxBarHeight = maxBarHeight;
        }
        const loadingBarHeight = this.properties.loadingBarHeight;
        if (loadingBarHeight) {
            this.loadingBarHeight = loadingBarHeight;
        }
        const refreshTimeout = this.properties.refreshTimeout;
        if (refreshTimeout) {
            this.refreshTimeout = refreshTimeout;
        }
    }
    detached() {
        this.cleanTimeFlag();
    }
    onPageScroll(e) {
        const { scrollTop } = e;
        this.isScrollToTop = scrollTop === 0;
    }
    cleanTimeFlag() {
        clearTimeout(this.minRefreshTimeFlag);
        clearTimeout(this.minRefreshStatusShowTimeFlag);
        clearTimeout(this.maxRefreshAnimateTimeFlag);
        clearTimeout(this.closingAnimateTimeFlag);
    }
    onTouchStart(e) {
        if (!this.isScrollToTop || this.isPulling)
            return;
        const { touches } = e;
        if (touches.length !== 1)
            return;
        const { pageX, pageY } = touches[0];
        this.startPoint = { pageX, pageY };
        this.isPulling = true;
    }
    onTouchMove(e) {
        if (!this.isScrollToTop || !this.startPoint)
            return;
        const { touches } = e;
        if (touches.length !== 1)
            return;
        const { pageY } = touches[0];
        const offset = pageY - this.startPoint.pageY;
        const barHeight = this.toRpx(offset);
        if (barHeight > 0) {
            if (barHeight > this.maxBarHeight) {
                this.setRefreshBarHeight(this.maxBarHeight);
                this.startPoint.pageY = pageY - this.toPx(this.maxBarHeight);
            }
            else {
                this.setRefreshBarHeight(barHeight);
            }
        }
    }
    onTouchEnd(e) {
        if (!this.startPoint)
            return;
        const { changedTouches } = e;
        if (changedTouches.length !== 1)
            return;
        const { pageY } = changedTouches[0];
        const barHeight = this.toRpx(pageY - this.startPoint.pageY);
        this.startPoint = null;
        if (barHeight > this.loadingBarHeight) {
            this.setData({
                barHeight: this.loadingBarHeight,
                rotate: 0,
                refreshStatus: 2,
            });
            const startTime = Date.now();
            const callback = () => {
                const remainTime = 1000 - (Date.now() - startTime);
                this.minRefreshTimeFlag = setTimeout(() => {
                    this.minRefreshTimeFlag = 0;
                    if (this.maxRefreshAnimateTimeFlag) {
                        clearTimeout(this.maxRefreshAnimateTimeFlag);
                        this.maxRefreshAnimateTimeFlag = 0;
                        this.setData({ refreshStatus: 3 });
                        this.minRefreshStatusShowTimeFlag = setTimeout(() => {
                            this.minRefreshStatusShowTimeFlag = 0;
                            this.close();
                        }, 1000);
                    }
                }, remainTime > 0 ? remainTime : 0);
            };
            this.triggerEvent('refresh', { callback });
            this.maxRefreshAnimateTimeFlag = setTimeout(() => {
                this.maxRefreshAnimateTimeFlag = 0;
                if (this.data.refreshStatus === 2) {
                    this.triggerEvent('timeout');
                    this.close();
                }
            }, this.refreshTimeout);
        }
        else {
            this.close();
        }
    }
    toRpx(v) {
        return v * this.pixelRatio;
    }
    toPx(v) {
        return v / this.pixelRatio;
    }
    setRefreshBarHeight(barHeight) {
        const data = { barHeight };
        if (barHeight >= this.loadingBarHeight) {
            data.refreshStatus = 1;
            data.rotate = -720;
        }
        else {
            data.refreshStatus = 0;
            data.rotate = (barHeight / this.loadingBarHeight) * -720;
        }
        return new Promise((resolve) => {
            this.setData(data, () => resolve(barHeight));
        });
    }
    close() {
        this.setData({ barHeight: this.defaultBarHeight, refreshStatus: 4 });
        this.closingAnimateTimeFlag = setTimeout(() => {
            this.closingAnimateTimeFlag = 0;
            if (this.minRefreshStatusShowTimeFlag) {
                clearTimeout(this.minRefreshStatusShowTimeFlag);
                this.minRefreshStatusShowTimeFlag = 0;
            }
            this.setData({ refreshStatus: 0 });
            this.isPulling = false;
        }, 1000);
    }
};
PullDownRefresh = __decorate([
    wxComponent()
], PullDownRefresh);
export default PullDownRefresh;
