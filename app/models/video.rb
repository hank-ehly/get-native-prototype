class Video < ActiveRecord::Base
  belongs_to :speaker
  belongs_to :topic
  belongs_to :language
end
