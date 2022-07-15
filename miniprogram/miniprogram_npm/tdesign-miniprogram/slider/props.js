const props = {
    colors: {
        type: Array,
        value: ['#0052D9', 'rgba(220, 220, 220, 1)'],
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    disabledColor: {
        type: Array,
        value: ['#bbd3fb', '#dcdcdc'],
    },
    externalClasses: {
        type: Array,
    },
    label: {
        type: String,
        optionalTypes: [Boolean],
        value: false,
    },
    marks: {
        type: Object,
        optionalTypes: [Array],
        value: {},
    },
    max: {
        type: Number,
        value: 100,
    },
    min: {
        type: Number,
        value: 0,
    },
    range: {
        type: Boolean,
        value: false,
    },
    showExtremeValue: {
        type: Boolean,
        value: false,
    },
    step: {
        type: Number,
        value: 1,
    },
    value: {
        type: Number,
        optionalTypes: [Array],
        value: null,
    },
    defaultValue: {
        type: Number,
        optionalTypes: [Array],
    },
};
export default props;
