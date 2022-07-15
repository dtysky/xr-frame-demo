const props = {
    current: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    defaultCurrent: {
        type: String,
        optionalTypes: [Number],
        value: 0,
    },
    currentStatus: {
        type: String,
        value: 'process',
    },
    externalClasses: {
        type: Array,
    },
    layout: {
        type: String,
        value: 'horizontal',
    },
    readonly: {
        type: Boolean,
        value: false,
    },
    theme: {
        type: String,
        value: 'default',
    },
};
export default props;
