const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const storeRouter = require('./routes/store')
const customerRouter = require('./routes/customer')

// App object and middlewares
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('combined'))

// MongoDB mongoose connection
mongoose.connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('Connected')
})

// Routes
app.use('/api/v1/store', storeRouter)
app.use('/api/v1/customer', customerRouter)

// Error and 404 middlewares
app.use(function (error, req, res, next) {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json(error)
    console.error(error)
    next()
})

app.use(function (req, res, next) {
    const error = new Error('Page not found.')
    res.status('404')
    next(error)
})

app.listen(process.env.PORT)
