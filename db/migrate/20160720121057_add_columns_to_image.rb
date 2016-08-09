class AddColumnsToImage < ActiveRecord::Migration
  def change
    add_column :images, :comments_count, :integer, default: 0
    add_column :images, :stars_count, :integer, default: 0
  end
end
