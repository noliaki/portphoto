class Api::V1::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  
  before_action :authenticated_user_only

  private

  def authenticated_user_only
    redirect_to user_session_path unless user_signed_in?
  end
end
