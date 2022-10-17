class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_blanks

    def show
        user = User.find_by(id: session[:user_id]) 
        if user
            render json: user, status: :created
        else 
            render json: {error: "Not authorised"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else            
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.permit(:username, :phone_number, :password, :password_confirmation)
    end

    def handle_blanks(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end
end
