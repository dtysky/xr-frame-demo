const props = {
    align: {
        type: String,
        value: 'left',
    },
    checkAll: {
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
    },
    disabled: {
        type: Boolean,
        value: undefined,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: Array,
    },
    indeterminate: {
        type: Boolean,
        value: false,
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
    readonly: {
        type: Boolean,
        value: false,
    },
    value: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;
