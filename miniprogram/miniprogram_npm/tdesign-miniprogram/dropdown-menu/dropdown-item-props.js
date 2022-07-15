const props = {
    disabled: {
        type: Boolean,
        value: false,
    },
    label: {
        type: String,
        value: '',
    },
    multiple: {
        type: Boolean,
        value: false,
    },
    options: {
        type: Array,
        value: [],
    },
    optionsColumns: {
        type: String,
        optionalTypes: [Number],
        value: 1,
    },
    optionsLayout: {
        type: String,
        value: 'columns',
    },
    value: {
        type: null,
        optionalTypes: [Number, Array],
        value: null,
    },
    defaultValue: {
        type: null,
        optionalTypes: [Number, Array],
        value: null,
    },
};
export default props;
