class Appointment < ApplicationRecord
  belongs_to :stylist

  def date_text
        self.date.strftime("%m/%d/%y")
    end

    def time_text
        self.time.strftime("%I:%M %p")
    end

    def stylist_name
      self.stylist.name
    end 
end
