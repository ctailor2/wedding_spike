class Invite < ActiveRecord::Base
	belongs_to :event
	belongs_to :group
end
