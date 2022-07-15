var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import avatarProps from './props';
const { prefix } = config;
const name = `${prefix}-avatar`;
let Avatar = class Avatar extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
        };
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-image`,
            `${prefix}-class-icon`,
            `${prefix}-class-alt`,
            `${prefix}-class-content`,
        ];
        this.properties = avatarProps;
        this.data = {
            prefix,
            classPrefix: name,
            isShow: true,
            zIndex: 0,
            isChild: false,
        };
        this.relations = {
            './avatar-group': {
                type: 'ancestor',
                linked(target) {
                    this.parent = target;
                },
            },
        };
        this.methods = {
            updateIsChild(isChild) {
                this.setData({
                    isChild,
                });
            },
            updateShow() {
                this.setData({
                    isShow: false,
                });
            },
            updateSize(size) {
                if (this.properties.size)
                    return;
                this.setData({ size });
            },
            updateCascading(zIndex) {
                this.setData({ zIndex });
            },
        };
    }
    onLoadError(e) {
        if (this.properties.hideOnLoadFailed) {
            this.setData({
                isShow: false,
            });
        }
        this.triggerEvent('error', e.detail);
    }
};
Avatar = __decorate([
    wxComponent()
], Avatar);
export default Avatar;
