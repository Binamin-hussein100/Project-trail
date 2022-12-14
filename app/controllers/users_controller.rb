class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_blanks

    def index
        users = User.all 
        render json: users
    end

    def show
        current_user = User.find_by(session[:user_id]) 
        if current_user
            render json: current_user, status: :created
        else 
            render json: {error: "Not authorised"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = @user.id
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
