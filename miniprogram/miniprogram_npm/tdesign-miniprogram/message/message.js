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
const name = `${prefix}-message`;
const SHOW_DURATION = 500;
let Message = class Message extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn'];
        this.options = {
            styleIsolation: 'apply-shared',
            multipleSlots: true,
        };
        this.properties = Object.assign({}, props);
        this.data = {
            prefix,
            classPrefix: name,
            visible: false,
            loop: -1,
            animation: [],
            showAnimation: [],
            iconName: '',
            wrapTop: -92,
        };
        this.observers = {
            marquee(val) {
                if (JSON.stringify(val) === '{}') {
                    this.setData({
                        marquee: {
                            speed: 50,
                            loop: -1,
                            delay: 5000,
                        },
                    });
                }
            },
        };
        this.closeTimeoutContext = 0;
        this.nextAnimationContext = 0;
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear',
        });
        this.showAnimation = wx
            .createAnimation({ duration: SHOW_DURATION, timingFunction: 'ease' })
            .translateY(0)
            .opacity(1)
            .step()
            .export();
        this.hideAnimation = wx
            .createAnimation({ duration: SHOW_DURATION, timingFunction: 'ease' })
            .translateY(this.data.wrapTop)
            .opacity(0)
            .step()
            .export();
    }
    ready() {
        this.memoInitalData();
        this.setIcon();
    }
    memoInitalData() {
        this.initalData = Object.assign(Object.assign({}, this.properties), this.data);
    }
    resetData(cb) {
        this.setData(Object.assign({}, this.initalData), cb);
    }
    detached() {
        this.clearMessageAnimation();
    }
    setIcon(icon = this.properties.icon) {
        if (!icon) {
            this.setData({ iconName: '' });
            return;
        }
        if (typeof icon === 'string') {
            this.setData({
                iconName: `${icon}`,
            });
            return;
        }
        if (icon) {
            let nextValue = 'notification';
            const { theme } = this.properties;
            const themeMessage = {
                info: 'error-circle',
                success: 'check-circle',
                warning: 'error-circle',
                error: 'error-circle',
            };
            nextValue = themeMessage[theme];
            this.setData({ iconName: nextValue });
        }
    }
    checkAnimation() {
        const speeding = this.properties.marquee.speed;
        if (!this.properties.marquee) {
            return;
        }
        if (this.data.loop > 0) {
            this.data.loop -= 1;
        }
        else if (this.data.loop === 0) {
            this.setData({ animation: this.resetAnimation.translateX(0).step().export() });
            return;
        }
        if (this.nextAnimationContext) {
            this.clearMessageAnimation();
        }
        const warpID = `#${name}__text-wrap`;
        const nodeID = `#${name}__text`;
        Promise.all([this.queryWidth(nodeID), this.queryWidth(warpID)]).then(([nodeWidth, warpWidth]) => {
            this.setData({
                animation: this.resetAnimation.translateX(warpWidth).step().export(),
            }, () => {
                const durationTime = ((nodeWidth + warpWidth) / speeding) * 1000;
                const nextAnimation = wx
                    .createAnimation({
                    duration: durationTime,
                })
                    .translateX(-nodeWidth)
                    .step()
                    .export();
                setTimeout(() => {
                    this.nextAnimationContext = setTimeout(this.checkAnimation.bind(this), durationTime);
                    this.setData({ animation: nextAnimation });
                }, 20);
            });
        });
    }
    queryWidth(queryName) {
        return new Promise((resolve) => {
            this.createSelectorQuery()
                .select(queryName)
                .boundingClientRect(({ width }) => {
                resolve(width);
            })
                .exec();
        });
    }
    queryHeight(queryName) {
        return new Promise((resolve) => {
            this.createSelectorQuery()
                .select(queryName)
                .boundingClientRect(({ height }) => {
                resolve(height);
            })
                .exec();
        });
    }
    clearMessageAnimation() {
        clearTimeout(this.nextAnimationContext);
        this.nextAnimationContext = 0;
    }
    show() {
        const { duration, icon } = this.properties;
        this.setData({ visible: true, loop: this.properties.marquee.loop });
        this.reset();
        this.setIcon(icon);
        this.checkAnimation();
        if (duration && duration > 0) {
            this.closeTimeoutContext = setTimeout(() => {
                this.hide();
                this.triggerEvent('durationEnd', { self: this });
            }, duration);
        }
        const wrapID = `#${name}`;
        this.queryHeight(wrapID).then((wrapHeight) => {
            this.setData({ wrapTop: -wrapHeight }, () => {
                this.setData({ showAnimation: this.showAnimation });
            });
        });
    }
    hide() {
        this.reset();
        this.setData({ showAnimation: this.hideAnimation });
        setTimeout(() => {
            this.setData({ visible: false, animation: [] });
        }, SHOW_DURATION);
    }
    reset() {
        if (this.nextAnimationContext) {
            this.clearMessageAnimation();
        }
        clearTimeout(this.closeTimeoutContext);
        this.closeTimeoutContext = 0;
    }
    handleClose() {
        this.hide();
        this.triggerEvent('closeBtnClick');
    }
    handleBtnClick() {
        this.triggerEvent('actionBtnClick', { self: this });
    }
};
Message = __decorate([
    wxComponent()
], Message);
export default Message;
