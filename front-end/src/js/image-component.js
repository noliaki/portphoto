import { mapActions } from 'vuex'

export default {
  template: '#image-template',
  props: {
    image: {
      type: Object,
      require: true
    },
    index: {
      type: Number,
      require: true
    }
  },
  methods: Object.assign(
    mapActions([
      'setSelectedIndex'
    ]),
    {
      onSelectImage (index) {
        this.setSelectedIndex(index)
      }
    }
  )
}
