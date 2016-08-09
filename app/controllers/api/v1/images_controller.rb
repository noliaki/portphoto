class Api::V1::ImagesController < Api::V1::ApplicationController
  skip_before_action :authenticated_user_only, only: [:index]

  def index
    @images = Image.page(params[:page] || 1)
  end

end
