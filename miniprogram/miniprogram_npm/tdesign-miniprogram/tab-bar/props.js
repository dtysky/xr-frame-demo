const props = {
    bordered: {
        type: Boolean,
        value: true,
    },
    color: {
        type: Array,
        value: ['#0052D9', 'rgba(0, 0, 0, .6)'],
    },
    externalClasses: {
        type: Array,
    },
    fixed: {
        type: Boolean,
        value: true,
    },
    safeAreaInsetBottom: {
        type: Boolean,
        value: true,
    },
    split: {
        type: Boolean,
        value: true,
    },
    value: {
        type: String,
        optionalTypes: [Number, Array],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number, Array],
        value: undefined,
    },
};
export default props;
