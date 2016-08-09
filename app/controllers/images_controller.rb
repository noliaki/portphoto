class ImagesController < ApplicationController

  def create
    image = current_user.images.new(image_params)
    if image.save
      redirect_to root_path
    end
  end

  private

  def image_params
    params.require(:image).permit(
      :title,
      :description,
      :file
    )
  end
end
