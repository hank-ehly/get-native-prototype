# SQLEditor export: Rails Migration
# id columns are removed
class NativeSchema < ActiveRecord::Migration 
	
  def change

    create_table :users do |t|
      t.string :email
      t.string :password_digest
      # t.boolean :searchable
      # t.integer :level
      t.integer :group
      # t.integer :age_group
      # t.boolean :gender
      # t.string :location
      t.integer :site_language_preference
      # t.integer :total_study_time
    end

    create_table :collocations do |t|
      t.text :description
      t.string :quote
    end

    create_table :cues do |t|
      t.references :language_module
    end
    add_index(:cues, [:language_module_id], :name => :language_module_id_idx)

    create_table :speakers do |t|
      t.references :language
      t.integer :age_group
      t.string :name
      t.text :description
      t.boolean :gender
      t.string :location
    end
    add_index(:speakers, [:language_id], :name => :language_id_idx)

    # create_table :progress_snapshots do |t|
    #   t.references :language_module
    # end
    # add_index(:progress_snapshots, [:language_module_id], :name => :language_module_id_idxa)

    create_table :collocations_video_scripts do |t|
      t.references :video_script
      t.references :collocation
    end
    add_index(:collocations_video_scripts, [:video_script_id], :name => :video_script_id_idx)
    add_index(:collocations_video_scripts, [:collocation_id], :name => :collocation_id_idx)

    create_table :writing_answers do |t|
      # t.references :progress_snapshot
      t.text :writing_answer
      t.references :language_module
    end
    # add_index language_module << ok
    # add_index(:writing_answers, [:progress_snapshot_id], :name => :progress_snapshot_id_idx)

    create_table :videos do |t|
      t.references :speaker
      t.references :topic
      t.references :language
      t.integer :length
      # t.integer :view_count
      t.string :code
    end
    add_index(:videos, [:speaker_id], :name => :speaker_id_idx)
    add_index(:videos, [:topic_id], :name => :topic_id_idx)
    add_index(:videos, [:language_id], :name => :language_id_idxa)

    create_table :categories do |t|
      t.string :name
    end

    create_table :languages do |t|
      t.string :name
      t.string :code
    end

    # create_table :speakers_users do |t|
    #   t.references :user
    #   t.references :speaker
    # end
    # add_index(:speakers_users, [:user_id], :name => :user_id_idx)
    # add_index(:speakers_users, [:speaker_id], :name => :speaker_id_idxa)

    create_table :topics do |t|
      t.references :category
      t.string :name
    end
    add_index(:topics, [:category_id], :name => :category_id_idx)

    create_table :writing_prompts do |t|
      t.references :video
      t.string :prompt
      t.text :example
    end
    add_index(:writing_prompts, [:video_id], :name => :video_id_idx)

    create_table :video_scripts do |t|
      t.references :video
      t.references :language
      t.string :content
      t.boolean :original
    end
    add_index(:video_scripts, [:video_id], :name => :video_id_idxa)
    add_index(:video_scripts, [:language_id], :name => :language_id_idxb)

    create_table :language_modules do |t|
      # t.references :progress_snapshot
      t.references :user
      t.references :cue
      t.references :language
    end
    # add_index(:language_modules, [:progress_snapshot_id], :name => :progress_snapshot_id_idxa)
    add_index(:language_modules, [:user_id], :name => :user_id_idxa)
    add_index(:language_modules, [:cue_id], :name => :cue_id_idx)
    add_index(:language_modules, [:language_id], :name => :language_id_idxc)

    create_table :cues_videos do |t|
      t.references :cue
      t.references :video
    end
    add_index(:cues_videos, [:cue_id], :name => :cue_id_idxa)
    add_index(:cues_videos, [:video_id], :name => :video_id_idxb)

    # create_table :categories_users do |t|
    #   t.references :category
    #   t.references :user
    # end
    # add_index(:categories_users, [:category_id], :name => :category_id_idxa)
    # add_index(:categories_users, [:user_id], :name => :user_id_idxb)

    # create_table :collocations_progress_snapshots do |t|
      # t.references :collocation
      # t.references :progress_snapshot
    # end
    # add_index(:collocations_progress_snapshots, [:collocation_id], :name => :collocation_id_idxa)
    # add_index(:collocations_progress_snapshots, [:progress_snapshot_id], :name => :progress_snapshot_id_idxb)

  end

end
