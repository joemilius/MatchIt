class Game < ApplicationRecord
    has_many :chairs, dependent: :destroy
    has_many :users, through: :chairs
    has_many :game_cards, dependent: :destroy
    has_many :cards, through: :game_cards

    accepts_nested_attributes_for :chairs
end
