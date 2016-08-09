class ChangeColumnNameAtImage < ActiveRecord::Migration
  def change
    rename_column :images, :comment, :description
  end
end
