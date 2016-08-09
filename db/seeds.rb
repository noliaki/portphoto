# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(id: 1, email: 'test@example.com', password: 'test@example.com')

500.times do |index|
  Image.create(
    user_id: 1,
    title: "TITLE: #{index}",
    description: "DESCRIPTION: #{index}",
    file: open("#{Rails.root}/public/uploads/image/seed/photo-#{(index % 3) + 1}.jpg")
  )
end
