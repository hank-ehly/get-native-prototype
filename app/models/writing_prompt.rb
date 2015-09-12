# == Schema Information
#
# Table name: writing_prompts
#
#  id         :integer          not null, primary key
#  video_id   :integer
#  prompt     :string
#  example    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WritingPrompt < ActiveRecord::Base
  belongs_to :video
end
