class CommentsController < ApplicationController
  before_action :authenticate_user!

  def index
    @comments = Image.find(params[:id]).comments
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
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

  def comment_params
    params.require(:comment).permit(
      :image_id,
      :content
    ).merge(user: current_user)
  end
end
