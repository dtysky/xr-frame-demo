const props = {
    align: {
        type: String,
        value: 'center',
    },
    border: {
        type: Boolean,
        optionalTypes: [Object],
        value: false,
    },
    column: {
        type: Number,
        value: 4,
    },
    externalClasses: {
        type: Array,
    },
    gutter: {
        type: Number,
    },
    hover: {
        type: Boolean,
        value: false,
    },
};
export default props;
