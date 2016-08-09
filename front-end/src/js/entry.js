import Vue from 'vue/dist/vue'
import store from './vuex/store'
import imageComponent from './image-component.js'
import imageDetailComponent from './image-detail-component.js'
import { mapGetters, mapActions } from 'vuex'

const app = new Vue({
  el: '#image-app',
  store,
  components: {
    imageComponent,
    imageDetailComponent
  },
  computed: mapGetters([
    'images',
    'selectedIndex',
    'selectedImage',
    'hasSelectedImage'
  ]),
  methods: mapActions([
    'fetchImages'
  ]),
  created () {
    this.fetchImages()
  }
})


// 'use strict'
//
// import $ from 'jquery'
// import Vue from 'vue/dist/vue.js'
// import Modal from './modal.js'
//
// const IMAGES_API_PATH = '/api/v1/images'
// const COMMENTS_API_PATH = '/api/v1/images/__IMAGE_ID__/comments'
//
// const bus = new Vue()
//
// const imageComponent = Vue.extend({
//   template: '#image-template',
//   props: {
//     image: {
//       type: Object,
//       require: true
//     },
//     index: {
//       type: Number,
//       require: true
//     }
//   },
//   methods: {
//
//   }
// })
//
// const imageDetailComponent = Vue.extend({
//   template: '#image-detail-template',
//   data () {
//     return {
//       commentContent: '',
//       isPosting: false
//     }
//   },
//   props: {
//     selectedImage: {
//       type: Object
//     },
//     hasSelectedImage: {
//       type: Boolean
//     }
//   },
//   methods: {
//     onClickPost () {
//       if (this.isPosting) {
//         return
//       }
//       this.isPosting = true
//       bus.$emit('onCommentPosted', this.commentContent)
//     },
//     onSuccessPostComment () {
//       this.commentContent = ''
//       this.isPosting = false
//     },
//     onFaildPostComment () {
//       this.isPosting = false
//     },
//     close () {
//       bus.$emit('onImageDeselected')
//     }
//   },
//   created () {
//     bus.$on('onSuccessPostComment', this.onSuccessPostComment)
//     bus.$on('onFaildPostComment', this.onFaildPostComment)
//   }
// })
//
// const imageApp = new Vue({
//   el: '#image-app',
//   data: {
//     images: [],
//     selectedIndex: null
//   },
//   computed: {
//     selectedImage () {
//       return this.hasSelectedImage ? this.images[this.selectedIndex] : {}
//     },
//     hasSelectedImage () {
//       return !!this.images[this.selectedIndex]
//     },
//     selectedImageCommentApiPath () {
//       return COMMENTS_API_PATH.replace('__IMAGE_ID__', this.selectedImage.id)
//     }
//   },
//   methods: {
//     onStarClick () {
//       // bus.$emit('onImageSelected', this.index)
//     },
//     onBoxClick (index) {
//       console.log(index)
//       this.selectedIndex = index
//       // bus.$emit('onImageSelected', this.index)
//     },
//     fetchImages () {
//       $.ajax({
//         url: IMAGES_API_PATH
//       }).then(
//         (res) => {
//           this.images = res
//         }
//       )
//     },
//     fetchComments () {
//       $.ajax({
//         url: this.selectedImageCommentApiPath
//       }).then(
//         (res) => {
//           this.selectedImage.comments = res
//         }
//       )
//     },
//     postCommentToSelectedImage (comment) {
//       $.ajax({
//         url: this.selectedImageCommentApiPath,
//         type: 'POST',
//         data: {
//           comment: {
//             image_id: this.selectedImage.id,
//             content: comment
//           }
//         }
//       }).then(
//         (res) => {
//           console.log(res)
//           bus.$emit('onSuccessPostComment')
//           this.selectedImage.comments = res
//         },
//         (error) => {
//           console.log(error)
//           bus.$emit('onFaildPostComment')
//         }
//       )
//     },
//     setSelectedIndex (index) {
//       this.selectedIndex = index
//     }
//   },
//   created () {
//     this.fetchImages()
//     bus.$on('onImageSelected', (index) => {
//       this.setSelectedIndex(index)
//     })
//     bus.$on('onImageDeselected', () => {
//       this.setSelectedIndex(null)
//     })
//     bus.$on('onCommentPosted', (comment) => {
//       this.postCommentToSelectedImage(comment)
//     })
//   },
//   components: {
//     imageComponent,
//     imageDetailComponent
//   }
// })
//
// // imageApp.$on('openDetail', (index) => {
// //   console.log(`on: ${index}`)
// // })
