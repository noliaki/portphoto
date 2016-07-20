class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :content
      t.references :image, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
  end
end
