const props = {
    adjustPosition: {
        type: Boolean,
        value: true,
    },
    align: {
        type: String,
        value: 'left',
    },
    borderless: {
        type: Boolean,
        value: false,
    },
    clearable: {
        type: Boolean,
        value: false,
    },
    confirmHold: {
        type: Boolean,
        value: false,
    },
    confirmType: {
        type: String,
        value: 'done',
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    errorMessage: {
        type: String,
        value: '',
    },
    externalClasses: {
        type: Array,
    },
    focus: {
        type: Boolean,
        value: false,
    },
    format: {
        type: null,
    },
    label: {
        type: String,
    },
    maxcharacter: {
        type: Number,
    },
    maxlength: {
        type: Number,
    },
    placeholder: {
        type: String,
        value: undefined,
    },
    prefixIcon: {
        type: String,
    },
    readonly: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: 'small',
    },
    status: {
        type: String,
    },
    suffix: {
        type: String,
    },
    suffixIcon: {
        type: String,
    },
    tips: {
        type: String,
    },
    type: {
        type: String,
        value: 'text',
    },
    value: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;
