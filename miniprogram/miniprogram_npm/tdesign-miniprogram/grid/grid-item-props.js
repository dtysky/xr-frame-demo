const props = {
    description: {
        type: String,
    },
    externalClasses: {
        type: Array,
    },
    image: {
        type: String,
    },
    jumpType: {
        type: String,
        value: 'navigate-to',
    },
    layout: {
        type: String,
        value: 'vertical',
    },
    text: {
        type: String,
    },
    url: {
        type: String,
        value: '',
    },
};
export default props;
