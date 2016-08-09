# == Schema Information
#
# Table name: stars
#
#  id         :integer          not null, primary key
#  image_id   :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_stars_on_image_id  (image_id)
#  index_stars_on_user_id   (user_id)
#

class Star < ActiveRecord::Base
  belongs_to :user
  belongs_to :image, counter_cache: :stars_count
end
