class RoutinesController < ApplicationController
    before_action :set_routine, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
    
        def index
            routine = Routine.all
            render json:routine
        end
        def create
            routine = Routine.create(routine_params)
            if routine.valid?
                render json:routine
            else 
                render json:routine.errors, status: :unprocessable_entity
            end
        end
        def update
            apartment = Apartment.find(params[:id])
            apartment.update(apartment_params)
            if apartment.valid?
                render json: apartment
            else
                render json: apartment.errors, status: :unprocessable_entity
            end
        end
        def destroy
            apartment = Apartment.find(params[:id])
            if apartment.destroy 
                render json: apartment
            else
                render json: apartment.errors, status: :unprocessable_entity
            end
        end
       
        private
        def routine_params
            params.require(:routine).permit(:name, :days_per_week, :user_id)
        end
    
    
end
