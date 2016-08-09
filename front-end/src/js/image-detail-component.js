import { mapActions } from 'vuex'

export default {
  template: '#image-detail-template',
  data () {
    return {
      commentContent: '',
      isPosting: ''
    }
  },
  props: {
    selectedImage: {
      type: Object
    },
    hasSelectedImage: {
      type: Boolean,
      require: true
    }
  },
  methods: Object.assign(
    {
      onCloseModal () {
        this.releaseIndex()
      },
      onClickPost () {
        this.postComment(this.commentContent)
      }
    },
    mapActions([
      'releaseIndex',
      'postComment'
    ])
  )
}
