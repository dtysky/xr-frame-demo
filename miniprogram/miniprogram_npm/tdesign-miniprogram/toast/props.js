const props = {
    direction: {
        type: String,
        value: 'row',
    },
    duration: {
        type: Number,
        value: 2000,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: String,
        value: '',
    },
    message: {
        type: String,
    },
    placement: {
        type: String,
        value: 'middle',
    },
    preventScrollThrough: {
        type: Boolean,
        value: false,
    },
    theme: {
        type: String,
    },
};
export default props;
