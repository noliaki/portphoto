class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :origin_path
      t.string :thumnail_path
      
      t.timestamps null: false
    end
  end
end
