const props = {
    checked: {
        type: Boolean,
        value: undefined,
    },
    defaultChecked: {
        type: null,
        value: undefined,
    },
    closable: {
        type: String,
        optionalTypes: [Boolean],
        value: false,
    },
    content: {
        type: String,
        optionalTypes: [Number],
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    icon: {
        type: String,
    },
    shape: {
        type: String,
        value: 'square',
    },
    size: {
        type: String,
        value: 'medium',
    },
};
export default props;
