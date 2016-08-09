module AssociateModelsConcern
  extend ActiveSupport::Concern

  private

  def set_associate_models
    @images = Image.page(1)
    @image = Image.new
    @comment = Comment.new
    @star = Star.new
  end
end
