class CreateVideoScripts < ActiveRecord::Migration
  def change
    create_table :video_scripts do |t|
      t.references :video, index: true, foreign_key: true
      t.references :language, index: true, foreign_key: true
      t.string :content
      t.boolean :original

      t.timestamps null: false
    end
  end
end
