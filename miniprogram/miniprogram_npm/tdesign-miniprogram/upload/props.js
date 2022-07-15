const props = {
    addContent: {
        type: String,
    },
    allowUploadDuplicateFile: {
        type: Boolean,
        value: false,
    },
    config: {
        type: Object,
    },
    deleteBtn: {
        type: String,
    },
    files: {
        type: Array,
        value: null,
    },
    defaultFiles: {
        type: Array,
    },
    gridConfig: {
        type: Object,
    },
    gutter: {
        type: Number,
        value: 16,
    },
    imageProps: {
        type: Object,
    },
    max: {
        type: Number,
        value: 0,
    },
    mediaType: {
        type: Array,
        value: ['image', 'video'],
    },
    requestMethod: {
        type: null,
    },
    sizeLimit: {
        type: Number,
        optionalTypes: [Object],
    },
};
export default props;
