# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  email                    :string
#  password_digest          :string
#  group                    :integer
#  site_language_preference :integer
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
end
