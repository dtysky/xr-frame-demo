const props = {
    error: {
        type: String,
        value: 'default',
    },
    externalClasses: {
        type: Array,
    },
    lazy: {
        type: Boolean,
        value: false,
    },
    loading: {
        type: String,
        value: 'default',
    },
    shape: {
        type: String,
        value: 'square',
    },
    src: {
        type: String,
        value: '',
    },
    mode: {
        type: String,
        value: 'scaleToFill',
    },
    webp: {
        type: Boolean,
        value: false,
    },
    showMenuByLongpress: {
        type: Boolean,
        value: false,
    },
};
export default props;
