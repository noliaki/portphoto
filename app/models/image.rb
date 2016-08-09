# == Schema Information
#
# Table name: images
#
#  id             :integer          not null, primary key
#  title          :string
#  description    :string
#  file           :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  comments_count :integer          default(0)
#  stars_count    :integer          default(0)
#
# Indexes
#
#  index_images_on_user_id  (user_id)
#

class Image < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :tags
  has_many :stars
  has_many :comments

  mount_uploader :file, ImageUploader

  def starred_by_user?(user)
    return if user.nil?
    stars.find_by_user_id(user.id).present?
  end
end
