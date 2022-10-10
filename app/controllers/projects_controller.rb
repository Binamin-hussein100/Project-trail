class ProjectsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :handle_blanks

    before_action :authorize
    def index
        projects = Project.all
        render json: projects, status: :created
    end

    def create
        project = Project.create!(project_params)
        if project.valid?
            render json: project, status: :created
        else 
            render json: {error: project.errors.full_messages}, status: :unprocessable_entity  
        end
    end

    private
    def project_params
        params.permit(:title, :description, :user)
    end

    def handle_blanks(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? user_id
    end
end
