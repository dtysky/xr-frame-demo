var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './step-item-props';
const { prefix } = config;
let StepItem = class StepItem extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
        };
        this.relations = {
            './steps': {
                type: 'ancestor',
            },
        };
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-content`,
            `${prefix}-class-title`,
            `${prefix}-class-description`,
            `${prefix}-class-extra`,
        ];
        this.properties = props;
        this.data = {
            classPrefix: `${prefix}-steps-item`,
            prefix,
            rootClassName: '',
            parent: null,
            index: 0,
            isDot: false,
            curStatus: '',
            curSubStepItems: [],
            curSubStepItemsStatus: [],
            layout: 'vertical',
            type: 'default',
            isLastChild: false,
            isLarge: false,
            readonly: false,
            computedIcon: '',
        };
        this.observers = {
            icon(val) {
                this.setData({
                    computedIcon: val,
                });
            },
        };
        this.lifetimes = {
            ready() {
                const [parent] = this.getRelationNodes('./steps') || [];
                if (parent) {
                    this.setData({
                        parent,
                    });
                }
            },
        };
        this.methods = {
            updateStatus(current, currentStatus, index, theme, layout, steps, readonly) {
                const _current = String(current);
                const connectLine = '-';
                const judgeObjAttr = (data, attr) => {
                    return Array.isArray(data[attr]) && data[attr].length;
                };
                const getStepLevel = (s) => {
                    const reg = new RegExp(`(.*)${connectLine}{1}.*`);
                    return s.replace(reg, '$1');
                };
                const isSameLevelStep = (stepsTag, current) => {
                    return stepsTag.length < current.length && getStepLevel(stepsTag) === getStepLevel(current);
                };
                const stepFinalStatus = (item, itemTag, current, currentStatus) => {
                    let tempStepStatus = '';
                    if (item.status !== 'default' && item.status !== undefined) {
                        tempStepStatus = item.status === '' ? 'default' : item.status;
                    }
                    else {
                        tempStepStatus = 'default';
                        if (itemTag < current) {
                            tempStepStatus = 'finish';
                        }
                        else if (itemTag === current && item.status !== '') {
                            tempStepStatus = currentStatus;
                        }
                        if (isSameLevelStep(itemTag, current)) {
                            if (judgeObjAttr(item, 'subStepItems')) {
                                const tempStepItemsStatus = item.subStepItems.map((subItem, subIndex) => {
                                    const subItemTag = `${itemTag}${connectLine}${subIndex}`;
                                    return stepFinalStatus(subItem, subItemTag, current, currentStatus);
                                });
                                if (tempStepItemsStatus[tempStepItemsStatus.length - 1] === 'finish') {
                                    tempStepStatus = 'finish';
                                    return tempStepStatus;
                                }
                                if (tempStepItemsStatus.includes('process') || tempStepItemsStatus.every((item) => item === 'default')) {
                                    tempStepStatus = 'process';
                                }
                                if (tempStepItemsStatus.includes('error')) {
                                    tempStepStatus = 'error';
                                }
                            }
                        }
                    }
                    return tempStepStatus;
                };
                this.data.tempStatus = stepFinalStatus(this.data, String(index), _current, currentStatus);
                const tempStatusList = [];
                if (judgeObjAttr(this.data, 'subStepItems')) {
                    this.data.subStepItems.forEach((subItem, subIndex) => {
                        tempStatusList.push(stepFinalStatus(subItem, `${index}${connectLine}${subIndex}`, _current, currentStatus));
                    });
                }
                const tempIcon = new Map([
                    ['finish', 'check'],
                    ['error', 'close'],
                ]);
                let iconStatus = '';
                if (readonly && tempIcon.has(this.data.tempStatus)) {
                    iconStatus = tempIcon.get(this.data.tempStatus);
                }
                this.setData({
                    curStatus: this.data.tempStatus,
                    curSubStepItems: this.data.subStepItems || [],
                    curSubStepItemsStatus: tempStatusList || [],
                    computedIcon: iconStatus || this.data.icon,
                    index,
                    isDot: theme === 'dot' && layout === 'vertical',
                    layout,
                    theme,
                    isLastChild: steps.length - 1 === index,
                });
            },
            click() {
                this.data.parent.handleClick(this.data.index);
            },
        };
    }
};
StepItem = __decorate([
    wxComponent()
], StepItem);
export default StepItem;
