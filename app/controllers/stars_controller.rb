class StarsController < ApplicationController
  before_action :authenticate_user!

  def index

  end

  def create
    star = current_user.stars.new(star_params)
    if star.save
      redirect_to root_path
    end
  end

  def show

  end

  def edit

  end

  def update

  end

  def new

  end

  def destroy

  end

  private

  def star_params
    params.require(:star).permit(
      :image_id
    )
  end
end
