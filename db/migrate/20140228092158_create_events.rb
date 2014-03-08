class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
			t.string :title
			t.date :date
			t.time :start_time
			t.time :end_time
			t.string :location_name
			t.string :location_address
      t.timestamps
			# need a time zone field?
    end
  end
end
