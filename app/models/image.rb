# == Schema Information
#
# Table name: images
#
#  id            :integer          not null, primary key
#  origin_path   :string
#  thumnail_path :string
#  user_id       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_images_on_user_id  (user_id)
#

class Image < ActiveRecord::Base
	belongs_to :user

	mount_uploader :path, ImageUploader
end
