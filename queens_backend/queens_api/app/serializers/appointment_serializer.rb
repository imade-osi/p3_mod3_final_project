class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :stylist_id, :date_text, :time_text, :stylist_name
  
belongs_to :stylist
end
