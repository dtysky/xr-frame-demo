var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import { getRect, requestAnimationFrame } from '../common/utils';
import props from './props';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-notice-bar`;
let NoticeBar = class NoticeBar extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-content`,
            `${prefix}-class-prefix-icon`,
            `${prefix}-class-extre`,
            `${prefix}-class-suffix-icon`,
        ];
        this.options = {
            styleIsolation: 'apply-shared',
            multipleSlots: true,
        };
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
            loop: -1,
        };
        this.observers = {
            marquee(val) {
                if (JSON.stringify(val) === '{}' || JSON.stringify(val) === 'true') {
                    this.setData({
                        marquee: {
                            speed: 50,
                            loop: -1,
                            delay: 0,
                        },
                    });
                }
            },
            visible(visible) {
                if (visible) {
                    this.show();
                }
                else {
                    this.clearNoticeBarAnimation();
                }
            },
        };
        this.lifetimes = {
            created() {
                this.resetAnimation = wx.createAnimation({
                    duration: 0,
                    timingFunction: 'linear',
                });
            },
            detached() {
                this.clearNoticeBarAnimation();
            },
        };
        this.methods = {
            initAnimation() {
                const warpID = `.${name}__content-wrap`;
                const nodeID = `.${name}__content`;
                requestAnimationFrame(() => {
                    Promise.all([getRect(this, nodeID), getRect(this, warpID)]).then(([nodeRect, wrapRect]) => {
                        const { marquee } = this.properties;
                        const speeding = marquee.speed;
                        const delaying = marquee.delay ? marquee.delay : 0;
                        const loops = marquee.loop - 1;
                        if (nodeRect == null || wrapRect == null || !nodeRect.width || !wrapRect.width) {
                            return;
                        }
                        if (marquee || wrapRect.width < nodeRect.width) {
                            const animationDuration = ((wrapRect.width + nodeRect.width) / speeding) * 1000;
                            const firstanimationDuration = (nodeRect.width / speeding) * 1000;
                            this.setData({
                                wrapWidth: Number(wrapRect.width),
                                nodeWidth: Number(nodeRect.width),
                                animationDuration: animationDuration,
                                delay: delaying,
                                loop: loops,
                                firstanimationDuration: firstanimationDuration,
                            });
                            this.startScrollAnimation(true);
                        }
                    });
                });
            },
            startScrollAnimation(isFirstScroll = false) {
                this.clearNoticeBarAnimation();
                const { wrapWidth, nodeWidth, firstanimationDuration, animationDuration, delay } = this.data;
                const delayTime = isFirstScroll ? delay : 0;
                const durationTime = isFirstScroll ? firstanimationDuration : animationDuration;
                this.setData({
                    animationData: this.resetAnimation
                        .translateX(isFirstScroll ? 0 : wrapWidth)
                        .step()
                        .export(),
                });
                requestAnimationFrame(() => {
                    this.setData({
                        animationData: wx
                            .createAnimation({ duration: durationTime, timingFunction: 'linear', delay: delayTime })
                            .translateX(-nodeWidth)
                            .step()
                            .export(),
                    });
                });
                this.nextAnimationContext = setTimeout(() => {
                    if (this.data.loop > 0) {
                        this.data.loop -= 1;
                        this.startScrollAnimation();
                    }
                    else if (this.data.loop === 0) {
                        this.setData({ animationData: this.resetAnimation.translateX(0).step().export() });
                    }
                    else if (this.data.loop < 0) {
                        this.startScrollAnimation();
                    }
                }, durationTime + delayTime);
            },
            show() {
                this.clearNoticeBarAnimation();
                this.setIcon();
                this.initAnimation();
            },
            clearNoticeBarAnimation() {
                this.nextAnimationContext && clearTimeout(this.nextAnimationContext);
                this.nextAnimationContext = null;
            },
            setIcon() {
                const { prefixIcon, theme } = this.properties;
                if (prefixIcon) {
                    this.setData({
                        iconName: prefixIcon !== 'null' ? `${prefixIcon}` : '',
                    });
                }
                else {
                    const themeNoticeBar = {
                        info: 'error-circle-filled',
                        success: 'check-circle-filled',
                        warning: 'error-circle-filled',
                        error: 'close-circle-filled',
                    };
                    this.setData({ iconName: themeNoticeBar[theme] });
                }
            },
            clickPrefixIcon() {
                this.triggerEvent('click', { trigger: 'prefix-icon' });
            },
            clickContent() {
                this.triggerEvent('click', { trigger: 'content' });
            },
            clickSuffixIcon() {
                this.triggerEvent('click', { trigger: 'suffix-icon' });
            },
            clickExtra() {
                this.triggerEvent('click', { trigger: 'extra' });
            },
        };
    }
};
NoticeBar = __decorate([
    wxComponent()
], NoticeBar);
export default NoticeBar;
