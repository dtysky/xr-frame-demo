const props = {
    animation: {
        type: Object,
    },
    externalClasses: {
        type: Array,
    },
    placement: {
        type: String,
        value: 'top',
    },
    showBottomLine: {
        type: Boolean,
        value: true,
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
