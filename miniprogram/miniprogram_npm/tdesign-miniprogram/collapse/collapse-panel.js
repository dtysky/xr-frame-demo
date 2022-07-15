var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './collapse-panel-props';
const { prefix } = config;
const name = `${prefix}-collapse-panel`;
const nextTick = () => new Promise((resolve) => setTimeout(resolve, 20));
let CollapsePanel = class CollapsePanel extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.relations = {
            './collapse': {
                type: 'ancestor',
                linked(target) {
                    this.parent = target;
                    const { value, defaultExpandAll, expandMutex, expandIcon, disabled } = target.properties;
                    const activeValues = defaultExpandAll && !expandMutex ? [this.properties.value] : value;
                    this.setData({
                        ultimateExpandIcon: expandIcon || this.properties.expandIcon,
                        ultimateDisabled: this.properties.disabled == null ? disabled : this.properties.disabled,
                    });
                    this.updateExpanded(activeValues);
                },
            },
        };
        this.properties = props;
        this.data = {
            contentHeight: 0,
            expanded: false,
            classPrefix: name,
            classBasePrefix: prefix,
            ultimateExpandIcon: false,
            ultimateDisabled: false,
        };
        this.methods = {
            set(data) {
                this.setData(data);
                return new Promise((resolve) => wx.nextTick(resolve));
            },
            updateExpanded(activeValues) {
                if (!this.parent) {
                    return Promise.resolve()
                        .then(nextTick)
                        .then(() => {
                        const data = { transition: true };
                        if (this.data.expanded) {
                            data.contentHeight = 'auto';
                        }
                        this.setData(data);
                    });
                }
                const { value } = this.properties;
                const expanded = activeValues.includes(value);
                if (expanded === this.properties.expanded)
                    return;
                this.setData({ expanded });
                this.updateStyle(expanded);
            },
            getRect(selector, all) {
                return new Promise((resolve) => {
                    wx.createSelectorQuery()
                        .in(this)[all ? 'selectAll' : 'select'](selector)
                        .boundingClientRect((rect) => {
                        if (all && Array.isArray(rect) && rect.length) {
                            resolve(rect);
                        }
                        if (!all && rect) {
                            resolve(rect);
                        }
                    })
                        .exec();
                });
            },
            updateStyle(expanded) {
                return this.getRect(`.${name}__content`)
                    .then((rect) => rect.height)
                    .then((height) => {
                    if (expanded) {
                        return this.set({
                            contentHeight: height ? `${height}px` : 'auto',
                        });
                    }
                    return this.set({ contentHeight: `${height}px` })
                        .then(nextTick)
                        .then(() => this.set({ contentHeight: 0 }));
                });
            },
            onClick() {
                const { ultimateDisabled } = this.data;
                const { value } = this.properties;
                if (ultimateDisabled)
                    return;
                this.parent.switch(value);
            },
            onTransitionEnd() {
                if (this.data.expanded) {
                    this.setData({
                        contentHeight: 'auto',
                    });
                }
            },
        };
    }
};
CollapsePanel = __decorate([
    wxComponent()
], CollapsePanel);
export default CollapsePanel;
