class GroupsController < ApplicationController
	def find
		sleep(1)
		@group = Group.find_by_code(params[:code])
		render 'find', :layout => false
	end
end
