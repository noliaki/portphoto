class HomeController < ApplicationController
  before_action :set_models

  private

  def set_models
    @images = Image.all
    @image = current_user.images.new if user_signed_in?
  end
end
