class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.references :speaker, index: true, foreign_key: true
      t.references :topic, index: true, foreign_key: true
      t.references :language, index: true, foreign_key: true
      t.string :code

      t.timestamps null: false
    end
  end
end
