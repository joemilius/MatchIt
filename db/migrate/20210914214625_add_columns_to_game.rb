class AddColumnsToGame < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :solo_game, :boolean
    add_column :games, :completed, :boolean
  end
end
