const props = {
    closeBtn: {
        type: Boolean,
    },
    closeOnOverlayClick: {
        type: Boolean,
        value: true,
    },
    content: {
        type: String,
    },
    destroyOnClose: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    placement: {
        type: String,
        value: 'top',
    },
    preventScrollThrough: {
        type: Boolean,
        value: true,
    },
    showOverlay: {
        type: Boolean,
        value: true,
    },
    transitionProps: {
        type: Object,
    },
    visible: {
        type: Boolean,
        value: false,
    },
    zIndex: {
        type: Number,
    },
};
export default props;
