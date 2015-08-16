class CreateCollocations < ActiveRecord::Migration
  def change
    create_table :collocations do |t|
      t.text :description
      t.string :quote

      t.timestamps null: false
    end
  end
end
