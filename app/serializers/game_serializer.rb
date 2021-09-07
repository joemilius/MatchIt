class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :level

  has_many :users
end
