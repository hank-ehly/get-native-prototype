# == Schema Information
#
# Table name: speakers
#
#  id          :integer          not null, primary key
#  language_id :integer
#  age_group   :integer
#  name        :string
#  description :text
#  gender      :boolean
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Speaker < ActiveRecord::Base
  belongs_to :language
end
