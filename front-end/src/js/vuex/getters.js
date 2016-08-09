export const images           = (state) => state.images
export const selectedIndex    = (state) => state.selectedIndex
export const selectedImage    = (state) => state.images[state.selectedIndex] || {}
export const hasSelectedImage = (state) => !!state.images[state.selectedIndex]
