class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :timeAlloc
  has_one :user
end
