const props = {
    content: {
        type: String,
    },
    disabled: {
        type: null,
        value: undefined,
    },
    expandIcon: {
        type: Boolean,
        value: true,
    },
    header: {
        type: String,
    },
    headerRightContent: {
        type: String,
        optionalTypes: [Boolean],
    },
    value: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;
