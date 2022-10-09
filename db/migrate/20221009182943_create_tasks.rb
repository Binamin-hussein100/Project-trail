class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name,
      t.text :description
      t.integer :approximate_comp_time

      t.timestamps
    end
  end
end
