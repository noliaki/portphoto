import $ from 'jQuery'

const IMAGES_API_PATH = '/api/v1/images'
const COMMENTS_API_PATH = '/api/v1/images/__IMAGE_ID__/comments'

export const fetchImages = ({ commit, state }) => {
  $.ajax({
    url: IMAGES_API_PATH
  }).then(
    (res) => {
      commit('SET_IMAGES', res)
    }
  )
}

export const setSelectedIndex = ({ commit, state }, index) => {
  commit('IMAGE_SELECTED', index)
}

export const releaseIndex = ({ commit, state }) => {
  commit('RELEASE_INDEX')
}

export const postComment = ({ commit, state }, comment) => {
  const selectedImage = state.images[state.selectedIndex]
  $.ajax({
    url: COMMENTS_API_PATH.replace('__IMAGE_ID__', selectedImage.id),
    type: 'POST',
    data: {
      comment: {
        image_id: selectedImage.id,
        content: comment
      }
    }
  }).then(
    (res) => {
      console.log(res)
      commit('SUCCESS_POST_COMMENT')
    },
    (error) => {
      console.log(error)
      commit('SUCCESS_POST_COMMENT')
    }
  )
}
