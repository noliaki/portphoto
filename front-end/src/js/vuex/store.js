import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  images: [],
  selectedIndex: null,

}

const mutations = {
  SET_IMAGES (state, images) {
    state.images = images
  },
  IMAGE_SELECTED (state, index) {
    state.selectedIndex = index
  },
  RELEASE_INDEX (state) {
    state.selectedIndex = null
  },
  SUCCESS_POST_COMMENT (state) {

  },
  FAIL_POST_COMMENT (state) {
    
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
