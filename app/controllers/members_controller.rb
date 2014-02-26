class MembersController < ApplicationController
	def create
		@group = Group.find(params[:group_id])
		@member = @group.members.create(first_name: params[:first_name], last_name: params[:last_name], age_group_id: params[:age_group_id])
		render '_member', :layout => false, :locals => { member: @member }
	end

	def destroy
		@member = Member.find(params[:id])
		@member.destroy
		render nothing: true
	end
end
