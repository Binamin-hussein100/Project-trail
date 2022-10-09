class User < ApplicationRecord
    has_password_secure
    validates :username, presence: true uniqueness: true
    has_many :projects
end
