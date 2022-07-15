var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import avatarGroupProps from './avatar-group-props';
const { prefix } = config;
const name = `${prefix}-avatar-group`;
let AvatarGroup = class AvatarGroup extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-image`];
        this.properties = avatarGroupProps;
        this.data = {
            prefix,
            classPrefix: name,
            hasChild: true,
            length: 0,
        };
        this.options = {
            multipleSlots: true,
        };
        this.relations = {
            './avatar': {
                type: 'descendant',
                linked() {
                    this.children = this.getRelationNodes('./avatar');
                },
            },
        };
        this.methods = {
            handleHasChild(children, hasChild) {
                children.forEach((child) => {
                    child.updateIsChild(hasChild);
                });
            },
            handleChildSlot(max, children, f) {
                const query = this.createSelectorQuery();
                const slotName = `.${this.data.classPrefix}__collapse--slot`;
                query.select(slotName).boundingClientRect();
                query.exec((res) => {
                    const isSlot = !!res[0].width;
                    f(max, children, isSlot);
                });
            },
            handleChildMax(max, children, isSlotElement) {
                const len = children.length;
                if (!max || max > len)
                    return;
                const slotElement = isSlotElement ? children.pop() : '';
                const leftChildren = children.splice(max, len - max, isSlotElement && slotElement);
                leftChildren.forEach((child) => {
                    child.updateShow();
                });
            },
            handleChildSize(size, children) {
                if (!size)
                    return;
                children.forEach((child) => {
                    child.updateSize(size);
                });
            },
            handleChildCascading(cascading, children) {
                if (cascading === 'right-up')
                    return;
                const defaultZIndex = 100;
                children.forEach((child, index) => {
                    child.updateCascading(defaultZIndex - index * 10);
                });
            },
        };
    }
    ready() {
        this.setData({
            length: this.children.length,
        });
        this.handleHasChild(this.children, this.data.hasChild);
        this.handleChildSlot(this.properties.max, this.children, this.handleChildMax);
        this.handleChildSize(this.properties.size, this.children);
        this.handleChildCascading(this.properties.cascading, this.children);
    }
};
AvatarGroup = __decorate([
    wxComponent()
], AvatarGroup);
export default AvatarGroup;
