class ExerciseRoutinesController < ApplicationController
    before_action :set_routine, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
    
        def index
            exercise_routine = ExerciseRoutine.all
            render json:exercise_routine
        end
        def create
            exercise_routine = ExerciseRoutine.create(exercise_routine_params)
            if exercise_routine.valid?
                render json:exercise_routine
            else 
                render json:routine.errors, status: :unprocessable_entity
            end
        end

        private
        def exercise_routine_params
            params.require(:exercise_routine).permit(:exercise_id, :routine_id, :sets, :reps, :day, :weight)
        end
end
