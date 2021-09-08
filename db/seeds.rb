# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
puts "Seeding..."

Card.create(color: "yellow", icon: "🌞")
Card.create(color: "orange", icon: "🎃")
Card.create(color: "red", icon: "🛑")
Card.create(color: "blue", icon: "🐳")
Card.create(color: "green", icon: "🐸")
Card.create(color: "purple", icon: "🍇")
Card.create(color: "pink", icon: "🦩")
Card.create(color: "brown", icon: "🧸")

puts "Done Seeding!"

#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
