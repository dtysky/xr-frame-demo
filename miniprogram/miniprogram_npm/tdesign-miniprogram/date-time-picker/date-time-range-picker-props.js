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
    mode: {
        type: String,
        value: 'date',
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
        type: Array,
        value: null,
    },
    defaultValue: {
        type: Array,
    },
    visible: {
        type: Boolean,
        value: false,
    },
};
export default props;
