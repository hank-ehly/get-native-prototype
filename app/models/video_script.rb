# == Schema Information
#
# Table name: video_scripts
#
#  id          :integer          not null, primary key
#  video_id    :integer
#  language_id :integer
#  content     :string
#  original    :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class VideoScript < ActiveRecord::Base
  belongs_to :video
  belongs_to :language
end
