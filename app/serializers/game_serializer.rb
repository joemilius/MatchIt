class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_name, :level, :card_matches

  has_many :users
  has_many :chairs
  has_many :cards
  has_many :game_cards

  def card_matches
      copy1 = Card.where("id < 9")
      copy2 = Card.where("id < 9")
      all_cards = copy1 + copy2
      all_cards.shuffle
  end

end
