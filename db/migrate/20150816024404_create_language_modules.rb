class CreateLanguageModules < ActiveRecord::Migration
  def change
    create_table :language_modules do |t|
      t.references :user, index: true, foreign_key: true
      t.references :cue, index: true, foreign_key: true
      t.references :language, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
