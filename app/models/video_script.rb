class VideoScript < ActiveRecord::Base
  belongs_to :video
  belongs_to :language
end
