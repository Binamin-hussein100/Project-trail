class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :phone_number, :bio
end
