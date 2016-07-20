class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.references :image, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
