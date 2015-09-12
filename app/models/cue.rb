# == Schema Information
#
# Table name: cues
#
#  id                 :integer          not null, primary key
#  language_module_id :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Cue < ActiveRecord::Base
  belongs_to :language_module
  has_and_belongs_to_many :videos
end
