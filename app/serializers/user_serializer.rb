class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :games_played, :games_won

  has_one :profile
  has_many :chairs
  has_many :games
end
