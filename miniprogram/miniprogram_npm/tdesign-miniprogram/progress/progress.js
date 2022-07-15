var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getBackgroundColor } from './utils';
const { prefix } = config;
const classPrefix = `${prefix}-progress`;
let Progress = class Progress extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class-label`];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.data = {
            prefix,
            classPrefix,
            colorBar: '',
            computedStatus: '',
            computedProgress: 0,
        };
        this.observers = {
            percentage(percentage) {
                percentage = Math.max(0, Math.min(percentage, 100));
                this.setData({
                    computedStatus: percentage === 100 ? 'success' : '',
                    computedProgress: percentage,
                });
            },
            color(color) {
                this.setData({
                    colorBar: getBackgroundColor(color),
                });
            },
        };
    }
};
Progress = __decorate([
    wxComponent()
], Progress);
export default Progress;
