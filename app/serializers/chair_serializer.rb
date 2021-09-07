class ChairSerializer < ActiveModel::Serializer
  attributes :id, :chair_number
  has_one :user
  has_one :game
end
