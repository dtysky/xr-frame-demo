const props = {
    disabled: {
        type: Boolean,
        value: undefined,
    },
    name: {
        type: String,
        value: '',
    },
    options: {
        type: Array,
    },
    value: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: false,
    },
};
export default props;
