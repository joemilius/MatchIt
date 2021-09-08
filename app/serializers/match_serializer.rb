class MatchSerializer < ActiveModel::Serializer
  attributes :id
  has_one :game_card
  has_one :chair
end
