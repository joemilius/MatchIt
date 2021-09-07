class Game < ApplicationRecord
    has_many :chairs, dependent: :destroy
    has_many :games, through: :chairs
end
