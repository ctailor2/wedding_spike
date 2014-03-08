class InvitesController < ApplicationController
	def index
		@group = Group.find(params[:group_id])
		render 'index', :layout => false
	end
end
