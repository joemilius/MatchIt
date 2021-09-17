class ChangeProfilePhoneNumberColumn < ActiveRecord::Migration[6.1]
  def down
    change_column :profiles, :phone_number, :string, limit: 12
  end
end
