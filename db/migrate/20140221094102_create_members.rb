class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
			t.belongs_to :group
			t.belongs_to :age_group
			t.string :first_name
			t.string :last_name
      t.timestamps
    end
  end
end
