const props = {
    align: {
        type: String,
        value: 'left',
    },
    allowUncheck: {
        type: Boolean,
        value: false,
    },
    checked: {
        type: Boolean,
        value: null,
    },
    defaultChecked: {
        type: Boolean,
        value: false,
    },
    color: {
        type: String,
        value: '#0052d9',
    },
    content: {
        type: String,
    },
    contentDisabled: {
        type: Boolean,
        value: false,
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: String,
        optionalTypes: [Array],
        value: 'fill-circle',
    },
    label: {
        type: String,
    },
    maxContentRow: {
        type: Number,
        value: 5,
    },
    maxLabelRow: {
        type: Number,
        value: 3,
    },
    name: {
        type: String,
        value: '',
    },
    value: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: false,
    },
};
export default props;
