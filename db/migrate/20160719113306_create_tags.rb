class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.string :description
      t.string :color, default: '#ededed'

      t.timestamps null: false
    end
  end
end
