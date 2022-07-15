const props = {
    closeOnOverlayClick: {
        type: Boolean,
        value: true,
    },
    destroyOnClose: {
        type: Boolean,
        value: false,
    },
    items: {
        type: Array,
    },
    placement: {
        type: String,
        value: 'right',
    },
    showOverlay: {
        type: Boolean,
        value: true,
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
