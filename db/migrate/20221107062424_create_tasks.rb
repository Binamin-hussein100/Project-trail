class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.text :timeAlloc
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
