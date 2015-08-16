class LanguageModule < ActiveRecord::Base
  belongs_to :user
  belongs_to :cue
  belongs_to :language
end
