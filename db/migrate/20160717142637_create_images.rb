class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.string :comment
      t.string :file
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
