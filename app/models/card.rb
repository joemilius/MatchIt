class Card < ApplicationRecord
    has_many :game_cards, dependent: :destroy
    has_many :games, through: :game_cards
end
