class CreateJoinTableCollocationVideoScript < ActiveRecord::Migration
  def change
    create_join_table :collocations, :video_scripts do |t|
      t.index [:collocation_id, :video_script_id], name: :idx_collocation_video_script
      t.index [:video_script_id, :collocation_id], name: :idx_video_script_collocation
    end
  end
end
