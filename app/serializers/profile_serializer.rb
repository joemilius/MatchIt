class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number, :image

  belongs_to :user
end
