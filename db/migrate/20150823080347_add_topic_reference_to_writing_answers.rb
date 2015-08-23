class AddTopicReferenceToWritingAnswers < ActiveRecord::Migration
  def change
    add_reference :writing_answers, :topic, index: true, foreign_key: true
  end
end
