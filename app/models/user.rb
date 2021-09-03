class User < ApplicationRecord
    has_secure_password
    

    has_one :profile, dependent: :destroy

    accepts_nested_attributes_for :profile
end
