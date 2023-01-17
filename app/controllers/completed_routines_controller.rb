class CompletedRoutinesController < ApplicationController
    before_action :set_routine, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
    
        def index
            completed_routine = CompletedRoutine.all
            render json: completed_routine
        end
end
