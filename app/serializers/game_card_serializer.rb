class GameCardSerializer < ActiveModel::Serializer
  attributes :id
  has_one :game
  has_one :card
end
