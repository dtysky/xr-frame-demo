const props = {
    block: {
        type: Boolean,
        value: false,
    },
    content: {
        type: String,
    },
    customDataset: {
        type: null,
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    externalClasses: {
        type: Array,
    },
    ghost: {
        type: Boolean,
        value: false,
    },
    icon: {
        type: String,
        value: '',
    },
    loading: {
        type: Boolean,
        value: false,
    },
    shape: {
        type: String,
        value: 'rectangle',
    },
    size: {
        type: String,
        value: 'medium',
    },
    theme: {
        type: String,
        value: 'default',
    },
    type: {
        type: String,
    },
    variant: {
        type: String,
        value: 'base',
    },
    openType: {
        type: String,
    },
    hoverStopPropagation: {
        type: Boolean,
        value: false,
    },
    hoverStartTime: {
        type: Number,
        value: 20,
    },
    hoverStayTime: {
        type: Number,
        value: 70,
    },
    lang: {
        type: String,
        value: 'en',
    },
    sessionFrom: {
        type: String,
        value: '',
    },
    sendMessageTitle: {
        type: String,
        value: '',
    },
    sendMessagePath: {
        type: String,
        value: '',
    },
    sendMessageImg: {
        type: String,
        value: '',
    },
    appParameter: {
        type: String,
        value: '',
    },
    showMessageCard: {
        type: Boolean,
        value: false,
    },
};
export default props;
