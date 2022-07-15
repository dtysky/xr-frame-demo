var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { SuperComponent, wxComponent, useControl } from '../common/src/index';
import config from '../common/config';
import { DIRECTION } from './common/constants';
import props from './props';
const { prefix } = config;
const easings = {
    linear: 'linear',
    easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
    easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
};
const defaultNavigation = {
    type: "dots",
    minShowNum: 2,
    hasNavBtn: false,
};
let Swiper = class Swiper extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.observers = {
            navigation(val) {
                this.setData({
                    _navigation: Object.assign(Object.assign({}, defaultNavigation), val),
                });
            },
            current(val) {
                this.update(+val);
            },
            autoplay(val) {
                if (val) {
                    this.play();
                }
                else {
                    this.pause();
                }
            },
            interval(val) {
                if (this._old_interval && this._old_interval !== val) {
                    this.replay();
                }
                this._old_interval = val;
            },
            direction(val) {
                if (this._old_direction && this._old_direction !== val) {
                    this.initItem();
                }
                this._old_direction = val;
            },
        };
        this.children = null;
        this.$nav = null;
        this.timer = null;
        this.updateTimer = null;
        this.control = null;
        this.relations = {
            './swiper-item': {
                type: 'child',
                linked: function () {
                    clearTimeout(this.updateTimer);
                    this.updateTimer = setTimeout(() => {
                        this.initItem();
                        this.updateNav(this.control.get());
                    });
                },
            },
            './swiper-nav': {
                type: 'child',
            },
        };
        this.data = {
            _current: 0,
            _navigation: null,
            _width: 0,
            _height: 0,
            offsetX: 0,
            offsetY: 0,
            total: 0,
            easings,
            inited: false,
            currentInited: false,
            prefix,
            classPrefix: `.${prefix}-swiper`,
        };
    }
    attached() {
        this.control = useControl.call(this, {
            valueKey: 'current',
            strict: false,
        });
    }
    detached() {
        this.pause();
    }
    ready() {
        this.createSelectorQuery()
            .select('#swiper')
            .boundingClientRect((rect) => {
            this.setData({
                _width: rect.width,
                _height: rect.height,
            });
            this.initItem();
            this.initNav();
            this.initCurrent();
        })
            .exec();
    }
    initItem() {
        const { direction } = this.properties;
        this.children = this.getRelationNodes('./swiper-item');
        this.children.forEach((item, index) => {
            item.setIndex(index, direction);
        });
        this.setData({
            total: this.children.length,
        });
    }
    initNav() {
        var _a;
        const { _navigation } = this.data;
        if (_navigation) {
            this.$nav = this.selectComponent('#swiperNav');
        }
        else {
            this.$nav = (_a = this.getRelationNodes('./swiper-nav')) === null || _a === void 0 ? void 0 : _a[0];
        }
    }
    inited() {
        this.updateNav(this.control.get());
        this.setData({
            inited: true,
        });
    }
    initCurrent() {
        let index = +this.control.initValue;
        index = Math.min(index, this.children.length - 1);
        index = Math.max(index, 0);
        this.control.set(index, Object.assign({ currentInited: true, inited: index === 0 }, this.calcOffset(index)));
    }
    play() {
        this.pause();
        const { interval } = this.properties;
        this.timer = setInterval(() => {
            const { inited } = this.data;
            if (!inited)
                return;
            this.next({ cycle: true, source: 'autoplay' });
        }, interval);
    }
    replay() {
        const { autoplay } = this.properties;
        autoplay && this.play();
    }
    pause() {
        this.timer && clearInterval(this.timer);
        this.timer = null;
    }
    goto(index, source) {
        if (this.control.get() === index) {
            this.update(index);
            return;
        }
        this.control.change(index, {
            current: index,
            source,
        }, () => {
            this.update(index);
        });
    }
    update(index, finish) {
        if (!this.children)
            return;
        const len = this.children.length;
        let fixIndex = +index;
        if (Number.isNaN(fixIndex))
            return;
        if (fixIndex <= 0) {
            fixIndex = 0;
        }
        else if (fixIndex > len - 1) {
            fixIndex = len - 1;
        }
        this.updateNav(fixIndex);
        this.control.set(fixIndex, this.calcOffset(fixIndex), finish);
    }
    updateNav(index) {
        var _a;
        if (!this.$nav)
            return;
        const { direction } = this.properties;
        (_a = this.$nav) === null || _a === void 0 ? void 0 : _a.onChange({
            index,
            total: this.children.length,
            direction,
        });
    }
    calcOffset(index) {
        const { direction } = this.properties;
        const { _width, _height } = this.data;
        if (direction === DIRECTION.HOR) {
            return {
                offsetX: -index * _width,
            };
        }
        return {
            offsetY: -index * _height,
        };
    }
    next(opt) {
        const innerVal = this.control.get();
        const len = this.children.length;
        let nextIndex = innerVal;
        if (opt.cycle && innerVal === len - 1) {
            nextIndex = 0;
        }
        else if (len - 1 > innerVal) {
            nextIndex += 1;
        }
        this.goto(nextIndex, opt.source);
    }
    prev(opt) {
        const innerVal = this.control.get();
        const len = this.children.length;
        let nextIndex = innerVal;
        if (opt.cycle && innerVal === 0) {
            nextIndex = len - 1;
        }
        else if (nextIndex > 0) {
            nextIndex -= 1;
        }
        this.goto(nextIndex, opt.source);
    }
    onSwiperNavBtnChange(e) {
        const _a = e.detail, { dir } = _a, rest = __rest(_a, ["dir"]);
        this.pause();
        this === null || this === void 0 ? void 0 : this[dir](rest);
    }
};
Swiper = __decorate([
    wxComponent()
], Swiper);
export default Swiper;
