# == Schema Information
#
# Table name: writing_answers
#
#  id                 :integer          not null, primary key
#  writing_answer     :text
#  language_module_id :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class WritingAnswer < ActiveRecord::Base
  belongs_to :language_module
end
