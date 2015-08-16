class CreateWritingAnswers < ActiveRecord::Migration
  def change
    create_table :writing_answers do |t|
      t.text :writing_answer
      t.references :language_module, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
