class CreateJoinTableCueVideo < ActiveRecord::Migration
  def change
    create_join_table :cues, :videos do |t|
      t.index [:cue_id, :video_id], name: :idx_cue_video
      t.index [:video_id, :cue_id], name: :idx_video_cue
    end
  end
end
