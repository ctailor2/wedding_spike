class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
	skip_before_action :verify_authenticity_token

	def index
	end

	def findrsvp
		sleep(1)
		@group = Group.find_by_code(params[:code])
		render 'findrsvp', :layout => false
	end

end
