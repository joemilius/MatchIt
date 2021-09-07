class User < ApplicationRecord
    has_secure_password
    has_one :profile, dependent: :destroy
    has_many :chairs, dependent: :destroy
    has_many :games, through: :chairs
    accepts_nested_attributes_for :profile

    validates :username, presence: true, uniqueness: true
end
