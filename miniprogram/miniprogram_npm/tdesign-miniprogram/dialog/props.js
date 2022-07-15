const props = {
    actions: {
        type: Array,
    },
    buttonLayout: {
        type: String,
        value: 'horizontal',
    },
    cancelBtn: {
        type: String,
        optionalTypes: [Object],
        value: '',
    },
    closeOnOverlayClick: {
        type: Boolean,
        value: true,
    },
    confirmBtn: {
        type: String,
        optionalTypes: [Object],
        value: '',
    },
    content: {
        type: String,
    },
    externalClasses: {
        type: Array,
    },
    preventScrollThrough: {
        type: Boolean,
        value: true,
    },
    showOverlay: {
        type: Boolean,
        value: true,
    },
    title: {
        type: String,
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
