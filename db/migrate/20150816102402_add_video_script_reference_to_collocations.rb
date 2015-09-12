class AddVideoScriptReferenceToCollocations < ActiveRecord::Migration
  def change
  	add_reference :collocations, :video_script, index: true, foreign_key: true
  end
end
