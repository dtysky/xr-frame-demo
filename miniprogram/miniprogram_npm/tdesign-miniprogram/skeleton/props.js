const props = {
    animation: {
        type: String,
    },
    externalClasses: {
        type: Array,
    },
    loading: {
        type: Boolean,
    },
    rowCol: {
        type: Array,
        value: [1, 1, 1, { width: '70%' }],
    },
    theme: {
        type: String,
        value: 'text',
    },
};
export default props;
