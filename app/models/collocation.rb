# == Schema Information
#
# Table name: collocations
#
#  id              :integer          not null, primary key
#  description     :text
#  quote           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  video_script_id :integer
#

class Collocation < ActiveRecord::Base
	belongs_to :video_script
end
