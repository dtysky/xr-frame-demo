const props = {
    disabled: {
        type: Boolean,
        value: false,
    },
    disableInput: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    inputWidth: {
        type: Number,
    },
    max: {
        type: Number,
        value: 100,
    },
    min: {
        type: Number,
        value: 0,
    },
    step: {
        type: Number,
        value: 1,
    },
    theme: {
        type: String,
        value: 'normal',
    },
    value: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number],
        value: 0,
    },
};
export default props;
