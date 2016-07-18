class HomeController < ApplicationController
  before_action :set_models

  private

  def set_models
    @image = current_user.images.new if user_signed_in?
  end
end
