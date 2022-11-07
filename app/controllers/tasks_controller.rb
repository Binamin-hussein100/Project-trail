class TasksController < ApplicationController

    def index 
        tasks = Task.all
        render json: tasks, status: :created
    end

    def create
        task = Task.create!(task_params)
        if task.valid?
            render json: task, status: :created
        else
            render json: {error: task.errors.full_messages}
        end
    end

    def destroy
        task = Task.find_by(id: params[:id])
        if task
            task.destroy
            head :no_content
        else 
            render json: {error: "Task not found"}, status: :not_found
        end
    end

    private
    def task_params
        params.permit(:name, :description, :timeAlloc, :user_id)
    end
end
