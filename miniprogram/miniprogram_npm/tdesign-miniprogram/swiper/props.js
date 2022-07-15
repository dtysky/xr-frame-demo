const props = {
    animation: {
        type: String,
        value: 'slide',
    },
    autoplay: {
        type: Boolean,
        value: true,
    },
    current: {
        type: Number,
        value: 0,
    },
    direction: {
        type: String,
        value: 'horizontal',
    },
    duration: {
        type: Number,
        value: 300,
    },
    height: {
        type: Number,
    },
    interval: {
        type: Number,
        value: 5000,
    },
    navigation: {
        type: Object,
    },
};
export default props;
