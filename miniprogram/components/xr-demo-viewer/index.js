Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    intro: {
      type: String,
      value: '',
    },
    code: {
      type: String,
      value: '',
    },
    json: {
      type: String,
      value: '',
    },
  },
  data: {
    activeValues: [1],
    activeValuesJson: [1],
  },
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
    handleChangeJson(e) {
      this.setData({
        activeValuesJson: e.detail.value,
      });
    }
  }
})