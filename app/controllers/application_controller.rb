class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	skip_before_action :verify_authenticity_token

	def index
	end

	def add_member
		group = Group.first
		@member = group.members.create(first_name: params[:first_name], last_name: params[:last_name])
		render 'member', :layout => false
	end
end
