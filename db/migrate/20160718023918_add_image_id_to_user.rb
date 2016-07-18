class AddImageIdToUser < ActiveRecord::Migration
  def change
    add_reference :users, :image, index: true
  end
end
