class AppointmentsController < ApplicationController
    def index 
        @appointments = Appointment.all.sort
        render json: @appointments 
    end 

    def create 
         @appointment = Appointment.create(appnt_param)
         render json: @appointment    
    end 

    def show 
        @appointment = Appointment.find(params[:id])
        render json: @appointment
    end 

    def update
        @appointment = Appointment.find(params[:id])
        @appointment.update(appnt_param)

        # @appointment.date = appnt_param[:date]
        # @appointment.save  
        render json: @appointment
    end 

    def destroy
        @appointment = Appointment.find(params[:id])
        @appointment.delete
    end 

    private 

    def appnt_param
        params.permit(:stylist_id, :date, :time)
    end 
end
