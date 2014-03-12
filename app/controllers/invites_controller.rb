class InvitesController < ApplicationController
	def index
		@group = Group.find(params[:group_id])
		render '_index', :layout => false
	end
end
