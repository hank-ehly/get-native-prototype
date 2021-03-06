class DropUsers < ActiveRecord::Migration
  def up
  	drop_table :users
  end
  def down
  	create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.integer :group
      t.integer :site_language_preference

      t.timestamps null: false
    end
    add_index :users, :email, unique: true
  end
end
