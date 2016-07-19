# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  title      :string
#  comment    :string
#  file       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_images_on_user_id  (user_id)
#

class Image < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :tags

  mount_uploader :file, ImageUploader
end
