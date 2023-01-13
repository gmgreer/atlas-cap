class AddWeightToExerciseRoutines < ActiveRecord::Migration[7.0]
  def change
    add_column :exercise_routines, :weight, :integer
  end
end
