# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150826032820) do

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "collocations", force: :cascade do |t|
    t.text     "description"
    t.string   "quote"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "video_script_id"
  end

  add_index "collocations", ["video_script_id"], name: "index_collocations_on_video_script_id"

  create_table "cues", force: :cascade do |t|
    t.integer  "language_module_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "cues", ["language_module_id"], name: "index_cues_on_language_module_id"

  create_table "cues_videos", id: false, force: :cascade do |t|
    t.integer "cue_id",   null: false
    t.integer "video_id", null: false
  end

  add_index "cues_videos", ["cue_id", "video_id"], name: "idx_cue_video"
  add_index "cues_videos", ["video_id", "cue_id"], name: "idx_video_cue"

  create_table "language_modules", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "cue_id"
    t.integer  "language_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "language_modules", ["cue_id"], name: "index_language_modules_on_cue_id"
  add_index "language_modules", ["language_id"], name: "index_language_modules_on_language_id"
  add_index "language_modules", ["user_id"], name: "index_language_modules_on_user_id"

  create_table "languages", force: :cascade do |t|
    t.string   "name"
    t.string   "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "speakers", force: :cascade do |t|
    t.integer  "language_id"
    t.integer  "age_group"
    t.string   "name"
    t.text     "description"
    t.boolean  "gender"
    t.string   "location"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "speakers", ["language_id"], name: "index_speakers_on_language_id"

  create_table "topics", force: :cascade do |t|
    t.integer  "category_id"
    t.string   "name"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "topics", ["category_id"], name: "index_topics_on_category_id"

  create_table "users", force: :cascade do |t|
    t.string   "provider",                 default: "email", null: false
    t.string   "uid",                      default: "",      null: false
    t.string   "encrypted_password",       default: "",      null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",            default: 0,       null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "image"
    t.string   "email"
    t.integer  "group"
    t.integer  "site_language_preference"
    t.text     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true

  create_table "video_scripts", force: :cascade do |t|
    t.integer  "video_id"
    t.integer  "language_id"
    t.string   "content"
    t.boolean  "original"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "video_scripts", ["language_id"], name: "index_video_scripts_on_language_id"
  add_index "video_scripts", ["video_id"], name: "index_video_scripts_on_video_id"

  create_table "videos", force: :cascade do |t|
    t.integer  "speaker_id"
    t.integer  "topic_id"
    t.integer  "language_id"
    t.string   "code"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "length"
    t.integer  "category_id"
    t.string   "thumbnail_url"
  end

  add_index "videos", ["category_id"], name: "index_videos_on_category_id"
  add_index "videos", ["language_id"], name: "index_videos_on_language_id"
  add_index "videos", ["speaker_id"], name: "index_videos_on_speaker_id"
  add_index "videos", ["topic_id"], name: "index_videos_on_topic_id"

  create_table "writing_answers", force: :cascade do |t|
    t.text     "writing_answer"
    t.integer  "language_module_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "topic_id"
  end

  add_index "writing_answers", ["language_module_id"], name: "index_writing_answers_on_language_module_id"
  add_index "writing_answers", ["topic_id"], name: "index_writing_answers_on_topic_id"

  create_table "writing_prompts", force: :cascade do |t|
    t.integer  "video_id"
    t.string   "prompt"
    t.text     "example"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "writing_prompts", ["video_id"], name: "index_writing_prompts_on_video_id"

end
