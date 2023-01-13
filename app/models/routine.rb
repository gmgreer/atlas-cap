class Routine < ApplicationRecord
  belongs_to :user
  has_many :exercise_routines
end
