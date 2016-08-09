class HomeController < ApplicationController
  include AssociateModelsConcern
  before_action :set_associate_models
end
