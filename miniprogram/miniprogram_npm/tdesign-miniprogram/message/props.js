const props = {
    action: {
        type: String,
    },
    align: {
        type: String,
        value: 'left',
    },
    closeBtn: {
        type: String,
        optionalTypes: [Boolean],
        value: undefined,
    },
    content: {
        type: String,
    },
    duration: {
        type: Number,
        value: 3000,
    },
    externalClasses: {
        type: Array,
    },
    icon: {
        type: String,
        optionalTypes: [Boolean],
        value: true,
    },
    marquee: {
        type: Boolean,
        optionalTypes: [Object],
        value: false,
    },
    offset: {
        type: Array,
    },
    theme: {
        type: String,
        value: 'info',
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
