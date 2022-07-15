const props = {
    color: {
        type: String,
        optionalTypes: [Object, Array],
        value: '',
    },
    label: {
        type: Boolean,
        value: true,
    },
    percentage: {
        type: Number,
        value: 0,
    },
    status: {
        type: String,
    },
    strokeWidth: {
        type: String,
        optionalTypes: [Number],
    },
    trackColor: {
        type: String,
        value: '',
    },
};
export default props;
