class Api::V1::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  before_action :authenticated_user_only

  private

  def authenticated_user_only
    render json: { error: 'unauthorized' }, status: 401 unless user_signed_in?
  end
end
