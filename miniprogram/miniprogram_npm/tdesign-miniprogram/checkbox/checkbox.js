var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import Props from './props';
const { prefix } = config;
const classPrefix = `${prefix}-checkbox`;
let CheckBox = class CheckBox extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-label`,
            `${prefix}-class-icon`,
            `${prefix}-class-content`,
            `${prefix}-class-border`,
        ];
        this.behaviors = ['wx://form-field'];
        this.relations = {
            '../checkbox-group/checkbox-group': {
                type: 'ancestor',
                linked(parent) {
                    const { value, disabled } = parent.data;
                    const valueSet = new Set(value);
                    const data = {
                        disabled: disabled || this.data.disabled,
                    };
                    data.checked = valueSet.has(this.data.value);
                    if (this.data.checkAll) {
                        data.checked = valueSet.size > 0;
                    }
                    this.setData(data);
                },
            },
        };
        this.options = {
            multipleSlots: true,
            styleIsolation: 'shared',
        };
        this.properties = Object.assign(Object.assign({}, Props), { theme: {
                type: String,
                value: 'default',
            }, borderless: {
                type: Boolean,
                value: false,
            } });
        this.data = {
            prefix,
            classPrefix,
        };
        this.controlledProps = [
            {
                key: 'checked',
                event: 'change',
            },
        ];
        this.methods = {
            onChange(e) {
                const { disabled, readonly } = this.data;
                if (disabled || readonly)
                    return;
                const { target } = e.currentTarget.dataset;
                const { contentDisabled } = this.data;
                if (target === 'text' && contentDisabled) {
                    return;
                }
                const checked = !this.data.checked;
                const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
                if (parent) {
                    parent.updateValue(Object.assign(Object.assign({}, this.data), { checked }));
                }
                else {
                    this._trigger('change', { checked });
                }
            },
        };
    }
};
CheckBox = __decorate([
    wxComponent()
], CheckBox);
export default CheckBox;
