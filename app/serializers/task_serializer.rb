class TaskSerializer < ActiveModel::Serializer
  attributes :id, :"name,", :description, :approximate_comp_time
end
