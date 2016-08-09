class Api::V1::CommentsController < Api::V1::ApplicationController
  def index
    @comments = Image.find(params[:id]).comments
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      image_comments = Image.find(params[:id]).comments
      render json: image_comments, status: :created
    else
      render json: comment.error, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(
      :image_id,
      :content
    ).merge(user: current_user)
  end
end
