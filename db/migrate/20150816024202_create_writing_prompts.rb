class CreateWritingPrompts < ActiveRecord::Migration
  def change
    create_table :writing_prompts do |t|
      t.references :video, index: true, foreign_key: true
      t.string :prompt
      t.text :example

      t.timestamps null: false
    end
  end
end
