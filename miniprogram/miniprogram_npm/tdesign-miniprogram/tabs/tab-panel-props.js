const props = {
    destroyOnHide: {
        type: Boolean,
        value: true,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    label: {
        type: String,
    },
    panel: {
        type: String,
    },
    value: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;
