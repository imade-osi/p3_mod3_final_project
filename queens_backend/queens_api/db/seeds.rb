# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
stylists = [

    {
        name: "General Booking",
        description: "The is a general appointment for the next available stylist"
    },
     {
        name: "Imaria",
        description: "Imaria will light any room she walks into. Just try not smilling when this wonderwoman touches your locks"
    },
     {
        name: "Sekinah",
        description: "Talented and always fashionable. Sekinah will have you feeling and looking like the queen you truly are"
    },
    {
        name: "May",
        description: "Easily the most experienced in all of Queen's. She has been there, done that, and tell you what you need before you even know it"
    }  
]

appointments = [
   
    {
        date: "2020-01-01",
        time: "12:30pm",
        stylist_id: 1
    },
    {
        date: "2020-01-02",
        time: "2:30pm",
        stylist_id: 2
    },
    {
        date: "2020-01-02",
        time: "5:30pm",
        stylist_id: 3
        
    }

]

Stylist.create(stylists)
Appointment.create(appointments)