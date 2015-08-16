# == Schema Information
#
# Table name: topics
#
#  id          :integer          not null, primary key
#  category_id :integer
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Topic < ActiveRecord::Base
  belongs_to :category
end
