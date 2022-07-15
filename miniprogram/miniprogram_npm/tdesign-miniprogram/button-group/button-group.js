import TComponent from '../common/component';
import config from '../common/config';
import { canIUseFormFieldButton } from '../common/version';
const { prefix } = config;
const name = `${prefix}-button-group`;
TComponent({
    behaviors: canIUseFormFieldButton() ? ['wx://form-field-button'] : [],
    properties: {
        type: {
            type: String,
            value: 'default',
        },
    },
    data: {
        className: '',
    },
    observers: {
        type() {
            this.setClass();
        },
    },
    lifetimes: {
        attached() {
            this.setClass();
        },
    },
    methods: {
        setClass() {
            const classList = [`${name}`, `${name}--${this.data.type}`];
            this.setData({
                className: classList.join(' '),
            });
        },
    },
});
