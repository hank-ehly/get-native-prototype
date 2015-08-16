class CreateCues < ActiveRecord::Migration
  def change
    create_table :cues do |t|
      t.references :language_module, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
