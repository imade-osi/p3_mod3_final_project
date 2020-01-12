class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :stylist, null: false, foreign_key: true
      t.date :date
      t.time :time

      t.timestamps
    end
  end
end
