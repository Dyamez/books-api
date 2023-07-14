// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// model and export: 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book


/*{
    "id": 1,
    "title": "The Shinobi Initiative",
    "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
    "year": 2014,
    "quantity": "10",
    "imageURL": "/assets/shinobi-initiative.jpeg"
  }
*/