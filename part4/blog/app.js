const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const app = express()
const blogRouter = require('./controllers/blogController')

const mongoUrl = config.MONGODB_URI

mongoose.connect(mongoUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true }
    )
    .then(() => {
        logger.info('Connected to MongoDB')
    }).catch(err => {
        logger.error('error connecting to MongoDB:', err)
    })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app