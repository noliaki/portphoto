export default class Modal {
  constructor (el) {
    this.$el = $(el)
  }
  open () {
    this.$el.show()
  }
  close () {
    this.$el.hide()
  }
}
