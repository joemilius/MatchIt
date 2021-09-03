class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :password_digest
      t.integer :games_played
      t.integer :games_won

      t.timestamps
    end
  end
end
