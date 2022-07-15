const props = {
    cancelBtn: {
        type: String,
        value: '',
    },
    confirmBtn: {
        type: String,
        value: '',
    },
    disableDate: {
        type: Object,
        optionalTypes: [Array, null],
    },
    externalClasses: {
        type: Array,
    },
    format: {
        type: String,
        value: 'YYYY-MM-DD',
    },
    header: {
        type: Boolean,
        value: true,
    },
    mode: {
        type: String,
        optionalTypes: [Array],
        value: ['year', 'month', 'date'],
    },
    showWeek: {
        type: Boolean,
        value: false,
    },
    title: {
        type: String,
        value: '',
    },
    value: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number],
    },
    visible: {
        type: Boolean,
        value: false,
    },
};
export default props;
