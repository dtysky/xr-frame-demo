const props = {
    allowHalf: {
        type: Boolean,
        value: false,
    },
    color: {
        type: String,
        optionalTypes: [Array],
        value: '#ED7B2F',
    },
    count: {
        type: Number,
        value: 5,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    gap: {
        type: Number,
        value: 6,
    },
    showText: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: '',
    },
    texts: {
        type: Array,
        value: [],
    },
    value: {
        type: Number,
        value: null,
    },
    defaultValue: {
        type: Number,
        value: 0,
    },
    variant: {
        type: String,
        value: 'outline',
    },
};
export default props;
