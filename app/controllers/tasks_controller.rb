class TasksController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_blanks

    before_action :authorize
    def index
        tasks = Task.all 
        render json: tasks, status: :created
    end

    def create
        task = Task.create!(task_params)
        if task.valid?
            render json: task , status: :created
        else 
            render json: {error: task.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    def task_params
        params.permit(:name, :description, :project, :aproximate_comp_date)
    end

    def handle_blanks
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
