class ChangeProfilePhoneNumberColumnLimit < ActiveRecord::Migration[6.1]
  def down
    change_column :profile, :phone_number, :string, limit: 15
  end
end
