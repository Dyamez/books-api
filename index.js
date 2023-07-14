const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB:', process.env.MONGO_URI)
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// Book: 
const booksController = require('./controllers/bookscontroller.js')
app.use('/books', booksController)


// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})