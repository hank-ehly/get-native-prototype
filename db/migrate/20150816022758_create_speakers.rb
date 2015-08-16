class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|
      t.references :language, index: true, foreign_key: true
      t.integer :age_group
      t.string :name
      t.text :description
      t.boolean :gender
      t.string :location

      t.timestamps null: false
    end
  end
end
