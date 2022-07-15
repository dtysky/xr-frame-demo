const props = {
    colors: {
        type: Array,
    },
    customValue: {
        type: Array,
        value: [true, false],
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    label: {
        type: String,
        value: '',
    },
    loading: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: 'medium',
    },
    value: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: null,
    },
};
export default props;
