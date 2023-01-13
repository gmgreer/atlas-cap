class CreateExerciseRoutines < ActiveRecord::Migration[7.0]
  def change
    create_table :exercise_routines do |t|
      t.references :exercise, null: false, foreign_key: true
      t.references :routine, null: false, foreign_key: true
      t.integer :sets
      t.integer :reps
      t.string :day

      t.timestamps
    end
  end
end
