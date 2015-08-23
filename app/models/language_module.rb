# == Schema Information
#
# Table name: language_modules
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  cue_id      :integer
#  language_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class LanguageModule < ActiveRecord::Base
  belongs_to :user
  belongs_to :cue
  belongs_to :language
  has_many :writing_answers
end
