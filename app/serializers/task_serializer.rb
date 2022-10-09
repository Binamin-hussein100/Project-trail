class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :aproximate_comp_date
  has_one :project
end
