class CreateJoinTableImageTag < ActiveRecord::Migration
  def change
    create_join_table :images, :tags do |t|
    end
  end
end
