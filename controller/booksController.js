const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBook => {
            res.json(foundBook)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// Show:
books.get('/:id', (req, res) => {
    Book.findOne({ name: req.params.name })
        .then(foundBook => {
            res.json(foundBook)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

books.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(foundBook => {
        res.json(foundBook)
    //.then(() => {
        //res.rederect('/books/${req.params.id}')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

books.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(book => {
        res.rederect('/books')
        console.log('Successful Deletion')
    })
    .catch('err', err)
    res.render('error404')
})

books.post('/books', (req, res) => {
    Book.create(req.body)
    .then(foundBook => {
        res.json(foundBook)
    //.then(() => {
        //res.rederect('/books')
    })
    .catch('err', err)
    res.render('error404')
})

module.exports = books