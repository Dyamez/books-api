const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBook => {
            res.json(foundBook)
        })
})

// Show:
books.get('/:title', (req, res) => {
    Book.findOne({ name: req.params.name .toLowerCase() })
        .then(foundBook => {
            res.json(foundBook)
        })
})



module.exports = books
