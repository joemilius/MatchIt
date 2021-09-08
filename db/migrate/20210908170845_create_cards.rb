class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :color
      t.string :icon

      t.timestamps
    end
  end
end
