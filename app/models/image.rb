# == Schema Information
#
# Table name: images
#
#  id            :integer          not null, primary key
#  origin_path   :string
#  thumnail_path :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Image < ActiveRecord::Base
	belongs_to :user
end
