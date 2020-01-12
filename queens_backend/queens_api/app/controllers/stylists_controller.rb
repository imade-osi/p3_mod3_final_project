class StylistsController < ApplicationController

    def index 
        @stylists = Stylist.all
        render json: @stylists
    end

    def update 
        @stylist = Stylist.find(params[:id])
        @stylist.update(stylist_param)

        # @appointment.date = appnt_param[:date]
        # @appointment.save  
        render json: @stylist
    end 

    def stylist_param
        params.permit(:name)
    end 


end
