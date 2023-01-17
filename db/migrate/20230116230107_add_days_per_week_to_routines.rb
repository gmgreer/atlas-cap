class AddDaysPerWeekToRoutines < ActiveRecord::Migration[7.0]
  def change
    add_column :routines, :days_per_week, :integer
  end
end
